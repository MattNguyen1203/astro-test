import CardProduct from '@/components/cardproduct'

export default function LikePage() {
  return (
    <section className='w-full rounded-[0.58565rem] bg-white p-[1.17rem]'>
      <span className='font-medium sub2 text-greyscale-80 inline-block mr-[0.44rem]'>
        Sản phẩm yêu thích
      </span>
      <span className='font-normal sub2 text-greyscale-20'>(3 sản phẩm)</span>
      <hr className='bg-[#ECECECB2] h-[0.07rem] w-full my-[1.17rem] block' />
      <div className='grid grid-cols-3 grid-rows-4 gap-x-[0.73rem] gap-y-[1.17rem]'>
        {new Array(12).fill(0).map((e, index) => (
          <CardProduct key={index} />
        ))}
      </div>
    </section>
  )
}
