from __future__ import annotations

from copy import deepcopy
from datetime import date
from hashlib import sha256
from pathlib import Path
from urllib.parse import urljoin, urlsplit, urlunsplit
import os
import re
import shutil
import subprocess
import unicodedata

import pdfplumber
import requests
from lxml import etree, html
from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCES_ROOT = ROOT / "quellen"
OUTPUT = SOURCES_ROOT / "1"
TMP = ROOT / "tmp" / "complete-ingest"
PDFTOPPM = Path(
    os.environ.get("PDFTOPPM")
    or shutil.which("pdftoppm")
    or Path.home() / ".cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/Library/bin/pdftoppm.exe"
)
TODAY = date.today().isoformat()


def canonical_url(value: str) -> str:
    parts = urlsplit(value.strip())
    host = (parts.hostname or "").lower()
    port = parts.port
    netloc = host if port is None or (parts.scheme == "https" and port == 443) or (parts.scheme == "http" and port == 80) else f"{host}:{port}"
    path = "" if parts.path == "/" else parts.path
    return urlunsplit((parts.scheme.lower(), netloc, path, parts.query, parts.fragment))


def source_key(source_id: str) -> str:
    return "src-" + sha256(source_id.encode("utf-8")).hexdigest()[:20]


def slugify(value: str, maximum: int = 72) -> str:
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode("ascii").lower()
    value = re.sub(r"\([^)]*(?:pdf|kb|mb)[^)]*\)", "", value, flags=re.I)
    value = re.sub(r"\bpdf\s*\|.*$", "", value, flags=re.I)
    value = re.sub(r"[^a-z0-9]+", "-", value).strip("-")
    return value[:maximum].rstrip("-") or "quelle"


def clean_text(value: str) -> str:
    value = value.replace("\u00a0", " ").replace("\u00ad", "")
    value = re.sub(r"[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}", "[Kontaktangabe entfernt]", value)
    value = re.sub(r"(?<!\d)(?:\+49|0)\s?(?:\d[\s/-]?){7,}\d", "[Telefonnummer entfernt]", value)
    return re.sub(r"[ \t]+", " ", value).strip()


def inline_markdown(node: etree._Element, base_url: str) -> str:
    parts: list[str] = []
    if node.text:
        parts.append(node.text)
    for child in node:
        if child.tag == "a":
            label = clean_text(" ".join(child.text_content().split()))
            href = child.get("href", "")
            if href.startswith("mailto:") or href.startswith("tel:"):
                rendered = label if not re.search(r"@|\+?\d{7,}", label) else ""
            else:
                target = urljoin(base_url, href)
                rendered = f"[{label}]({target})" if label and target else label
            parts.append(rendered)
        elif child.tag in {"strong", "b"}:
            parts.append(f"**{clean_text(' '.join(child.text_content().split()))}**")
        elif child.tag in {"em", "i"}:
            parts.append(f"*{clean_text(' '.join(child.text_content().split()))}*")
        elif child.tag == "br":
            parts.append("\n")
        else:
            parts.append(inline_markdown(child, base_url))
        if child.tail:
            parts.append(child.tail)
    return clean_text("".join(parts))


def table_markdown(node: etree._Element, base_url: str) -> str:
    rows = []
    for row in node.xpath(".//tr"):
        cells = [inline_markdown(cell, base_url).replace("|", "\\|") for cell in row.xpath("./th|./td")]
        if cells:
            rows.append(cells)
    if not rows:
        return ""
    width = max(len(row) for row in rows)
    rows = [row + [""] * (width - len(row)) for row in rows]
    return "\n".join([
        "| " + " | ".join(rows[0]) + " |",
        "|" + "|".join(["---"] * width) + "|",
        *("| " + " | ".join(row) + " |" for row in rows[1:]),
    ])


