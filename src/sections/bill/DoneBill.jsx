'use client'
import {useState, useEffect} from 'react'
import CardBill from '@/components/cardbill'
import useSWR from 'swr'
import PaginationOrder from '../account/components/pagination/PaginationOrder'
import SkeletonCardOder from '@/components/cardbill/SkeletonCardOder'
import {useRouter, useSearchParams} from 'next/navigation'

export default function DoneBill({session, setCount}) {
  const [currentPage, setCurrentPage] = useState(1)
  const page = useSearchParams().get('page')
  const router = useRouter()
  const status = useSearchParams().get('status')
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }).then((r) => r.json())

  const {data, error, isLoading} = useSWR(
    `${process.env.NEXT_PUBLIC_API}/okhub/v1/order?status=${status}&page=${
      page || currentPage
    }&limit=10`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )
  useEffect(() => {
    if (data?.count) {
      setCount(data.count)
    }
  }, [data])
  const handlePageChange = (page) => {
    setCurrentPage(page)
    router.push(`?status=${status}&?page=${page}`)
  }
  return (
    <section>
      {isLoading ? (
        new Array(5).fill(0).map((e, index) => <SkeletonCardOder key={index} />)
      ) : (
        <div className='grid grid-cols-1 gap-y-[0.73rem]'>
          {data?.data?.length > 0
            ? data.data.map((e, index) => (
                <CardBill
                  key={index}
                  data={e}
                  status={status}
                />
              ))
            : 'Không có đơn hàng nào'}
        </div>
      )}
      {!isLoading && !error && (
        <PaginationOrder
          pageRangeDisplayed={5}
          pageCount={Math.ceil(data?.count / 5)}
          handleRouter={handlePageChange}
          currentPage={page || currentPage}
        />
      )}
    </section>
  )
}
