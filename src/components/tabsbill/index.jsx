'use client'
import {useEffect} from 'react'
import {useRouter} from 'next/navigation'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import ICAllBill from '../icon/ICAllBill'
import ICDoneBill from '../icon/ICDoneBill'
import ICFailedBill from '../icon/ICFailedBill'
import {useState} from 'react'
import AllBill from '@/sections/bill/AllBill'
import DoneBill from '@/sections/bill/DoneBill'
import FailedBill from '@/sections/bill/FailedBill'
import ProcessingBill from '@/sections/bill/ProcessingBill'
import {useSearchParams} from 'next/navigation'
import ICCarProcessing from '../icon/ICCarProcessing'
export function TabsBill({isMobile, session}) {
  const [status, setStatus] = useState('all')

  const router = useRouter()
  const [count, setCount] = useState('')
  const statusS = useSearchParams().get('status') || 'all'

  useEffect(() => {
    setStatus(statusS)
  }, [])
  return (
    <Tabs
      defaultValue={statusS || 'all'}
      className='w-full'
    >
      <TabsList className='w-full h-[3rem] flex relative bg-white py-[0.19rem] pl-[0.31rem] pr-[1.25rem] rounded-[0.625rem] justify-start xmd:overflow-x-auto hidden-scrollbar'>
        <TabsTrigger
          className='shadow-none data-[state=active]:shadow-none bg-elevation-20 w-fit h-full relative pl-[1.75rem] pr-[0.75rem] flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik'
          value='all'
          onClick={() => setStatus('all')}
        >
          Tất cả đơn hàng
          <div className='absolute top-1/2 -translate-y-1/2 left-[0.5rem] size-[1rem] flex items-center justify-center'>
            <ICAllBill
              className='size-[0.66669rem] flex-shrink-0'
              stroke={status === 'all' ? '#125498' : ''}
            />
          </div>
        </TabsTrigger>
        <TabsTrigger
          className='shadow-none data-[state=active]:shadow-none bg-elevation-20 w-fit h-full relative pl-[1.75rem] pr-[0.75rem] flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik'
          value='pending'
          onClick={() => {
            router.push('?status=pending')
            setStatus('pending')
          }}
        >
          Chưa thanh toán
          <div className='absolute top-1/2 -translate-y-1/2 left-[0.5rem] size-[1rem] flex items-center justify-center'>
            <ICFailedBill
              className='size-[0.66669rem] flex-shrink-0'
              stroke={status === 'pending' ? '#FEC400' : ''}
            />
          </div>
        </TabsTrigger>

        <TabsTrigger
          className='shadow-none data-[state=active]:shadow-none bg-elevation-20 w-fit h-full relative pl-[1.75rem] pr-[0.75rem] flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik mr-2'
          value='processing'
          onClick={() => {
            router.push('?status=processing')
            setStatus('processing')
          }}
        >
          Đang xử lý
          <div className='absolute top-1/2 -translate-y-1/2 left-[0.5rem] size-[1rem] flex items-center justify-center'>
            <ICCarProcessing
              className='size-[0.9rem] flex-shrink-0'
              stroke={status === 'processing' ? '#FEC400' : ''}
            />
          </div>
        </TabsTrigger>
        <TabsTrigger
          className='shadow-none data-[state=active]:shadow-none bg-elevation-20 w-fit h-full relative pl-[1.75rem] pr-[0.75rem] flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik mx-[0.5rem]'
          value='completed'
          onClick={() => {
            router.push('?status=completed')
            setStatus('completed')
          }}
        >
          Hoàn thành
          <div className='absolute top-1/2 -translate-y-1/2 left-[0.5rem] size-[1rem] flex items-center justify-center'>
            <ICDoneBill
              className='w-[0.8rem] h-auto flex-shrink-0'
              stroke={status === 'completed' ? '#00983D' : ''}
            />
          </div>
        </TabsTrigger>
        {!isMobile && (
          <div className='absolute top-1/2 right-[1.25rem] -translate-y-1/2 text-greyscale-40 sub2 font-medium font-svnGraphik'>
            {count === '' ? 'Tổng' : count} đơn hàng
          </div>
        )}
      </TabsList>
      <TabsContent value='all'>
        <AllBill
          session={session}
          setCount={setCount}
        />
      </TabsContent>
      <TabsContent value='pending'>
        <FailedBill
          session={session}
          setCount={setCount}
        />
      </TabsContent>
      <TabsContent value='processing'>
        <ProcessingBill
          session={session}
          setCount={setCount}
        />
      </TabsContent>
      <TabsContent value='completed'>
        <DoneBill
          session={session}
          setCount={setCount}
        />
      </TabsContent>
    </Tabs>
  )
}
