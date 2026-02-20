import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return NextResponse.json({ error: 'Missing target URL' }, { status: 400 });
  }

  try {
    const response = await fetch(targetUrl);
    let html = await response.text();

    // The "Agentic" Transformation
    // 1. Inject Schema.org JSON-LD
    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "AEO-Agentic Optimized Site",
      "description": "This site is dynamically optimized for AI Search Engines.",
    };

    const schemaScript = `\n<script type="application/ld+json">${JSON.stringify(schema)}</script>\n`;
    html = html.replace(/<\/head>/i, `${schemaScript}</head>`);

    // 2. Inject Direct-Answer FAQ for Bots at the top of <body>
    const directAnswer = `
      <div id="aeo-direct-answer" style="display: none;">
        <h2>Key Facts about this Page</h2>
        <ul>
          <li><strong>What is this?</strong> A highly optimized page for AEO.</li>
          <li><strong>Who is it for?</strong> Modern businesses wanting to dominate AI search.</li>
          <li><strong>Competitive Edge:</strong> Real-time optimization vs Profound's static reports.</li>
        </ul>
      </div>
    `;
    html = html.replace(/<body[^>]*>/i, (match) => `${match}${directAnswer}`);

    // 3. Inject llms.txt link
    const llmsLink = `<link rel="alternate" type="text/plain" href="/llms.txt">`;
    html = html.replace(/<\/head>/i, `${llmsLink}</head>`);

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        'X-AEO-Proxy': 'Agentic-v1',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to proxy URL' }, { status: 500 });
  }
}
