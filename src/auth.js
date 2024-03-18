import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import {redirect} from 'next/navigation'
import postData from './lib/postData'

export const {
  handlers: {GET, POST},
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/',
  },
  callbacks: {
    async signIn({user, account, profile, email, credentials}) {
      // if (account?.provider !== 'credentials') return true
      if (user?.data?.status === 401) return false
      return true
    },
    async jwt({token, account, profile, user}) {
      // Chỉ thực hiện khi người dùng đăng nhập và có thông tin từ provider
      // Khi người dùng đăng nhập bằng Google, lưu access token vào token
      if (account?.provider === 'google') {
        // const res = await fetch(
        //   process.env.API + '/custom/v1/customer/loginCustomer',
        //   {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       token: account?.access_token,
        //       // exp: account?.expires_at,
        //       // name: profile?.name,
        //       // email: profile?.email,
        //       type: 'google',
        //     }),
        //   },
        // )
        const res = await postData(
          '/custom/v1/customer/loginCustomer',
          JSON.stringify({
            token: account?.access_token,
            type: 'google',
          }),
        )
        const data = await res.json()
        // Lấy được token từ api, gán lại token đó vào accessToken của nextAuth, để bên dưới session có thể hứng được token
        token.accessToken = data?.token
      }

      if (account?.provider === 'credentials') {
        token.accessToken = user?.token
      }

      return token
    },
    async session({token, session}) {
      session.accessToken = token?.accessToken
      return session
    },
    // async redirect({url, baseUrl}) {
    //   if (url) {
    //     return `${baseUrl}${url}`
    //   }
    //   return baseUrl
    // },
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const res = await postData(
          '/custom/v1/customer/loginCustomer',
          JSON.stringify({
            login: credentials?.email,
            password: credentials?.password,
            type: credentials?.type,
          }),
        )
        const data = await res.json()
        return data
      },
    }),
  ],
})
