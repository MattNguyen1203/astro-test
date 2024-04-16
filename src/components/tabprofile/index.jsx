import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import IndexAccount from '@/sections/account'
import ChangePassWord from '@/sections/account/components/changepassword'

export function TabsProfile({isMobile, province, district, commune}) {
  return (
    <Tabs
      defaultValue='info'
      className='w-full '
    >
      <TabsList className='grid w-full grid-cols-2 bg-white py-0 h-[3rem] px-[1.17rem]'>
        <TabsTrigger
          className='bg-elevation-20 rounded-[0.375rem] text-greyscale-20 font-svnGraphik caption font-semibold data-[state=active]:text-greyscale-80 shadow-none data-[state=active]:shadow-none h-[2.5rem]'
          value='info'
        >
          Thông tin thành viên
        </TabsTrigger>
        <TabsTrigger
          className='bg-elevation-20 rounded-[0.375rem] text-greyscale-20 font-svnGraphik caption font-semibold data-[state=active]:text-greyscale-80 shadow-none data-[state=active]:shadow-none h-[2.5rem]'
          value='password'
        >
          Đổi mật khẩu
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className='mt-[0.75rem]'
        value='info'
      >
        <IndexAccount
          isMobile={isMobile}
          province={province}
          district={district}
          commune={commune}
        />
      </TabsContent>
      <TabsContent value='password'>
        <ChangePassWord />
      </TabsContent>
    </Tabs>
  )
}
