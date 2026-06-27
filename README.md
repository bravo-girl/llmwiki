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
npm run deploy
```

Der Free-Tarif stoppt nach Ausschöpfung des täglichen Workers-AI-Kontingents. Es ist kein kostenpflichtiger Fallback konfiguriert.

## GitHub-Token erneuern

Der konfigurierte Fine-grained Token läuft am in `wrangler.jsonc` hinterlegten Datum `GITHUB_TOKEN_EXPIRES_AT` ab. Ab 14 Tagen vor diesem Datum zeigt die PWA eine Warnung.

1. Neuen Fine-grained Token nur für `bravo-girl/llmwiki` mit `Contents: Read and write` erstellen.
2. Mit `npx wrangler secret put GITHUB_TOKEN` verdeckt hinterlegen.
3. `GITHUB_TOKEN_EXPIRES_AT` auf das neue Ablaufdatum setzen und erneut deployen.
