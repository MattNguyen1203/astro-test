import Link from 'next/link'

export default function ContentMegaMenu({data}) {
  return (
    <div>
      {data.map((e, index) => (
        <div key={index}>
          <h3 className='caption1 tracking-[0.00439rem] text-greyscale-20'>
            {e.name}
          </h3>
          <ul className='flex flex-wrap mt-[0.14rem]'>
            {e.childCategories.map((item, idx) => (
              <li key={idx}>
                <Link
                  href={'/'}
                  className={`${
                    idx !== e.childCategories.length - 1 ? 'mr-[0.59rem]' : ''
                  } mt-[0.59rem] block w-fit rounded-[0.58565rem] bg-elevation-20 py-[0.59rem] px-[0.88rem] caption1 font-semibold tracking-[0.00439rem] text-blue-800`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <hr className='my-[1.17rem] h-[0.07321rem] bg-[#E2E2E266] w-full' />
        </div>
      ))}
    </div>
  )
}
