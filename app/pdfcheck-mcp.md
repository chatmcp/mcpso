---
name: pdfcheck-mcp
description: Validates PDF page-tree structure for QA on generated PDFs: Kids entries resolve to Page objects, Contents points at streams, orphan detection, Count match
homepage: https://github.com/jayjex/pdfcheck-mcp
repository: https://github.com/jayjex/pdfcheck-mcp
documentation: https://github.com/jayjex/pdfcheck-mcp#readme
license: MIT
install: "npx -y @jayjex/pdfcheck-mcp"
categories:
  - developer-tools
  - qa
keywords:
  - pdf
  - validation
  - qa
  - page-tree
  - mcp
---

MCP server that walks the PDF object graph instead of counting streams. Two tools: pdf_qa(path) validates a single PDF (every /Kids entry resolves to a /Type /Page object, every page /Contents points to a stream object, no orphan /Type /Page objects, reachable page count matches /Count, blank-page check for content streams with no text ops) and pdf_batch(dir) runs the same checks over every PDF in a directory. Built for QA pipelines that generate PDFs, where a stream-count check passes while the document is unreadable. stdio transport, Node >=18, no native dependencies. Published on npm as @jayjex/pdfcheck-mcp.
