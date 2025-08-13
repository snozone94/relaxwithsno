import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Public assets pattern used by the middleware to bypass static files.
const PUBLIC_FILE = /\.(.*)$/;

/**
 * Middleware to enforce age gating and optional geo gating for the
 * relaxwithsno site.  This middleware runs on every request and
 * redirects unauthenticated visitors to the age‑gate page when they
 * attempt to access restricted routes.  For production you should
 * enhance this logic with geolocation and strong age verification.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Skip static files and API routes.
  if (PUBLIC_FILE.test(pathname) || pathname.startsWith('/api')) {
    return NextResponse.next();
  }
  const isAdultRoute = pathname.startsWith('/feed') || pathname.startsWith('/creator');
  const cookies = req.cookies;
  const hasPassedGate = cookies.get('age_gate_ok')?.value === '1';
  if (isAdultRoute && !hasPassedGate) {
    const url = req.nextUrl.clone();
    url.pathname = '/age-gate';
    url.searchParams.set('next', pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next).*)',
};
