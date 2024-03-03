import {NextResponse, userAgent} from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  if (url.pathname.includes('undefined')) {
    return NextResponse.redirect(new URL('/404', request.url))
  }
  const {device} = userAgent(request)
  const viewport =
    device.type === 'mobile'
      ? 'mobile'
      : device.type === 'tablet'
      ? 'tablet'
      : 'desktop'
  url.searchParams.set('viewport', viewport)
  url.searchParams.set('pathname', url.pathname)
  return NextResponse.rewrite(url)
}
