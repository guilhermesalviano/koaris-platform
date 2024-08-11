import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const token = request.cookies.get('koaris.token')?.value

  // api.defaults.headers['Authorization'] = `Bearer ${token}`
 
  if (token && request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
 
  if (!token && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/login', '/dashboard/:path*', '/chat/:path*', '/contacts/:path*', '/estimations/:path*', '/onboarding/:path*', '/services/:path*'],
}