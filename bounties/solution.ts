// src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.resolve(__dirname, '../servers.json');

app.use(cors());
app.use(express.json());

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Helper to read stored servers
function readServers(): string[] {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    try {
        const data = JSON.parse(raw);
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

// Helper to write servers
function writeServers(servers: string[]) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(servers, null, 2));
}

// GET all submitted MCP server links
app.get('/servers', (req: Request, res: Response) => {
    const servers = readServers();
    res.json({ servers });
});

// POST a new MCP server link
app.post('/servers', (req: Request, res: Response) => {
    const { url } = req.body;
    if (typeof url !== 'string' || !url.trim()) {
        return res.status(400).json({ error: 'Invalid or missing "url" field.' });
    }

    const servers = readServers();
    if (servers.includes(url)) {
        return res.status(409).json({ error: 'Server URL already submitted.' });
    }

    servers.push(url);
    writeServers(servers);
    res.status(201).json({ message: 'Server URL added successfully.', url });
});

// Simple health check
app.get('/health', (_req, res) => res.send('OK'));

app.listen(PORT, () => {
    console.log(`MCP Server submission API running on http://localhost:${PORT}`);
});