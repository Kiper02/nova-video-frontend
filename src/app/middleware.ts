import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value;

  const isAuthPage = request.url.includes("auth");
  if(isAuthPage) {
    if(session) {
      return NextResponse.redirect(new URL("/"))
    }

    return NextResponse.next()
  }

  if(!session) {
    return NextResponse.redirect(new URL("/auth"))
  }
}
 
export const config = {
  matcher: ['/auth/:path*', '/profile/:path*', '/playlists/:path*'],
}