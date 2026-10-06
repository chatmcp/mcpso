# MCP Servers

Welcome to the MCP Servers repository! Below is a curated list of MCP Servers that can be used with the [mcp.so](https://mcp.so) platform.

If you have an MCP Server you'd like to submit, please open a PR or raise an issue with the details below.

---

## How to Submit Your MCP Server

To add your MCP Server to the list, open a PR that adds an entry in the format below:

```
- **Name**: [Your Server Name](<repository-url>)
  - **Description**: Brief description of what your server does.
  - **Repository**: <github-url>
  - **Author**: <your-username-or-org>
```

---

## Submitted MCP Servers

### ✨ Add Your Server Here!

If you have an MCP Server that you'd like featured on [mcp.so](https://mcp.so), submit it using the format above.

---

## Usage

To use any of these MCP servers, add the server configuration to your `~/.config/mcp/` config file:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "<package-name>"]
    }
  }
}
```

---

## About mcp.so

[mcp.so](https://mcp.so) is a platform for discovering and sharing MCP (Model Context Protocol) Servers. Submit your server to get it listed!
