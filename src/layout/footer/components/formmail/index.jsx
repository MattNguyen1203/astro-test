import FormFooter from './FormFooter'

export default function FormEmail() {
  return (
    <div className='flex md:items-center xmd:container xmd:flex-col'>
      <span className='font-medium text-white sub2 xmd:caption1 xmd:font-semibold xmd:bg-[linear-gradient(44deg,#FFF0D8_52.89%,#FFD797_107.96%)] xmd:bg-clip-text xmd:w-[21.08346rem]'>
        Đăng ký để nhận những chương trình khuyến mại hot nhất của AstroMazing
      </span>
      <div className='bg-white w-[18.9582rem] h-[2.63543rem] rounded-[1.46413rem] md:ml-[1.17rem] xmd:rounded-[0.58565rem] xmd:h-[3.22108rem] xmd:w-full xmd:mt-[0.88rem]'>
        <FormFooter />
      </div>
    </div>
  )
}
