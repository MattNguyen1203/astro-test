'use client'
import {useRef} from 'react'
import Image from 'next/image'
import {useParams, useSearchParams} from 'next/navigation'
import useSWR from 'swr'
import {fetcher} from '@/lib/utils'
import Link from 'next/link'
import PaginationPosts from '@/sections/account/components/pagination/PaginationPosts'
import MenuNewsLink from '../MenuNewsLink'
import GridNews from './GridNews'

export default function AllNews({posts, categories, before, url}) {
  const boxRef = useRef(null)
  const searchParams = useSearchParams()
  const params = useParams()
  const page = searchParams.get('page')

  const {data, error, isLoading} = useSWR(
    Number(page) > 1
      ? process.env.NEXT_PUBLIC_API +
          (params?.category
            ? `/okhub/v1/post/postsByCategory/${params?.category[0]}?page=${page}&limit=6`
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
      className='container xmd:bg-white relative flex xmd:flex-col xmd:items-center xlg:flex-col xlg:items-center lg:flex-row w-full h-fit pt-[11.51rem] xmd:pt-[1.76rem] justify-between lg:pb-[6.59rem] -mt-[8rem] xmd:mt-0'
    >
      <div className='flex flex-col lg:w-[62.4451rem] xmd:mb-[1.76rem] xlg:mb-[1.76rem] xmd:w-full'>
        <div className='h-[4.97804rem] xlg:h-[6.3rem] xmd:h-[6.3rem] bg-white rounded-[0.87848rem] flex xmd:flex-col xlg:flex-col justify-between xmd:justify-between items-center xlg:items-start xmd:items-start lg:px-[1.76rem] mb-[0.88rem] xmd:mb-[1.2rem] xlg:mb-[1.76rem]'>
          <h2 className='font-semibold text-blue-700 h5 xmd:text-[2.34261rem] font-svnGraphik xmd:leading-[1.2] whitespace-nowrap xmd:px-[0.59rem] xmd:mb-[0.88rem]'>
            Tin tức
          </h2>
          <MenuNewsLink
            searchParams={searchParams}
            categories={categories}
            isPage={true}
            categoryCurrent={
              params?.category?.length ? params?.category[0] : null
            }
          />
        </div>
        <div className='w-full bg-white lg:p-[1.46413rem] rounded-[0.87848rem] xmd:px-[0.59rem] xmd:pb-[1.76rem]'>
          <GridNews postsNew={postsNew} />
          {Number(countPage) > 1 && (
            <div className='mt-[2.34rem] flex justify-center'>
              <PaginationPosts
                pageCount={Math.ceil(posts?.count / 6)}
                pageRangeDisplayed={5}
                ref={boxRef}
                page={Number(params?.page)}
                before={before}
                url={url}
              />
            </div>
          )}
        </div>
      </div>
      <aside className='w-[22.47438rem] xmd:w-full xlg:w-full sticky top-[9.76rem] left-0 flex-shrink-0 xlg:flex xlg:flex-col xlg:items-center xmd:flex xmd:flex-col xmd:items-center h-fit'>
        <div className='flex flex-col items-start w-[22.47438rem] xlg:w-[46.28111rem] xmd:w-[26.28111rem] mb-[1.17rem] xmd:pt-[2rem] xmd:border-t-[1px] xmd:border-solid xmd:border-[#EBF0F7]'>
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
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.88rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0.51245rem] bg-gradient-to-t to-[#2C5BB7] from-[#1B2852]'>
                  <div className='flex items-center justify-center w-[1.46413rem] h-[1.46413rem]'>
                    <Image
                      className=''
                      src={'/home/lazada.svg'}
                      alt='icon lazada'
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <span className='sub2 font-medium text-[#4B6FBE]'>
                  1,000,000 Lượt bán
                </span>
              </div>
              <div className='flex items-center h-[1.9rem] border-l border-solid borders-[#B7C2CC]/50 pl-[1.17rem] sub2 text-[#4B6FBE] font-medium'>
                Follow
              </div>
            </div>
          </div>
          <div className='mb-[0.87848rem] w-full flex py-[0.58565rem] pr-[1.1713rem] pl-[1.1713rem] rounded-[0.87848rem] bg-[rgba(232,235,239,0.60)]'>
            <div className='flex items-center justify-between w-full'>
              <div className='flex items-center'>
                <div className='w-[2.63543rem] h-[2.63543rem] flex justify-center items-center mr-[0.88rem] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0.51245rem] bg-gradient-to-t to-[#EEF8FF] from-[rgba(255,245,237,0.90)]'>
                  <div className='w-[1.75695rem] h-[1.75695rem] flex justify-center items-center z-10'>
                    <Image
                      className=''
                      src={'/home/tiktok.svg'}
                      alt='icon tiktok'
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <span className='sub2 font-medium text-[#4B6FBE]'>
                  1,000,000 Follower
                </span>
              </div>
              <div className='flex items-center h-[1.9rem] border-l border-solid borders-[#B7C2CC]/50 pl-[1.17rem] py-[0.07321rem] sub2 text-[#4B6FBE] font-medium'>
                Follow
              </div>
            </div>
          </div>
        </div>
        {/* san pham moi nhat */}
        <div className='flex xmd:bg-[#FAFAFA] items-start flex-col p-[1.75695rem] xmd:w-[26.28111rem] xmd:px-[0.87848rem] xmd:py-[1.76rem] rounded-[0.87848rem] bg-white'>
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
