'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import ICAllBill from '../icon/ICAllBill'
import ICDoneBill from '../icon/ICDoneBill'
import ICFailedBill from '../icon/ICFailedBill'
import {useState} from 'react'
import AllBill from '@/sections/bill/AllBill'
import DoneBill from '@/sections/bill/DoneBill'
import FailedBill from '@/sections/bill/FailedBill'

export function TabsBill({isMobile,dataOrder}) {
  const [status, setStatus] = useState('all')
  const [dataAllOrder,setAllDataOrder] =useState(dataOrder?.data)
  const completedOrders = dataOrder?.data?.filter(order => order.order_status === 'completed');
  const processingOrders = dataOrder?.data?.filter(order => order.order_status === 'processing'|| order.order_status === 'pending');


  return (
    <Tabs
      defaultValue={'all'}
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
          className='shadow-none data-[state=active]:shadow-none bg-elevation-20 w-fit h-full relative pl-[1.75rem] pr-[0.75rem] flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik mx-[0.5rem]'
          value='done'
          onClick={() => setStatus('done')}
        >
          Đã thanh toán
          <div className='absolute top-1/2 -translate-y-1/2 left-[0.5rem] size-[1rem] flex items-center justify-center'>
            <ICDoneBill
              className='w-[0.8rem] h-auto flex-shrink-0'
              stroke={status === 'done' ? '#00983D' : ''}
            />
          </div>
        </TabsTrigger>
        <TabsTrigger
          className='shadow-none data-[state=active]:shadow-none bg-elevation-20 w-fit h-full relative pl-[1.75rem] pr-[0.75rem] flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik'
          value='failed'
          onClick={() => setStatus('failed')}
        >
          Chưa thanh toán
          <div className='absolute top-1/2 -translate-y-1/2 left-[0.5rem] size-[1rem] flex items-center justify-center'>
            <ICFailedBill
              className='size-[0.66669rem] flex-shrink-0'
              stroke={status === 'failed' ? '#FEC400' : ''}
            />
          </div>
        </TabsTrigger>
        {!isMobile && (
          <div className='absolute top-1/2 right-[1.25rem] -translate-y-1/2 text-greyscale-40 sub2 font-medium font-svnGraphik'>
            4 đơn hàng
          </div>
        )}
      </TabsList>
      <TabsContent value='all'>
        <AllBill  data={dataAllOrder} />
      </TabsContent>
      <TabsContent value='done'>
        <DoneBill data={completedOrders}/>
      </TabsContent>
      <TabsContent value='failed' >
        <FailedBill data={processingOrders} />
      </TabsContent>
    </Tabs>
  )
}
