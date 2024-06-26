import './globals.css'

import localFont from 'next/font/local'
import Footer from '@/layout/footer'
import {Work_Sans} from 'next/font/google'
import Contact from '@/layout/contact'
import {SessionProvider} from 'next-auth/react'
import {auth} from '@/auth'

export const metadata = {
  title: 'AstroMazing',
  description: 'AstroMazing by create dev okhub',
}

const workSans = Work_Sans({
  weight: '700',
  style: ['normal'],
  subsets: ['vietnamese'],
  display: 'swap',
  variable: '--font-work-sans',
})

const svnGraphik = localFont({
  src: [
    {
      path: './font/SVN-Graphik-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/SVN-Graphik-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/SVN-GraphikMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/SVN-Graphik-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/SVN-Graphik-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/SVN-Graphik-Super.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './font/SVN-Graphik-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-svn-graphik',
  display: 'swap',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default async function RootLayout({children}) {
  const session = await auth()
  return (
    <html lang='en'>
      <head>
        <link
          rel='canonical'
          href={process.env.DOMAIN}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${svnGraphik.className} ${svnGraphik.variable} ${workSans.variable}`}
      >
        <SessionProvider session={session}>{children}</SessionProvider>
        <Footer />
        <Contact />
      </body>
    </html>
  )
}
