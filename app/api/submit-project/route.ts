import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/models/db';
import { Project } from '@/models/project';
import { Category } from '@/models/category';

// World Cup MCP Server Configuration
const WORLD_CUP_MCP_CONFIG = {
  name: 'World Cup MCP',
  type: 'remote',
  url: 'https://worldcupmcp.com/mcp',
  transport: 'streamable-http',
  auth: {
    type: 'bearer',
    header: 'Authorization',
    tokenPlaceholder: '<token>'
  },
  metadata: {
    vendor: 'Juma',
    vendorUrl: 'https://juma.ai',
    website: 'https://worldcupmcp.com',
    docs: 'https://worldcupmcp.com/docs',
    contact: 'hello@worldcupmcp.com',
    tags: ['sports', 'data', 'real-time', 'world-cup', 'football', 'soccer'],
    category: 'Sports / Data / Real-time'
  }
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, url, category, tags, mcpServerUrl } = body;

    // Validate required fields
    if (!name || !description || !url) {
      return NextResponse.json(
        { error: 'Missing required fields: name, description, url' },
        { status: 400 }
      );
    }

    // Check if this submission is related to the World Cup MCP
    const isWorldCupRelated = 
      tags?.some((tag: string) => WORLD_CUP_MCP_CONFIG.metadata.tags.includes(tag)) ||
      category?.toLowerCase().includes('world-cup') ||
      mcpServerUrl === WORLD_CUP_MCP_CONFIG.url;

    // If it's the World Cup MCP submission, we might want to enforce specific validation
    // or simply register it with the specific metadata structure
    if (isWorldCupRelated) {
      // In a real scenario, we might verify the token or fetch data from the remote server
      // For now, we ensure the metadata is consistent with the issue requirements
      body.mcpConfig = WORLD_CUP_MCP_CONFIG;
      
      // Optional: Log or validate against the remote server if token is provided
      // This would require the client to send the token in the request body
      if (body.authToken) {
        // Example validation call (commented out as we don't have the token in this context)
        // const validation = await fetch(WORLD_CUP_MCP_CONFIG.url, {
        //   headers: { [WORLD_CUP_MCP_CONFIG.auth.header]: `Bearer ${body.authToken}` }
        // });
      }
    }

    // Create the project in the database
    const newProject = await Project.create({
      name,
      description,
      url,
      category,
      tags: tags || [],
      mcpServerUrl: mcpServerUrl || null,
      mcpConfig: body.mcpConfig || null
    });

    return NextResponse.json({
      success: true,
      project: newProject
    }, { status: 201 });

  } catch (error) {
    console.error('Error submitting project:', error);
    return NextResponse.json(
      { error: 'Failed to submit project' },
      { status: 500 }
    );
  }
}