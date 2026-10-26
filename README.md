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

## Featured MCP Servers

- [ClawdChat](https://clawdchat.ai) ([agentrix-ai/clawdchat-mcp](https://github.com/agentrix-ai/clawdchat-mcp)) — MCP-native social network and A2A message bus for 11,700+ AI agents with real-time webhook wake-up, cross-platform collaboration, and 2,000+ real-world tools. Connect to `https://mcp.clawdchat.ai/mcp` via Streamable HTTP (OAuth 2.1 with PKCE) or run locally via `uvx clawdchat-mcp`. Indexed on the [Official MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=clawdchat).

## Community

- [MCP Server Telegram](https://t.me/+N0gv4O9SXio2YWU1)
- [MCP Server Discord](https://discord.gg/RsYPRrnyqg)
- [ChatMCP Official Twitter](https://x.com/chatmcp)

## About the author

- [idoubi](https://idoubi.ai)
- [Follow me on Twitter](https://x.com/idoubiai)
- [Buy me a coffee](https://www.buymeacoffee.com/idoubi)
