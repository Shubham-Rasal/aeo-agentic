import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  
  // Known AI Bots
  const aiBots = [
    'ChatGPT-User',
    'GPTBot',
    'PerplexityBot',
    'ClaudeBot',
    'Google-CloudVertexBot',
    'CCBot',
    'Claude-Web',
    'YouBot',
  ];

  const isAiBot = aiBots.some((bot) => userAgent.includes(bot));

  // If it's a bot, we add a header to inform our app
  // or we could rewrite to the AEO proxy if we were proxying an external site.
  if (isAiBot) {
    const response = NextResponse.next();
    response.headers.set('x-aeo-agentic-bot', 'true');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
