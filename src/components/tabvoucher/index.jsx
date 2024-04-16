'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {useState} from 'react'
import ICUserVoucher from '../icon/ICUserVoucher'
import ICVoucher from '../icon/ICVoucher'
import CardVoucher from '../cardvoucher'

export function TabsVoucher() {
  const [status, setStatus] = useState('tv')
  return (
    <Tabs
      defaultValue={'tv'}
      className='w-full'
    >
      <TabsList className='w-full h-[2.92rem] grid grid-cols-2 gap-x-[0.59rem] relative bg-transparent p-0 mb-[1.46rem]'>
        <TabsTrigger
          className='shadow-none bg-elevation-20 size-full relative flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik rounded-[0.43924rem] data-[state=active]:shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),_11px_6px_24px_0px_rgba(0,0,0,0.04)] pl-[2.84rem]'
          value='tv'
          onClick={() => setStatus('tv')}
        >
          Voucher thành viên
          <div className='absolute top-1/2 -translate-y-1/2 left-[1.37rem] flex items-center justify-center'>
            <ICUserVoucher
              className='size-[1.1713rem] flex-shrink-0'
              stroke={status === 'tv'}
            />
          </div>
        </TabsTrigger>
        <TabsTrigger
          className='shadow-none bg-elevation-20 size-full relative flex items-center text-greyscale-20 font-semibold caption data-[state=active]:text-greyscale-80 font-svnGraphik rounded-[0.43924rem] data-[state=active]:shadow-[0px_2px_20px_0px_rgba(0,0,0,0.04),_11px_6px_24px_0px_rgba(0,0,0,0.04)] pl-[2.84rem]'
          value='cat'
          onClick={() => setStatus('cat')}
        >
          Voucher ngành hàng
          <div className='absolute top-1/2 -translate-y-1/2 left-[1.37rem] flex items-center justify-center'>
            <ICVoucher
              className='size-[1.1713rem] flex-shrink-0'
              stroke={status === 'cat'}
            />
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value='tv'>
        <div className='space-y-[0.59rem]'>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <CardVoucher
                className='xmd:!w-full'
                key={index}
              />
            ))}
        </div>
      </TabsContent>
      <TabsContent value='cat'>
        <div className='space-y-[0.59rem]'>
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <CardVoucher
                className='xmd:!w-full'
                key={index}
              />
            ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
