import Image from 'next/image'

const Variation = () => {
  const listVar = [
    {
      label: 'Màu sắc',
      content: [
        {
          src: '/components/varImg.jpg',
          name: 'Trắng',
        },
        {
          src: '/components/varImg.jpg',
          name: 'Hồng',
        },
        {
          src: '/components/varImg.jpg',
          name: 'Xanh',
        },
        {
          src: '/components/varImg.jpg',
          name: 'Đen',
        },
      ],
    },
    {
      label: 'Dòng máy',
      content: [
        {
          src: '',
          name: 'Macbook',
        },
        {
          src: '',
          name: 'Surface',
        },
        {
          src: '',
          name: 'Asus',
        },
        {
          src: '',
          name: 'LG',
        },
      ],
    },
  ]
  return (
    <div className=''>
      {listVar.map((variation, index) => {
        return (
          <div
            key={index}
            className='mt-[1.17rem]'
          >
            <span className='caption1 text-greyscale-30 font-medium mb-[0.59rem] flex'>
              {variation?.label}:
            </span>

            <div className='flex'>
              {variation?.content?.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className='flex relative items-center mr-[0.44rem] p-[0.44rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)] rounded-[0.29283rem] cursor-pointer border-[2px] border-solid border-transparent'
                  >
                    <Image
                      src={'/components/checkVar.svg'}
                      alt=''
                      width={12}
                      height={12}
                      className='absolute top-[-0.43924rem] right-[-0.36603rem] hidden'
                    />
                    {item.src && item.src.length > 0 ? (
                      <Image
                        src={item.src}
                        alt=''
                        width={28}
                        height={27}
                        className='w-[2.04978rem] h-[1.97657rem] object-contain mr-[0.29rem]'
                      />
                    ) : (
                      ''
                    )}
                    <span className='caption1 font-normal text-greyscale-40'>
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Variation
