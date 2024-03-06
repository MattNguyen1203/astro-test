'use client'
import {usePathname} from 'next/navigation'

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
]

export default function TitleAuth() {
  const pathName = usePathname()
  return (
    <span className='inline-block h6 font-medium bg-clip-text bg-[linear-gradient(180deg,#E0B181_0.72%,#BE9367_99.87%)]'>
      {statusAuth.find((e) => pathName.includes(e.href)).title}
    </span>
  )
}
