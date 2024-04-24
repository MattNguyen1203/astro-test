import {memo} from 'react'
import AccordionInfo from '../Accordion'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import ShowMore from '@/components/showmore'

const TabInfo = ({isMobile, data}) => {
  return (
    <>
      {isMobile ? (
        <div className='px-[0.73rem] bg-white mb-[1.17rem]'>
          <AccordionInfo data={data} />
        </div>
      ) : (
        <Tabs
          defaultValue='1'
          className='bg-white p-[1.17rem] rounded-[0.87848rem] mb-[0.88rem] xmd:hidden'
        >
          <TabsList className='bg-transparent pb-[1.17rem] mb-[1.17rem] border-b border-[#ECECECB2] w-full justify-start h-fit'>
            <TabsTrigger
              value={'1'}
              className='cation1 font-semibold px-[1.02rem] py-[0.59rem] rounded-[0.58565rem] bg-elevation-20 text-greyscale-20 mr-[0.59rem] !shadow-none data-[state=active]:bg-[linear-gradient(44deg,#FFF0D8_50.63%,#FFD797_106.58%)] data-[state=active]:text-greyscale-80 uppercase'
            >
              ĐẶC ĐIỂM NỔI BẬT
            </TabsTrigger>

            <TabsTrigger
              value={'2'}
              className='cation1 font-semibold px-[1.02rem] py-[0.59rem] rounded-[0.58565rem] bg-elevation-20 text-greyscale-20 mr-[0.59rem] !shadow-none data-[state=active]:bg-[linear-gradient(44deg,#FFF0D8_50.63%,#FFD797_106.58%)] data-[state=active]:text-greyscale-80 uppercase'
            >
              THÔNG TIN CHI TIẾT
            </TabsTrigger>

            <TabsTrigger
              value={'3'}
              className='cation1 font-semibold px-[1.02rem] py-[0.59rem] rounded-[0.58565rem] bg-elevation-20 text-greyscale-20 mr-[0.59rem] !shadow-none data-[state=active]:bg-[linear-gradient(44deg,#FFF0D8_50.63%,#FFD797_106.58%)] data-[state=active]:text-greyscale-80 uppercase'
            >
              CÁCH SỬ DỤNG & BẢO HÀNH
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value='1'
            className='sub2 relative w-full pb-[3.5rem]'
          >
            <ShowMore
              maxHeight={200}
              textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
              iconProp={{
                className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
                url: '/product/arrow.svg',
              }}
            >
              <div
                dangerouslySetInnerHTML={{__html: data?.important_info}}
              ></div>
            </ShowMore>
          </TabsContent>

          <TabsContent
            value='2'
            className='sub2 relative w-full pb-[3.5rem]'
          >
            <ShowMore
              maxHeight={200}
              textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
              iconProp={{
                className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
                url: '/product/arrow.svg',
              }}
            >
              <div dangerouslySetInnerHTML={{__html: data?.detail_info}}></div>
            </ShowMore>
          </TabsContent>

          <TabsContent
            value='3'
            className='sub2 relative w-full pb-[3.5rem]'
          >
            <ShowMore
              maxHeight={200}
              textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
              iconProp={{
                className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
                url: '/product/arrow.svg',
              }}
            >
              <div
                dangerouslySetInnerHTML={{__html: data?.warranty_info}}
              ></div>
            </ShowMore>
          </TabsContent>
        </Tabs>
      )}
    </>
  )
}

export default memo(TabInfo)
