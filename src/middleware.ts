import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(request: NextRequest) {
  // Create an unmodified response
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // This will refresh session if expired and return the current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 1. Identify which route the user is trying to visit
  const isPortalRoute = request.nextUrl.pathname.startsWith('/portal');
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isAuthRoute = request.nextUrl.pathname.startsWith('/auth');

  // 2. SECURITY RULE: If they are NOT logged in and try to access protected areas -> Send to Login
  if (!user && (isPortalRoute || isAdminRoute)) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  // 3. UX RULE: If they ARE logged in and try to visit the login/register page -> Send to Portal
  if (user && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = '/portal';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

// 4. MATCHER: Tell Next.js exactly which routes this middleware should monitor
export const config = {
  matcher: [
    '/portal/:path*',
    '/admin/:path*',
    '/auth/:path*',
  ],
};