def blocks_to_markdown(nodes: list[etree._Element], base_url: str, heading_offset: int = 0) -> str:
    blocks: list[str] = []
    for original in nodes:
        node = deepcopy(original)
        for unwanted in node.xpath(".//script|.//style|.//svg|.//picture|.//img"):
            unwanted.getparent().remove(unwanted)
        tag = node.tag.lower() if isinstance(node.tag, str) else ""
        if tag in {"h1", "h2", "h3", "h4", "h5", "h6"}:
            level = min(6, int(tag[1]) + heading_offset)
            text = clean_text(" ".join(node.text_content().split()))
            if text:
                blocks.append(f"{'#' * level} {text}")
        elif tag == "p":
            text = inline_markdown(node, base_url)
            if text and "Ende des Expander-Inhaltes" not in text:
                blocks.append(text)
        elif tag in {"ul", "ol"}:
            ordered = tag == "ol"
            lines = []
            for index, item in enumerate(node.xpath("./li"), start=1):
                text = inline_markdown(item, base_url)
                if text:
                    lines.append(f"{index}. {text}" if ordered else f"- {text}")
            if lines:
                blocks.append("\n".join(lines))
        elif tag == "table":
            table = table_markdown(node, base_url)
            if table:
                blocks.append(table)
        elif tag == "details":
            summary = node.xpath("./summary")
            title = clean_text(" ".join(summary[0].text_content().split())) if summary else "Fachabschnitt"
            children = [child for child in node if child.tag != "summary"]
            body = blocks_to_markdown(children, base_url, heading_offset + 1)
            blocks.append(f"### {title}\n\n{body}".strip())
        elif tag in {"div", "section", "article"}:
            body = blocks_to_markdown(list(node), base_url, heading_offset)
            if body:
                blocks.append(body)
        else:
            text = inline_markdown(node, base_url)
            if text and "Ende des Expander-Inhaltes" not in text:
                blocks.append(text)
    return "\n\n".join(block for block in blocks if block.strip()).strip()


def topic_markdown(title: str, discovery_url: str, section_slug: str, body: str) -> tuple[str, str]:
    source_id = f"{discovery_url}#llmwiki-section={section_slug}"
    key = source_key(source_id)
    page_slug = slugify(urlsplit(discovery_url).path.rstrip("/").split("/")[-1].rsplit("-", 1)[0], 42)
    filename = f"{page_slug}--{section_slug}--{key}.md"
    markdown = f"""# {title}

- Quellenart: HTML-Fachabschnitt
- Discovery-URL: `{discovery_url}`
- Quellen-ID: `{source_id}`
- Original-URL: [Fachabschnitt auf der HTML-Seite öffnen]({discovery_url})
- Quellen-Schlüssel: `{key}`
- Abschnitts-Slug: `{section_slug}`
- Abrufdatum: {TODAY}

> Quellentreue Extraktion eines einzelnen fachlichen HTML-Abschnitts. Dieser Abschnitt ist eine eigenständige Ingest-Einheit.

{body.strip()}
"""
    return filename, markdown


def extract_topics(tree: etree._Element, discovery_url: str, line: int) -> list[tuple[str, str, str]]:
    article = tree.xpath("//article[contains(@class, 'o-article')]")[0]
    headline = article.xpath('.//h2[contains(@class, "o-article__headline")]')[0]
    header = headline.getparent()
    title = clean_text(" ".join(headline.text_content().split())).removeprefix("Artikel:").strip()
    lead_nodes = [node for node in header if node is not headline]
    richtext = article.xpath('.//div[contains(@class, "o-article__richtext")]')[0]
    children = list(richtext)
    topics: list[tuple[str, str, str]] = []

    if line == 1:
        return topics

    if line == 2:  # FAQ: Intro plus jede thematische H2-Gruppe
        first_h2 = next((index for index, node in enumerate(children) if node.tag == "h2"), len(children))
        intro_body = blocks_to_markdown(lead_nodes + children[:first_h2], discovery_url)
        topics.append((f"{title} - Einleitung", "faq-einleitung", intro_body))
        index = first_h2
        while index < len(children):
            heading = children[index]
            if heading.tag != "h2":
                index += 1
                continue
            section_title = clean_text(" ".join(heading.text_content().split()))
            end = index + 1
            while end < len(children) and children[end].tag != "h2":
                end += 1
            body = blocks_to_markdown(children[index + 1:end], discovery_url)
            topics.append((section_title, slugify(section_title), body))
            index = end
        return topics

    details_positions = [index for index, node in enumerate(children) if node.tag == "details"]
    if details_positions:
        first = details_positions[0]
        intro_body = blocks_to_markdown(lead_nodes + children[:first], discovery_url)
        topics.append((f"{title} - Einleitung", "einleitung", intro_body))
        for node in (children[index] for index in details_positions):
            summary = node.xpath("./summary")
            section_title = clean_text(" ".join(summary[0].text_content().split())) if summary else "Fachabschnitt"
            body = blocks_to_markdown([child for child in node if child.tag != "summary"], discovery_url)
            topics.append((section_title, slugify(section_title), body))
        return topics

    body = blocks_to_markdown(lead_nodes + children, discovery_url)
    return [(title, "fachinformationen", body)]


def pdf_title(label: str, fallback_url: str) -> str:
    cleaned = re.sub(r"\s*\(?PDF\s*\|?[^)]*\)?\s*$", "", label, flags=re.I).strip(" -")
    return cleaned or Path(urlsplit(fallback_url).path).stem


