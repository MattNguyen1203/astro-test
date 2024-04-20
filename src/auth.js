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
        token.picture = user?.avatar
        token.email = user?.user_email
        token.name = user?.display_name
      }

      // refresh-token trước khi hết hạn 5 phút
      if (Date.now() > token.exp * 1000 - 5 * 60 * 1000) {
        const res = await postData(
          '/custom/v1/customer/refresh-token',
          JSON.stringify({
            token: token?.accessToken,
          }),
        )
        if (res?.refresh_token) {
          token.exp = res?.expire
          token.accessToken = res?.refresh_token
        } else {
          // Đánh dấu refresh token thất bại
          token.error = 'RefreshAccessTokenError'
        }
      }
      return token
    },
    async session({token, session}) {
      session.accessToken = token?.accessToken
      session.user.name = token.name
      session.user.email = token.email
      session.user.image = token.picture

      if (token.error === 'RefreshAccessTokenError') {
        throw new Error('RefreshAccessTokenError')
      }
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
            login: credentials?.login,
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
