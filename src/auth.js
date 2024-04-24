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
      console.log('🚀 ~ jwt ~ user:', user)
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
        token.picture = user?.picture_profile || user?.avatar
        token.email = user?.user_email
        token.name = user?.display_name
        token.userId = user?.user_id
        token.firstName = user?.first_name
        token.nickname = user?.nickname
        token.lastName = user?.last_name
        token.gender = user?.gender
        token.userRegistered = user?.user_registered
        token.memberlevel = user?.member_level
        token.memberTotalCharge = user?.member_total_charge
        token.userLogin = user?.user_login
        token.status = 'authenticated'
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
      session.accessToken = token.accessToken
      session.user.name = token.name
      session.user.email = token.email
      session.user.image = token.picture
      session.userId = token.userId
      session.firstName = token.firstName
      session.lastName = token.lastName
      session.nickname = token.nickname
      session.gender = token.gender
      session.userRegistered = token.userRegistered
      session.memberlevel = token.memberlevel
      session.memberTotalCharge = token.memberTotalCharge
      session.userLogin = token.userLogin
      session.status = token.status

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
            phone: credentials?.phone,
            password: credentials?.password,
            type: credentials?.type,
          }),
        )
        if (res?.user_id) {
          return res
          // return {
          //   ...res,
          //   user: {
          //     user_id: res?.user_id,
          //     avatar: res?.avatar,
          //     picture_profile: res?.picture_profile,
          //     display_name: res?.display_name,
          //     first_name: res?.first_name,
          //     last_name: res?.last_name,
          //     user_email: res?.user_email,
          //     user_registered: res?.user_registered,
          //     user_login: res?.user_login,
          //   },
          // }
        } else {
          return JSON.parse(res)
        }
      },
    }),
  ],
})