def sanitized_pdf_text(text: str) -> str:
    lines = []
    for raw in text.replace("\u00ad", "").splitlines():
        line = clean_text(raw)
        if not line:
            continue
        if re.search(r"(?:kontakt|ansprechpartner|telefon|mobil|e-mail)\s*:", line, re.I):
            line = re.sub(r"(?:kontakt|ansprechpartner|telefon|mobil|e-mail)\s*:.*$", "", line, flags=re.I).strip()
        if line:
            lines.append(line)
    return "\n".join(lines)


def make_contact_sheet(images: list[Path], output: Path) -> None:
    thumbs = []
    for index, image_path in enumerate(images, start=1):
        with Image.open(image_path) as source:
            image = source.convert("RGB")
            image.thumbnail((240, 170))
            tile = Image.new("RGB", (260, 200), "white")
            tile.paste(image, ((260 - image.width) // 2, 22))
            ImageDraw.Draw(tile).text((8, 5), f"Seite {index}", fill="black")
            thumbs.append(tile)
    columns = 4
    rows = (len(thumbs) + columns - 1) // columns
    sheet = Image.new("RGB", (columns * 260, rows * 200), "#dddddd")
    for index, tile in enumerate(thumbs):
        sheet.paste(tile, ((index % columns) * 260, (index // columns) * 200))
    sheet.save(output)


session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; LLMWikiSourceCollector/1.0)", "Accept": "text/html,application/xhtml+xml"})
OUTPUT.mkdir(parents=True, exist_ok=True)
TMP.mkdir(parents=True, exist_ok=True)
discovery_urls = [canonical_url(line) for line in (SOURCES_ROOT / "quellen.txt").read_text(encoding="utf-8").splitlines() if line.strip()]

# Indizes werden bei jedem Gesamtlauf vollständig aus dem Manifest neu aufgebaut.
for stale_index in OUTPUT.glob("quellenindex-*.md"):
    stale_index.unlink()

existing_pdf_urls: dict[str, tuple[str, str]] = {}
for md in OUTPUT.glob("*.md"):
    content = md.read_text(encoding="utf-8")
    kind = re.search(r"(?m)^- Quellenart: (.+)$", content)
    source = re.search(r"(?m)^- Quellen-ID: `([^`]+)`$", content)
    local = re.search(r"(?m)^- Original: \[\[([^\]]+\.pdf)\]\]$", content)
    if kind and kind.group(1).strip() == "PDF" and source and local:
        existing_pdf_urls[canonical_url(source.group(1))] = (md.name, local.group(1))

pages = []
pdf_inventory: dict[str, dict] = {}
for line, discovery_url in enumerate(discovery_urls, start=1):
    response = session.get(discovery_url, timeout=60)
    response.raise_for_status()
    tree = html.fromstring(response.content, base_url=discovery_url)
    topics = extract_topics(tree, discovery_url, line)
    generated_topics = []
    if line == 1:
        for md in sorted(OUTPUT.glob("*.md")):
            content = md.read_text(encoding="utf-8")
            if "- Quellenart: HTML-Fachabschnitt" not in content or f"- Discovery-URL: `{discovery_url}`" not in content:
                continue
            generated_topics.append((content.splitlines()[0].removeprefix("# "), md.name))
    for title, section_slug, body in topics:
        filename, markdown = topic_markdown(title, discovery_url, section_slug, body)
        (OUTPUT / filename).write_text(markdown, encoding="utf-8", newline="\n")
        generated_topics.append((title, filename))
    article = tree.xpath("//article[contains(@class, 'o-article')]")[0]
    page_pdfs = []
    for anchor in article.xpath(".//a[@href]"):
        href = urljoin(discovery_url, anchor.get("href"))
        if ".pdf" not in href.lower():
            continue
        pdf_url = canonical_url(href)
        label = clean_text(" ".join(anchor.text_content().split()))
        if pdf_url not in page_pdfs:
            page_pdfs.append(pdf_url)
        pdf_inventory.setdefault(pdf_url, {"title": pdf_title(label, pdf_url), "discovery_urls": []})["discovery_urls"].append(discovery_url)
    pages.append({"url": discovery_url, "topics": generated_topics, "pdfs": page_pdfs})

for pdf_url, info in sorted(pdf_inventory.items()):
    if pdf_url in existing_pdf_urls and all((OUTPUT / name).exists() for name in existing_pdf_urls[pdf_url]):
        info["md"], info["pdf"] = existing_pdf_urls[pdf_url]
        existing_markdown = (OUTPUT / info["md"]).read_text(encoding="utf-8")
        if not re.search(r"(?m)^- Discovery-URL:", existing_markdown):
            existing_markdown = existing_markdown.replace(
                "- Quellenart: PDF",
                f"- Quellenart: PDF\n- Discovery-URL: `{info['discovery_urls'][0]}`",
                1,
            )
            (OUTPUT / info["md"]).write_text(existing_markdown, encoding="utf-8", newline="\n")
        continue
    key = source_key(pdf_url)
    slug = slugify(info["title"])
    pdf_name = f"{slug}--{key}.pdf"
    md_name = f"{slug}--{key}.md"
    pdf_path = OUTPUT / pdf_name
    response = session.get(pdf_url, timeout=120)
    response.raise_for_status()
    pdf_path.write_bytes(response.content)
    page_blocks = []
    with pdfplumber.open(pdf_path) as document:
        page_count = len(document.pages)
        for number, page in enumerate(document.pages, start=1):
            text = sanitized_pdf_text(page.extract_text(x_tolerance=2, y_tolerance=3) or "")
            page_blocks.append(f"## Seite {number}\n\n{text or '[Kein extrahierbarer Text auf dieser Seite.]'}")
    markdown = f"""# {info['title']}

- Quellenart: PDF
- Discovery-URL: `{info['discovery_urls'][0]}`
- Quellen-ID: `{pdf_url}`
- Original-URL: [PDF beim Herausgeber öffnen]({pdf_url})
- Quellen-Schlüssel: `{key}`
- Abrufdatum: {TODAY}
- Original: [[{pdf_name}]]

> Quellentreue Rohdaten-Transkription nach PDF-Seiten. Personenbezogene Kontaktwerte wurden entfernt. Bei Tabellen und Diagrammen ist für die räumliche Zuordnung das unveränderte Original-PDF maßgeblich.

{chr(10).join(chr(10) + block for block in page_blocks).strip()}
"""
    (OUTPUT / md_name).write_text(markdown, encoding="utf-8", newline="\n")
    info["md"], info["pdf"], info["pages"] = md_name, pdf_name, page_count

    render_dir = TMP / key
    render_dir.mkdir(parents=True, exist_ok=True)
    prefix = render_dir / "page"
    if not PDFTOPPM.exists():
        raise RuntimeError("pdftoppm wurde nicht gefunden. Poppler installieren oder PDFTOPPM setzen.")
    subprocess.run([str(PDFTOPPM), "-png", "-r", "72", str(pdf_path), str(prefix)], check=True, capture_output=True)
    rendered = sorted(render_dir.glob("page-*.png"))
    make_contact_sheet(rendered, TMP / f"{key}--contact.png")

for page in pages:
    page_key = source_key(page["url"])
    page_slug = slugify(urlsplit(page["url"]).path.rstrip("/").split("/")[-1].rsplit("-", 1)[0])
    filename = f"quellenindex-{page_slug}--{page_key}.md"
    lines = [
        f"# Quellenindex: {page_slug}", "",
        "- Quellenart: Sammlungsindex",
        f"- Discovery-URL: `{page['url']}`",
        f"- Original-URL: [HTML-Seite beim Herausgeber öffnen]({page['url']})",
        f"- Discovery-Schlüssel: `{page_key}`",
        "- Ingest: `false`",
        f"- Abrufdatum: {TODAY}", "",
        "> Dieser Index dient nur der Navigation. Ingest-Einheiten sind die einzelnen HTML-Fachabschnitte und PDF-Transkriptionen.", "",
        "## HTML-Fachabschnitte", "",
    ]
    lines.extend(f"- {title}: [[{topic_file}]]" for title, topic_file in page["topics"])
    lines.extend(["", "## PDF-Fachthemen", ""])
    lines.extend(f"- {pdf_inventory[url]['title']}: [[{pdf_inventory[url]['md']}]] · [[{pdf_inventory[url]['pdf']}]]" for url in page["pdfs"])
    (OUTPUT / filename).write_text("\n".join(lines) + "\n", encoding="utf-8", newline="\n")

# Die gemeinsame Quellenbasis enthält nur Quellen, die mindestens ein aktueller
# Quellenindex referenziert. Dadurch werden entfernte Themen im Historienlauf
# tatsächlich als gelöscht erkennbar.
referenced_markdown = {
    topic_file for page in pages for _, topic_file in page["topics"]
} | {info["md"] for info in pdf_inventory.values()}
referenced_pdfs = {info["pdf"] for info in pdf_inventory.values()}
for candidate in OUTPUT.glob("*.md"):
    if not candidate.name.startswith("quellenindex-") and candidate.name not in referenced_markdown:
        candidate.unlink()
for candidate in OUTPUT.glob("*.pdf"):
    if candidate.name not in referenced_pdfs:
        candidate.unlink()

print(f"Discovery-URLs: {len(discovery_urls)}")
print(f"HTML-Themen gesamt: {sum(len(page['topics']) for page in pages)}")
print(f"PDF-Quellen gesamt: {len(pdf_inventory)}")
print(f"PDF-Quellen neu heruntergeladen: {sum(1 for info in pdf_inventory.values() if 'pages' in info)}")
