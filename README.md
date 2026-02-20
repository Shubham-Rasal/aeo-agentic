# AEO-Agentic (The Real-Time Optimization Proxy)

AEO-Agentic is a next-generation "Shadow CMS" that acts as a dynamic proxy layer for your website. It intercepts requests from AI bots (ChatGPT, Perplexity, Claude, etc.) and re-renders your site on the fly with optimized markup to maximize citation share.

## Why it's 10x better than Profound
- **Zero-Latency:** No weekly reports. Changes happen at the DNS level.
- **Agentic Implementation:** Re-renders HTML for bots without requiring you to touch your original code.
- **Self-Healing:** Continuously tests new technical markups to see which one the LLMs prefer.

## Project Structure
- `src/middleware.ts`: Detects AI bots using `user-agent` strings and sets the `x-aeo-agentic-bot` header.
- `src/app/api/aeo-proxy/route.ts`: The core proxy engine. It can fetch any URL and inject AEO markers (Schema.org, Direct Answers, `llms.txt`).
- `src/app/page.tsx`: The professional landing page showcasing the product vs legacy alternatives.
- `public/llms.txt`: The standard source structure used by modern LLM crawlers.

## How to Test
### 1. The Proxy Engine
You can test the proxy engine by visiting:
`http://localhost:3000/api/aeo-proxy?url=https://example.com`

This will fetch `example.com` and inject:
- A hidden `aeo-direct-answer` div at the top of the body.
- A `link` to `llms.txt` in the head.
- A `Product` Schema.org JSON-LD script.

### 2. The Landing Page
Visit `http://localhost:3000` to see the product showcase.

## Deployment
This project is ready for Vercel. 
1. `vercel link`
2. `vercel --prod`

## Next Steps
- **LLM-Based Rewriting:** Use OpenAI/Gemini APIs in the proxy route to rewrite specific page headings into "Direct Answers" based on trending Perplexity queries.
- **DNS Integration:** Point a real domain's CNAME to this Vercel deployment to start proxying traffic for a real site.

---
Built in a weekend. Better than Profound. 🗡️
