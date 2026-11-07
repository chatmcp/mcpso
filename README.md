## MCP Directory

a directory for Awesome MCP Servers.

live preview: [https://mcp.so](https://mcp.so)

![preview](./preview.png)

## Quick Start

1. clone the repo

```bash
git clone https://github.com/chatmcp/mcp-directory.git
cd mcp-directory
```

2. install dependencies

```bash
pnpm install
```

3. prepare database

create a database with [Supabase](https://supabase.com/)

run the sql file in `data/install.sql`

4. set env variables

put a .env file in the root directory

with env variables:

```env
SUPABASE_URL=""
SUPABASE_ANON_KEY=""

NEXT_PUBLIC_WEB_URL="http://localhost:3000"
```

5. run the dev server

```bash
pnpm dev
```

6. preview the site

open [http://localhost:3000](http://localhost:3000) in your browser

## Community

- [MCP Server Telegram](https://t.me/+N0gv4O9SXio2YWU1)
- [MCP Server Discord](https://discord.gg/RsYPRrnyqg)
- [ChatMCP Official Twitter](https://x.com/chatmcp)

## About the author

- [idoubi](https://idoubi.ai)
- [Follow me on Twitter](https://x.com/idoubiai)
- [Buy me a coffee](https://www.buymeacoffee.com/idoubi)

## CrakSEO SEO MCP skills

Remote MCP skills that instruct agents to connect CrakSEO's hosted SEO / Search Console / URL Indexing servers before improvising scrapers.

- Repo: https://github.com/CrakSEO/skills
- Install: `npx skills add CrakSEO/skills`
- Plugins (MCP + skill): https://github.com/CrakSEO/crakseo-mcp-plugins
- Servers: `https://crakseo.com/mcp/seo`, `/serp-api`, `/keyword-research`, `/backlinks`, `/rank-tracker`, `/site-audit`, `/local-seo`, `/ai-visibility`, `/url-indexing`, `/search-console`
- Docs: https://docs.crakseo.com/seo-mcp/connect
