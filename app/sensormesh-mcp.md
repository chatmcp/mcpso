---
name: sensormesh-mcp
description: Read access to the SensorMesh open IoT sensor data commons: device list, filtered reading windows, per-sensor stats. No API key
homepage: https://github.com/jayjex/sensormesh-mcp
repository: https://github.com/jayjex/sensormesh-mcp
documentation: https://github.com/jayjex/sensormesh-mcp#readme
license: MIT
install: "npx -y @jayjex/sensormesh-mcp"
categories:
  - iot
  - data
keywords:
  - iot
  - sensors
  - open-data
  - air-quality
  - mcp
---

MCP server for the SensorMesh open sensor data commons, which publishes IoT readings (air quality, temperature, noise) behind a plain HTTP API with stable schemas. Three tools: sensor_list (devices, sites, sensor types, row counts, time coverage, sha256 of the backing data file), a readings query with device/site/type/time filters, and per-sensor stats. No API key required. stdio transport, Node >=18. Published on npm as @jayjex/sensormesh-mcp.
