'use client'
import Link from 'next/link'

export default function ContentMegaMenu({data = []}) {
  return (
    <div>
      {data?.map((e, index) => (
        <div key={index}>
          <Link
            onClick={() => setIsOpenMegaMenuRes(false)}
            href={`/san-pham/${e?.slug}`}
            className={`${
              e?.children?.length
                ? 'caption1 tracking-[0.00439rem] text-greyscale-20'
                : 'block w-fit rounded-[0.58565rem] bg-elevation-20 py-[0.59rem] px-[0.88rem] caption1 font-semibold tracking-[0.00439rem] text-blue-800'
            } `}
          >
            {e?.name}
          </Link>
          {!!e?.children?.length && (
            <ul className='flex flex-wrap mt-[0.14rem]'>
              {e?.children?.map((item, idx) => (
                <li key={idx}>
                  <Link
                    onClick={() => setIsOpenMegaMenuRes(false)}
                    href={`/san-pham/${item?.slug}`}
                    className={`${
                      idx !== e?.children?.length - 1 ? 'mr-[0.59rem]' : ''
                    } mt-[0.59rem] block w-fit rounded-[0.58565rem] bg-elevation-20 py-[0.59rem] px-[0.88rem] caption1 font-semibold tracking-[0.00439rem] text-blue-800`}
                  >
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <hr className='my-[1.17rem] h-[0.07321rem] bg-[#E2E2E266] w-full' />
        </div>
      ))}
    </div>
  )
}
