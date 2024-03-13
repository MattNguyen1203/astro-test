import CardStrength from '@/components/cardstrength'

export const listCardStrength = [
  {
    src: '/home/htmp.svg',
    title: 'HOÀN TRẢ MIỄN PHÍ',
    description: {
      __html: 'Trả hàng miễn phí <br>trong 7 ngày',
    },
  },
  {
    src: '/home/htmp.svg',
    title: 'HOÀN TRẢ MIỄN PHÍ',
    description: {
      __html: 'Trả hàng miễn phí <br>trong 7 ngày',
    },
  },
  {
    src: '/home/htmp.svg',
    title: 'HOÀN TRẢ MIỄN PHÍ',
    description: {
      __html: 'Trả hàng miễn phí <br>trong 7 ngày',
    },
  },
  {
    src: '/home/htmp.svg',
    title: 'HOÀN TRẢ MIỄN PHÍ',
    description: {
      __html: 'Trả hàng miễn phí <br>trong 7 ngày',
    },
  },
]
export default function ListStrength() {
  return (
    <section className='py-[2.71rem] xmd:py-[3.22rem] bg-white'>
      <div className='container flex justify-between xmd:grid xmd:grid-cols-2 xmd:gap-[0.59rem]'>
        {listCardStrength.map((e, index) => (
          <CardStrength
            item={e}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
