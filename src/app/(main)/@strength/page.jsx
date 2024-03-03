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
export default function StrengthPage() {
  return (
    <section className='py-[2.71rem] bg-white'>
      <div className='container flex justify-between'>
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
