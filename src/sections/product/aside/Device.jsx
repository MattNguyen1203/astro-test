import ItemSpecialDevice from './ItemSpecialDevice'

export default function Device({onMobile = false, devices}) {
  const dataDevices = devices?.filter(
    (item) => item?.slug !== 'san-pham-noi-bat-pre-order',
  )

  return (
    <div className='mt-[0.14rem] space-y-[0.59rem]'>
      {dataDevices?.map((item, index) => (
        <ItemSpecialDevice
          key={index}
          item={item}
          onMobile={onMobile}
        />
      ))}
    </div>
  )
}
