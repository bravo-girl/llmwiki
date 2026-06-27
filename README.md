# LLM Wiki

Dateibasiertes Karpathy-LLM-Wiki für Cloudflare Workers AI und GitHub.

## Lokal

1. `npm install`
2. Das Zielrepository ist `bravo-girl/llmwiki` auf dem Branch `main`.
3. `.dev.vars.example` nach `.dev.vars` kopieren und einen fein abgestuften GitHub-Token mit `Contents: Read and write` eintragen.
4. `npm run dev`

## Cloudflare

```sh
npx wrangler login
npx wrangler secret put GITHUB_TOKEN
npx wrangler secret put ADMIN_KEY
npm run deploy
```

Der Free-Tarif stoppt nach Ausschöpfung des täglichen Workers-AI-Kontingents. Es ist kein kostenpflichtiger Fallback konfiguriert.

Original-URLs aus den Wiki-Seiten werden nur dann als anklickbare Quellen ausgegeben, wenn sie wörtlich in einer tatsächlich gelesenen Markdown-Seite vorkommen. Modellseitig erfundene oder veränderte URLs werden serverseitig verworfen.

## Markdown-Quellen einarbeiten

1. In der PWA „Markdown-Quelle hinzufügen“ öffnen.
2. Den als Cloudflare-Secret `ADMIN_KEY` gesetzten Schlüssel, eine eindeutige Quellen-ID (vorzugsweise die kanonische URL) und eine `.md`-Datei angeben.
3. Aus der Quellen-ID wird ein stabiler SHA-256-Kurzschlüssel erzeugt. Die Quelle wird als `<titel>--src-<schlüssel>.md` unveränderlich unter `raw/` committed.
4. Gemma integriert daraus Synthesen in `wiki/`, aktualisiert `index.md` und protokolliert Quellen-ID, Schlüssel und Abschlussstatus in `log.md`.

Vor jedem Ingest wird `log.md` geprüft. Eine erfolgreich abgeschlossene Quellen-ID wird nicht erneut verarbeitet. Bei ausgeschöpftem AI-Kontingent bleibt die Originalquelle erhalten und darf mit derselben Quellen-ID später erneut versucht werden. Pro Quelle sind höchstens 60.000 Zeichen erlaubt.

Bei HTML-Sammelseiten ist nicht die Top-URL die Ingest-Einheit. Jeder Fachabschnitt erhält eine eigene Quellen-ID mit `#llmwiki-section=<slug>` und wird separat gegen die Historie geprüft; verlinkte PDFs verwenden jeweils ihre eigene kanonische PDF-URL. Ein Seitenindex mit `Ingest: false` wird nicht verarbeitet.

## GitHub-Token erneuern

Der konfigurierte Fine-grained Token läuft am in `wrangler.jsonc` hinterlegten Datum `GITHUB_TOKEN_EXPIRES_AT` ab. Ab 14 Tagen vor diesem Datum zeigt die PWA eine Warnung.

1. Neuen Fine-grained Token nur für `bravo-girl/llmwiki` mit `Contents: Read and write` erstellen.
2. Mit `npx wrangler secret put GITHUB_TOKEN` verdeckt hinterlegen.
3. `GITHUB_TOKEN_EXPIRES_AT` auf das neue Ablaufdatum setzen und erneut deployen.
