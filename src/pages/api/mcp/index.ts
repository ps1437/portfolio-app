import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// ── Portfolio Data ────────────────────────────────────────────────────────────

const PORTFOLIO = {
  name: "Praveen Soni",
  title: "Full Stack Developer",
  summary:
    "Full Stack Developer with over 10 years of experience in designing, building, and deploying scalable REST APIs and responsive web applications. Proven expertise across the full SDLC—from architecture and implementation to testing and production release.",
  contact: {
    phone: "+91 8297685120",
    email: "praveen369soni@gmail.com",
    location: "Hyderabad, India",
    website: "https://www.syscho.in/",
    resume:
      "https://raw.githubusercontent.com/ps1437/HLD-LLD---master-series/main/Praveen_Soni_FullStack_java_developer_10_years.pdf",
  },
  interests: ["Coding", "Naruto", "Dragon Ball", "One Piece"],
  experience: [
    {
      id: 1,
      role: "Associate Director",
      company: "CRISIL Limited",
      from: "2025-09",
      to: "Present",
      highlights: [
        "Leading design & development of an AI-powered Engineering Platform using Java 21, Spring Boot, Redis, React.js, and Cloud (Azure/AWS).",
        "End-to-end SDLC ownership including HLD/LLD, code reviews, CI/CD, and production deployments.",
        "Driving GenAI integration with RAG, MCP Server, and Vector Databases.",
        "Engineering leadership & DevOps — mentoring teams, improving reliability and observability.",
      ],
    },
    {
      id: 2,
      role: "Senior Software Engineer",
      company: "EPAM Systems",
      from: "2024-04",
      to: "2026-01",
      highlights: [
        "Developed modular RESTful APIs for smoother system communication.",
        "Built responsive and dynamic UI using React.",
        "Automated end-to-end tests using Cypress.",
      ],
    },
    {
      id: 3,
      role: "Senior Software Engineer",
      company: "Intercontinental Exchange (ICE)",
      from: "2023-09",
      to: "2024-03",
      highlights: [
        "Worked on ICE Commodity Traceability (ICE CoT) to automate farm-origin traceability data.",
      ],
    },
    {
      id: 4,
      role: "Senior Software Engineer",
      company: "BlueYonder",
      from: "2021-06",
      to: "2023-09",
      highlights: [
        "Reactive API development using Spring Boot WebFlux.",
        "Daily code reviews and GraphQL BFF implementation.",
      ],
    },
    {
      id: 5,
      role: "Senior Software Engineer",
      company: "EPAM Systems",
      from: "2020-07",
      to: "2021-07",
      highlights: [
        "Spring Boot + Hexagonal Architecture microservices.",
        "TDD with JUnit/Mockito, 90% coverage. React.js reusable components.",
      ],
    },
    {
      id: 6,
      role: "Software Engineer",
      company: "Wipro",
      from: "2015-07",
      to: "2020-03",
      highlights: [
        "SPA using React.js, Redux, Spring Boot, Spring REST.",
        "Security module with Spring Security + JWT for Member360suite.",
        "Redis, Spring AOP, Material UI, Bootstrap across multiple projects.",
      ],
    },
  ],
  skills: [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 90 },
    { name: "Spring", level: 90 },
    { name: "React.js", level: 90 },
    { name: "MongoDB", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "CSS", level: 80 },
    { name: "GraphQL", level: 80 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Material UI", level: 80 },
    { name: "Docker", level: 75 },
    { name: "Redis", level: 70 },
    { name: "Kafka", level: 70 },
    { name: "MCP", level: 70 },
    { name: "Sanity.io", level: 70 },
    { name: "AWS", level: 60 },
    { name: "Firebase", level: 50 },
  ],
  projects: [
    { id: 1, name: "One Piece Theme – Calculator App", description: "Calculator with basic arithmetic and advanced operations.", tags: ["React"] },
    { id: 2, name: "React Hooks", description: "Website showcasing React hooks with live code examples.", tags: ["React"] },
    { id: 3, name: "Portfolio App", description: "Portfolio built with Next.js, Tailwind CSS, and Sanity.io.", tags: ["Next.js", "Tailwind CSS", "Sanity.io"] },
    { id: 4, name: "Newz Hub", description: "News app with search and latest current affairs.", tags: ["React"] },
    { id: 5, name: "Candy Crush Clone", description: "Candy Crush game clone using React.js.", tags: ["React"] },
    { id: 6, name: "CA App", description: "CA services web app for Hyderabad-based financial firm.", tags: ["Web App"] },
    { id: 7, name: "GitHub Profile Viewer", description: "App for viewing GitHub profiles.", tags: ["React", "GitHub API"] },
    { id: 8, name: "Tiwari Ji Security Service", description: "Security services website for a Hyderabad-based firm.", tags: ["Web App"] },
  ],
};

// ── Tool Definitions ──────────────────────────────────────────────────────────

