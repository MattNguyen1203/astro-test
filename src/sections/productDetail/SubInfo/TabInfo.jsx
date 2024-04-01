import React from 'react'
import AccordionInfo from '../Accordion'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import ShowMore from '@/components/showmore'

const TabInfo = ({info, isMobile}) => {
  return (
    <>
      {isMobile ? (
        <div className='px-[0.73rem] bg-white mb-[1.17rem]'>
          <AccordionInfo data={info} />
        </div>
      ) : (
        <Tabs
          defaultValue={info && info[0].key}
          className='bg-white p-[1.17rem] rounded-[0.87848rem] mb-[0.88rem] xmd:hidden'
        >
          <TabsList className='bg-transparent pb-[1.17rem] mb-[1.17rem] border-b border-[#ECECECB2] w-full justify-start h-fit'>
            {info?.map((item, index) => {
              return (
                <TabsTrigger
                  value={item.key}
                  key={item.key}
                  className='cation1 font-semibold px-[1.02rem] py-[0.59rem] rounded-[0.58565rem] bg-elevation-20 text-greyscale-20 mr-[0.59rem] !shadow-none data-[state=active]:bg-[linear-gradient(44deg,#FFF0D8_50.63%,#FFD797_106.58%)] data-[state=active]:text-greyscale-80 uppercase'
                >
                  {item.label}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {info?.map((item, index) => {
            return (
              <TabsContent
                value={item.key}
                key={item.key}
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
                  <div dangerouslySetInnerHTML={{__html: item.content}}></div>
                </ShowMore>
              </TabsContent>
            )
          })}
        </Tabs>
      )}
    </>
  )
}

export default TabInfo
