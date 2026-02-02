# Wesley Tomé — Site & Blog

Este repositório contém o site pessoal e o blog com Next.js (App Router) e Sanity.

## Stack
- Next.js (App Router) + TypeScript
- Sanity (CMS headless)
- Vercel (deploy)
- i18n por subdiretório: `/pt` e `/en`

## Como rodar localmente
```bash
npm install
npm run dev
```

## Variáveis de ambiente
Crie um `.env.local` com:
```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-06-01
SANITY_API_TOKEN=xxxxx

# Preview
SANITY_PREVIEW_SECRET=xxxxx

# Revalidate webhook
SANITY_WEBHOOK_SECRET=xxxxx
```

## Preview de drafts
1. Gere um secret (`SANITY_PREVIEW_SECRET`).
2. Acesse:
```
/api/draft?secret=SEU_SECRET&slug=slug-do-post&lang=pt
```
3. Para sair do preview:
```
/api/exit-draft
```

## Webhook de revalidação
Configure um webhook no Sanity apontando para:
```
POST /api/revalidate
Header: x-sanity-secret: <SANITY_WEBHOOK_SECRET>
Body JSON:
{
  "slug": "meu-post",
  "language": "pt"
}
```

## RSS
- `/pt/rss.xml`
- `/en/rss.xml`

## Sitemap e robots
- `/sitemap.xml`
- `/robots.txt`

## Studio (opcional)
O Sanity Studio está configurado via `sanity.config.ts`.
```
npx sanity dev
```
