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

## Markdown-Quellen einarbeiten

1. In der PWA „Markdown-Quelle hinzufügen“ öffnen.
2. Den als Cloudflare-Secret `ADMIN_KEY` gesetzten Schlüssel und eine `.md`-Datei angeben.
3. Die Quelle wird zuerst unveränderlich unter `raw/` committed. Gemma integriert daraus Synthesen in `wiki/`, aktualisiert `index.md` und protokolliert den Ingest in `log.md`.

Bei ausgeschöpftem AI-Kontingent bleibt die Originalquelle erhalten. Dieselbe Datei kann später erneut hochgeladen werden; anderer Inhalt unter demselben Dateinamen wird zum Schutz von `raw/` abgewiesen. Pro Quelle sind höchstens 60.000 Zeichen erlaubt.

## GitHub-Token erneuern

Der konfigurierte Fine-grained Token läuft am in `wrangler.jsonc` hinterlegten Datum `GITHUB_TOKEN_EXPIRES_AT` ab. Ab 14 Tagen vor diesem Datum zeigt die PWA eine Warnung.

1. Neuen Fine-grained Token nur für `bravo-girl/llmwiki` mit `Contents: Read and write` erstellen.
2. Mit `npx wrangler secret put GITHUB_TOKEN` verdeckt hinterlegen.
3. `GITHUB_TOKEN_EXPIRES_AT` auf das neue Ablaufdatum setzen und erneut deployen.
