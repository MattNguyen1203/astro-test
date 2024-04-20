'use client'
import {usePathname, useSearchParams} from 'next/navigation'

const statusAuth = [
  {
    href: '/dang-nhap',
    title: 'Đăng nhập',
  },
  {
    href: '/dang-ky',
    title: 'Đăng ký',
  },
  {
    href: '/quen-mat-khau',
    title: 'Quên mật khẩu',
  },
  {
    href: '/dat-lai-mat-khau',
    title: 'Đặt lại mật khẩu',
  },
  {
    href: '/otp',
    title: 'XÁC THỰC TÀI KHOẢN',
  },
]

export default function TitleAuth() {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const type = searchParams.get('type') === 'password'
  return (
    <span className='inline-block h6 font-medium bg-clip-text bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)] xmd:sub1 xmd:font-medium'>
      {type
        ? 'Quên mật khẩu'
        : statusAuth.find((e) => pathName.includes(e.href)).title}
    </span>
  )
}
