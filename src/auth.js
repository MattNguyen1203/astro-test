import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/dang-nhap',
  },
  callbacks: {
    // authorized({request}) {
    //   const {pathname} = request.nextUrl
    //   if (pathname === '/middleware-example') return !!auth
    //   return true
    // },
    // jwt({token, trigger, session}) {
    //   if (trigger === 'update') token.name = session.user.name
    //   return token
    // },
    async signIn({user, account, profile, email, credentials}) {
      console.log('🚀 ~ signIn ~ user:', user)
      console.log('🚀 ~ signIn ~ account:', account)
      console.log('🚀 ~ signIn ~ profile:', profile)
      console.log('🚀 ~ signIn ~ email:', email)
      console.log('🚀 ~ signIn ~ credentials:', credentials)
      if (user?.id || user?.name) {
        return true
      } else {
        return false
      }
    },
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
