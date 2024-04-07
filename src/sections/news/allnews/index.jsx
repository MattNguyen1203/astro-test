'use client'
import {Fragment, useRef} from 'react'
import ItemNews from '../ItemNews'
import Image from 'next/image'
import MenuNews from '../MenuNews'
import PaginationIndex from '@/sections/account/components/pagination'
import {useParams, useSearchParams} from 'next/navigation'
import useSWR from 'swr'
import {fetcher} from '@/lib/utils'
import Link from 'next/link'

export default function AllNews({posts, categories}) {
  console.log('🚀 ~ AllNews ~ posts:', posts)
  const boxRef = useRef(null)
  const searchParams = useSearchParams()
  const params = useParams()
  const page = searchParams.get('page')

  const {data, error, isLoading} = useSWR(
    Number(page) > 1
      ? process.env.NEXT_PUBLIC_API +
          (params?.category
            ? `/okhub/v1/post/postsByCategory/${params?.category}?page=${page}&limit=6`
            : `/okhub/v1/post/post?limit=6&page=${page}`)
      : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  const postsNew = Number(page) > 1 ? data?.item : posts?.item
  const countPage =
    Number(page) > 1
      ? Math.ceil(Number(data?.count) / 6)
      : Math.ceil(Number(posts?.count) / 6)

  return (
    <section
      ref={boxRef}
      className='container relative flex xmd:flex-col xmd:items-center xlg:flex-col xlg:items-center lg:flex-row w-full h-fit pt-[11.51rem] justify-between lg:pb-[6.59rem] -mt-[8rem]'
    >
      <div className='flex flex-col lg:w-[62.4451rem] xmd:ml-[0.6rem] xmd:mb-[1.76rem] xlg:mb-[1.76rem]'>
        <div className='h-[4.97804rem] xlg:h-[6.3rem] xmd:h-[6.3rem] bg-white rounded-[0.87848rem] flex xmd:flex-col xlg:flex-col justify-between xmd:justify-between items-center xlg:items-start xmd:items-start lg:px-[1.76rem] mb-[0.88rem] xmd:mb-[1.76rem] xlg:mb-[1.76rem]'>
          <h2 className='font-semibold text-blue-700 h5 whitespace-nowrap'>
            Tin tức
          </h2>
          <MenuNews
            categories={categories}
            isPage={true}
            categoryCurrent={params?.category}
          />
        </div>
        <div className='w-full bg-white lg:p-[1.76rem] rounded-[0.87848rem]'>
          {postsNew?.map((post, index) => (
            <Fragment key={index}>
              <ItemNews
                isOption={true}
                post={post}
              />
              {index !== posts?.item?.length - 1 && (
                <hr className='w-full my-[1.76rem] h-[0.07rem] bg-[#EBF0F7]' />
              )}
            </Fragment>
          ))}
          {Number(countPage) > 1 && (
            <div className='mt-[2.34rem] flex justify-center'>
              <PaginationIndex
                pageCount={Math.ceil(posts?.count / 6)}
                pageRangeDisplayed={5}
                page={page}
                ref={boxRef}
              />
            </div>
          )}
        </div>
      </div>
      <aside className='w-[22.47438rem] xmd:w-full xlg:w-full sticky top-[9.76rem] left-0 flex-shrink-0 xlg:flex xlg:flex-col xlg:items-center xmd:flex xmd:flex-col xmd:items-center h-fit'>
        <div className='flex flex-col items-start w-[22.47438rem] xlg:w-[46.28111rem] xmd:w-[26.28111rem] mb-[1.17rem]'>
          <div className='mb-[0.87848rem] flex w-full items-center py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[#17395C]'>
            <div className='flex items-center w-[20.57101rem]'>
              <p className='py-[0.65886rem] px-[0.43924rem] sub2 font-semibold text-white'>
                KẾT NỐI VỚI CHÚNG TÔI
              </p>
            </div>
          </div>
          <div className='mb-[0.87848rem] w-full flex py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.60)]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.88rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0.51245rem] bg-[#4B6FBE]'>
                  <Image
                    className='brightness-0 invert w-[1.75695rem] h-auto object-contain'
                    src={'/product/facebook.svg'}
                    alt='icon facebook'
                    width={24}
                    height={24}
                  />
                </div>
                <span className='sub2 font-medium text-[#4B6FBE]'>
                  1,000,000 Fan
                </span>
              </div>
              <div className='flex items-center h-[1.9rem] sub2 text-[#4B6FBE] font-medium border-l border-solid border-[#B7C2CC]/50 pl-[1.17rem]'>
                Like
              </div>
            </div>
          </div>
          <div className='mb-[0.87848rem] w-full flex py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.60)]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.43924rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]'>
                  <div className='w-full h-full rounded-[0.51245rem] absolute inset-0 bg-gradient-to-t to-[#2C5BB7] from-[#1B2852]'></div>
                  <div className='flex items-center justify-center w-[1.46413rem] h-[1.46413rem] px-[0.14641rem] pt-[0.29283rem] pb-[0.21962rem] z-10'>
                    <Image
                      className=''
                      src={'/home/lazada.svg'}
                      alt='icon lazada'
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className='flex items-center py-[0.65886rem] px-[0.43924rem]'>
                  <p className='sub2 font-medium text-[#4B6FBE]'>
                    1,000,000 Lượt bán
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-end py-[0.07321rem]'>
                <div className='w-[0.07321rem] mr-[1.1713rem] h-[1.75695rem] opacity-50 bg-[#B7C2CC]'></div>
                <p className='sub2 text-[#4B6FBE] font-medium'>Follow</p>
              </div>
            </div>
          </div>
          <div className='mb-[0.87848rem] w-full flex py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.60)]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.43924rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]'>
                  <div className='w-full h-full rounded-[0.51245rem] bg-gradient-to-t to-[#EEF8FF] from-[rgba(255,245,237,0.90)] absolute inset-0'></div>
                  <div className='w-[1.75695rem] h-[1.75695rem] flex justify-center items-center z-10'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='17'
                      height='20'
                      viewBox='0 0 17 20'
                      fill='none'
                    >
                      <g clip-path='url(#clip0_78_58504)'>
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M1.94618 17.6633C-2.11523 14.0774 0.511526 6.09365 6.75539 7.09812V7.83756C1.48216 7.58804 -0.83906 13.988 1.94618 17.6633ZM13.3353 3.81352C13.9768 4.33514 14.8616 4.71992 16.0813 4.79336V5.51775C14.7316 5.26412 13.8762 4.5817 13.3353 3.81352ZM11.6422 0C11.6413 0.267311 11.6753 0.554466 11.7184 0.81676H9.22926V13.4267C9.22926 14.0081 9.17053 14.5256 9.05352 14.9797C8.03985 17.253 5.16988 16.956 4.37679 15.396C5.55746 16.1482 7.49894 15.9484 8.29584 14.1629C8.41196 13.7097 8.47069 13.1911 8.47069 12.6099V0H11.6424H11.6422Z'
                          fill='#00F7EF'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M12.4016 0.816406V0.8326C12.4025 1.12454 12.4866 5.34633 16.8409 5.60976C16.8409 9.53733 16.843 5.60976 16.843 8.87178C16.5159 8.89163 13.9768 8.70483 12.3969 7.27088L12.392 13.6211C12.431 16.4965 10.8578 19.3165 7.9125 19.8847C7.08735 20.0437 6.34425 20.0617 5.097 19.7843C-2.08835 17.5975 0.299224 6.75428 7.51394 7.91475C7.51394 11.4153 7.51596 7.91384 7.51596 11.4153C4.53547 10.9692 3.53839 13.492 4.33059 15.2982C5.0515 16.9427 8.01898 17.2994 9.05417 14.9793C9.17141 14.5252 9.22991 14.0075 9.22991 13.4263V0.816406H12.4016Z'
                          fill='black'
                        />
                        <path
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M6.75452 7.83721C7.00043 7.84816 7.25351 7.87279 7.51242 7.91453C7.51242 11.4151 7.51444 7.91361 7.51444 11.4151C4.53396 10.969 3.53688 13.4918 4.32907 15.298C4.34364 15.3308 4.35933 15.3637 4.37592 15.3954C4.02152 15.1698 3.73638 14.8598 3.5705 14.4812C2.77943 12.6748 3.77539 10.1522 6.75587 10.5981C6.75587 7.38971 6.75497 10.0596 6.75497 7.83698L6.75452 7.83721ZM16.0806 5.51739C16.3178 5.56187 16.5709 5.59357 16.8394 5.60976C16.8394 9.53733 16.8415 5.60976 16.8415 8.87178C16.5144 8.89163 13.9753 8.70483 12.3954 7.27088L12.3905 13.6211C12.4295 16.4965 10.8563 19.3165 7.91099 19.8847C7.08584 20.0437 6.34273 20.0617 5.09549 19.7843C3.69132 19.3571 2.65434 18.5981 1.94531 17.663C2.57701 18.2213 3.36987 18.6734 4.33781 18.9685C5.58372 19.2447 6.32704 19.2269 7.15219 19.0677C10.0975 18.4993 11.6707 15.6796 11.6326 12.805L11.6366 6.45389C13.2165 7.88784 15.7556 8.07555 16.0838 8.05457C16.0838 5.02519 16.0809 8.19575 16.0809 5.51716L16.0806 5.51739ZM12.4001 0.816406V0.8326C12.4001 1.00435 12.4304 2.52861 13.3346 3.81317C12.2447 2.92593 11.8563 1.64434 11.7175 0.816406H12.4001Z'
                          fill='#FF004F'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_78_58504'>
                          <rect
                            width='16.8421'
                            height='20'
                            fill='white'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className='flex items-center py-[0.65886rem] px-[0.43924rem]'>
                  <p className='sub2 font-medium text-[#4B6FBE]'>
                    1,000,000 Follower
                  </p>
                </div>
              </div>
              <div className='flex items-center justify-end py-[0.07321rem]'>
                <div className='w-[0.07321rem] mr-[1.1713rem] h-[1.75695rem] opacity-50 bg-[#B7C2CC]'></div>
                <p className='sub2 text-[#4B6FBE] font-medium'>Follow</p>
              </div>
            </div>
          </div>
        </div>
        {/* san pham moi nhat */}
        <div className='flex items-start flex-col p-[1.75695rem] xmd:w-[26.28111rem] xmd:px-[0.87848rem] xmd:py-[1.76rem] rounded-[0.87848rem] bg-white'>
          <h2 className='sub1 font-medium text-[#102841] mb-[1.76rem]'>
            SẢN PHẨM MỚI NHẤT
          </h2>
          <ul className='flex flex-col items-center xmd:w-full'>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <li
                  key={index}
                  className='mb-[1.17rem] w-[18.96047rem] xmd:w-full flex items-center'
                >
                  <div className='mr-[0.73206rem] w-[4.61201rem] h-[4.61201rem] justify-center items-center pr-[0.01603rem] bg-white'>
                    <Image
                      className='rounded-[0.29283rem] object-cover'
                      alt='anh'
                      width={63}
                      height={63}
                      src={'/contact/ang-test.png'}
                    />
                  </div>
                  <div className='flex flex-col items-start flex-1'>
                    <h3 className='flex-1 overflow-hidden font-normal body2 text-ellipsis text-greyscale-60'>
                      Bút cảm ứng AstroMazing Pencil GD cho iPad
                    </h3>
                    <span className='body2 font-normal text-ellipsis overflow-hidden text-[#F12B2C] flex-1'>
                      499.999
                    </span>
                  </div>
                </li>
              ))}

            <Link
              href={'/san-pham'}
              className='flex h-[2.63543rem] justify-center font-semibold caption text-greyscale-80 py-[0.80527rem] px-[1.46413rem] rounded-[7.32064rem] bg-[#F2F2F2]'
            >
              XEM THÊM
            </Link>
          </ul>
        </div>
      </aside>
    </section>
  )
}
