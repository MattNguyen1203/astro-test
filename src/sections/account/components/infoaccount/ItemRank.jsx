import Image from 'next/image'
import Link from 'next/link'
const ranks = [
  {
    id: 0,
    title: 'Thành viên mới',
    icon: '/account/cup-start.svg',
    background: 'bg-[linear-gradient(92deg,#DDFFE5_0%,#A7FFE4_100.73%)]',
  },
  {
    id: 1,
    title: 'Thành viên bạc',
    icon: '/account/cup-sivel.svg',
    background:
      'bg-[linear-gradient(99deg,#464646_0%,#535353_50.5%,#BCBCBC_100%)]',
  },
  {
    id: 2,
    title: 'Thành viên vàng',
    icon: '/account/cup-gold.svg',
    background:
      'bg-[linear-gradient(99deg,#FFA800_0%,rgba(254,107,0,0.73)_51.5%,#FBC400_100%)]',
  },
  {
    id: 3,
    title: 'Thành viên kim cương',
    icon: '/account/cup-kc.svg',
    background:
      'bg-[linear-gradient(99deg,#058FF2_0%,#81AFFF_59%,#00E0FF_100%)]',
  },
]

export default function ItemRank({rank}) {
  const item = ranks?.find((e) => e?.id === rank)
  return (
    <Link
      href='/khach-hanh-than-thiet'
      className={`${item?.background} flex items-center px-[0.6rem] py-[0.3rem] rounded-[7.4rem] w-fit mt-[0.44rem] shadow-[4px_4px_8px_0px_rgba(83,118,209,0.10)]`}
    >
      <Image
        className='size-[0.87848rem] object-contain'
        src={item?.icon}
        alt={item?.title}
        width={12}
        height={12}
        priority
      />
      <span
        className={`${
          item?.id === 0 ? 'text-greyscale-60' : 'text-white'
        } block ml-[0.29rem] caption2 font-normal w-fit`}
      >
        {item?.title}
      </span>
    </Link>
  )
}
