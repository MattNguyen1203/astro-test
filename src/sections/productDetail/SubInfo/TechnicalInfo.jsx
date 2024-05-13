const detailPrd = [
  {
    label: 'Thương hiệu',
    val: 'ASTROMAZING',
  },
  {
    label: 'Kiểu kết nối',
    val: 'Không dây',
  },
  {
    label: 'Gửi từ',
    val: 'TP. Hồ Chí Minh',
  },
]
const TechnicalInfo = ({techInfo}) => {
  return (
    <>
      <div className='caption1 uppercase xmd:text-[1.02489rem] xmd:leading-[1.2] font-semibold xmd:font-medium pb-[1.17rem] border-b border-[#ECECECB2] mb-[1.17rem]'>
        Thông Số Kỹ Thuật
      </div>

      {techInfo?.map((item, index) => {
        return (
          <div
            className='flex mb-[0.29rem]'
            key={index}
          >
            <span className='sub2 text-greyscale-30 mr-[0.59rem] min-w-[7.54rem] w-[9.54rem] xmd:w-[7.54rem]'>
              {item.label}:
            </span>
            <span className='sub2 xmd:text-[0.87848rem] text-greyscale-50 font-medium'>
              {item.value}
            </span>
          </div>
        )
      })}
    </>
  )
}

export default TechnicalInfo
