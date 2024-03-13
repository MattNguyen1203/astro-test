import Link from 'next/link'

const infos = [
  {
    title: 'Về AstroMazing',
    href: '',
  },
  {
    title: 'Liên hệ hợp tác',
    href: '',
  },
  {
    title: 'Sitemap',
    href: '',
  },
  {
    title: 'Shopee',
    href: '',
  },
  {
    title: 'Lazada',
    href: '',
  },
  {
    title: 'Tiktok',
    href: '',
  },
]

const policy = [
  {
    title: 'Tích điểm thành viên',
    href: '',
  },
  {
    title: 'Giao hàng & Thanh toán',
    href: '',
  },
  {
    title: 'Chính sách bán sỉ & CTV',
    href: '',
  },
  {
    title: 'Hướng dẫn sử dụng',
    href: '',
  },
  {
    title: 'Bảo hành & Đổi trả',
    href: '',
  },
  {
    title: 'Hợp tác KOL & KOC',
    href: '',
  },
]

export default function MenuFooter() {
  return (
    <div className='container grid grid-cols-2 gap-[0.59rem]'>
      <div>
        <h2 className='caption1 tracking-[0.00439rem] font-semibold bg-clip-text bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)]'>
          THÔNG TIN:
        </h2>
        <ul>
          {infos.map((e, index) => (
            <li
              key={index}
              className='mt-[1.17rem]'
            >
              <Link
                href={e.href}
                className='caption1 tracking-[0.00439rem] text-greyscale-10 font-normal w-full block'
              >
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='caption1 tracking-[0.00439rem] font-semibold bg-clip-text bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)]'>
          CHÍNH SÁCH:
        </h2>
        <ul>
          {policy.map((e, index) => (
            <li
              key={index}
              className='mt-[1.17rem]'
            >
              <Link
                href={e.href}
                className='caption1 tracking-[0.00439rem] text-greyscale-10 font-normal w-full block'
              >
                {e.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
