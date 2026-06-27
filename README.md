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
