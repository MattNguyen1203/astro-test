import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Facebook from 'next-auth/providers/facebook'
import Credentials from 'next-auth/providers/credentials'
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
    async signIn({user}) {
      if (user?.data?.status === 401) return '/dang-nhap?status=401'
      return true
    },
    async jwt({token, account, user}) {
      // Chỉ thực hiện khi người dùng đăng nhập và có thông tin từ provider
      // Khi người dùng đăng nhập bằng Google, lưu access token vào token
      if (account?.provider === 'google') {
        const res = await postData(
          '/custom/v1/customer/loginCustomer',
          JSON.stringify({
            token: account?.access_token,
            type: 'google',
          }),
        )
        // Lấy được token từ api, gán lại token đó vào accessToken của nextAuth, để bên dưới session có thể hứng được token
        token.accessToken = res?.token
      }

      if (account?.provider === 'facebook') {
        const res = await postData(
          '/custom/v1/customer/loginCustomer',
          JSON.stringify({
            token: account?.access_token,
            type: 'facebook',
          }),
        )
        // Lấy được token từ api, gán lại token đó vào accessToken của nextAuth, để bên dưới session có thể hứng được token
        token.accessToken = res?.token
      }

      if (account?.provider === 'credentials') {
        token.accessToken = user?.token
      }

      // // refresh-token trước khi hết hạn 5 phút
      // if (Date.now() > token.exp * 1000 - (5 * 60 * 1000)) {
      //   // return refreshAccessToken(token)
      //   const res = await postData(
      //     '/custom/v1/customer/refresh-token',
      //     JSON.stringify({
      //       token: token?.accessToken,
      //     }),
      //   )
      // }

      return token
    },
    async session({token, session}) {
      session.accessToken = token?.accessToken
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
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
        if (res?.user_id) {
          return res
        } else {
          return JSON.parse(res)
        }
      },
    }),
  ],
})
