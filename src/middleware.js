import {NextResponse, userAgent} from 'next/server'

export function middleware(request) {
  const url = request.nextUrl
  if (url.pathname.includes('undefined')) {
    return NextResponse.redirect(new URL('/404', request.url))
  }
  const {device, isBot, engine, browser} = userAgent(request)
  console.log('🚀 ~ middleware ~ browser:', browser)
  console.log('🚀 ~ middleware ~ engine:', engine)
  console.log('🚀 ~ middleware ~ isBot:', isBot)
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
