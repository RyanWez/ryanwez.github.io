import { type NextRequest, NextResponse } from 'next/server';
import { getIronSession } from '@/lib/session';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession(req.cookies);

  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin/dashboard')) {
    if (!session.isLoggedIn) {
      return NextResponse.redirect(new URL('/admin', req.url));
    }
  }

  if (pathname === '/admin') {
    if (session.isLoggedIn) {
      return NextResponse.redirect(new URL('/admin/dashboard', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/admin/:path*'],
};