const TOOLS = [
  {
    name: "get_profile",
    description: "Get Praveen Soni's full profile including summary, contact details, and interests.",
    inputSchema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "get_experience",
    description: "Get work experience. Optionally filter by company name.",
    inputSchema: {
      type: "object",
      properties: {
        company: { type: "string", description: "Company name filter (case-insensitive)" },
      },
      required: [],
    },
  },
  {
    name: "get_skills",
    description: "Get technical skills. Optionally filter by minimum proficiency level (0–100).",
    inputSchema: {
      type: "object",
      properties: {
        min_level: { type: "number", description: "Minimum skill level (0–100)", minimum: 0, maximum: 100 },
      },
      required: [],
    },
  },
  {
    name: "get_projects",
    description: "Get portfolio projects. Optionally filter by a technology tag.",
    inputSchema: {
      type: "object",
      properties: {
        tag: { type: "string", description: "Technology tag, e.g. 'React', 'Next.js'" },
      },
      required: [],
    },
  },
  {
    name: "get_contact",
    description: "Get contact info — email, phone, location, website, and resume link.",
    inputSchema: { type: "object", properties: {}, required: [] },
  },
  {
    name: "search_portfolio",
    description: "Full-text search across all portfolio sections.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Keyword to search, e.g. 'GraphQL', 'RAG'" },
      },
      required: ["query"],
    },
  },
];

// ── Tool Executor ─────────────────────────────────────────────────────────────

function executeTool(name: string, args: Record<string, unknown>) {
  switch (name) {
    case "get_profile":
      return {
        name: PORTFOLIO.name,
        title: PORTFOLIO.title,
        summary: PORTFOLIO.summary,
        contact: PORTFOLIO.contact,
        interests: PORTFOLIO.interests,
      };

    case "get_experience": {
      const company = args.company as string | undefined;
      return company
        ? PORTFOLIO.experience.filter((e) =>
            e.company.toLowerCase().includes(company.toLowerCase())
          )
        : PORTFOLIO.experience;
    }

    case "get_skills": {
      const minLevel = args.min_level as number | undefined;
      const skills = minLevel !== undefined
        ? PORTFOLIO.skills.filter((s) => s.level >= minLevel)
        : PORTFOLIO.skills;
      return [...skills].sort((a, b) => b.level - a.level);
    }

    case "get_projects": {
      const tag = args.tag as string | undefined;
      return tag
        ? PORTFOLIO.projects.filter((p) =>
            p.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase()))
          )
        : PORTFOLIO.projects;
    }

    case "get_contact":
      return PORTFOLIO.contact;

    case "search_portfolio": {
      const q = (args.query as string).toLowerCase();
      const results: Record<string, unknown> = {};
      const exp = PORTFOLIO.experience.filter(
        (e) =>
          e.role.toLowerCase().includes(q) ||
          e.company.toLowerCase().includes(q) ||
          e.highlights.some((h) => h.toLowerCase().includes(q))
      );
      if (exp.length) results.experience = exp;
      const skills = PORTFOLIO.skills.filter((s) => s.name.toLowerCase().includes(q));
      if (skills.length) results.skills = skills;
      const projects = PORTFOLIO.projects.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
      if (projects.length) results.projects = projects;
      if (PORTFOLIO.summary.toLowerCase().includes(q)) results.summary = PORTFOLIO.summary;
      return Object.keys(results).length > 0 ? results : { message: `No results found for "${args.query}"` };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// ── MCP JSON-RPC Handler ──────────────────────────────────────────────────────

function handleJsonRpc(body: Record<string, unknown>) {
  const { jsonrpc, id, method, params } = body as {
    jsonrpc: string;
    id: unknown;
    method: string;
    params?: Record<string, unknown>;
  };

  const ok = (result: unknown) => ({ jsonrpc: "2.0", id, result });
  const err = (code: number, message: string) => ({
    jsonrpc: "2.0",
    id,
    error: { code, message },
  });

  switch (method) {
    // Handshake
    case "initialize":
      return ok({
        protocolVersion: "2024-11-05",
        serverInfo: { name: "praveen-portfolio", version: "1.0.0" },
        capabilities: { tools: {} },
      });

    case "notifications/initialized":
      return null; // no response needed for notifications

    // Tool discovery
    case "tools/list":
      return ok({ tools: TOOLS });

    // Tool execution
    case "tools/call": {
      const { name, arguments: args = {} } = (params ?? {}) as {
        name: string;
        arguments?: Record<string, unknown>;
      };
      try {
        const data = executeTool(name, args);
        return ok({
          content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
        });
      } catch (e: unknown) {
        return err(-32601, (e as Error).message);
      }
    }

    default:
      return err(-32601, `Method not found: ${method}`);
  }
}

// ── Next.js API Route ─────────────────────────────────────────────────────────

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  // GET — server manifest
  if (req.method === "GET") {
    return res.status(200).json({
      name: "praveen-portfolio",
      version: "1.0.0",
      description: "MCP Server for Praveen Soni's portfolio (syscho.in)",
      endpoint: "https://www.syscho.in/api/mcp",
      tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
    });
  }

  // POST — JSON-RPC MCP messages
  if (req.method === "POST") {
    try {
      const body = req.body;

      // Batch requests (array)
      if (Array.isArray(body)) {
        const responses = body
          .map((msg) => handleJsonRpc(msg))
          .filter(Boolean);
        return res.status(200).json(responses);
      }

      // Single request
      const response = handleJsonRpc(body);
      if (response === null) return res.status(204).end();
      return res.status(200).json(response);
    } catch {
      return res.status(400).json({
        jsonrpc: "2.0",
        id: null,
        error: { code: -32700, message: "Parse error" },
      });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
