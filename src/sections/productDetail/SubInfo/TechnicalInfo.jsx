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
      <div className='uppercase caption1 font-semibold pb-[1.17rem] border-b border-[#ECECECB2] mb-[1.17rem]'>
        Thông tin kĩ thuật
      </div>

      {techInfo?.map((item, index) => {
        return (
          <div
            className='flex mb-[0.29rem]'
            key={index}
          >
            <span className='sub2 text-greyscale-30 mr-[0.59rem] min-w-[7.54rem]'>
              {item.label}:
            </span>
            <span className='sub2 text-greyscale-50 font-semibold'>
              {item.value}
            </span>
          </div>
        )
      })}
    </>
  )
}

export default TechnicalInfo
