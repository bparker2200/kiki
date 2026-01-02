import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow /listen and static files
  if (
    pathname === '/listen' ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/process/notebooklm-podcast.mp3') ||
    pathname.startsWith('/listen/')
  ) {
    return NextResponse.next();
  }

  // Redirect everything else to /listen
  return NextResponse.redirect(new URL('/listen', request.url));
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
