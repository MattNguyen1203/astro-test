import {cn} from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {useState} from 'react'
import ShowMore from '@/components/showmore'
import './style.css'

const AccordionInfo = ({data}) => {
  return (
    <Accordion
      className=''
      type='single'
      defaultValue='1'
      collapsible
    >
      <AccordionItem
        className={cn('relative')}
        value='1'
      >
        <AccordionTrigger className='caption4 font-semibold capitalize !no-underline text-greyscale-70'>
          ĐẶC ĐIỂM NỔI BẬT
        </AccordionTrigger>
        <AccordionContent>
          <ShowMore
            maxHeight={200}
            textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
            iconProp={{
              className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
              url: '/product/arrow.svg',
            }}
            wrapperClass='bg-transparent relative'
          >
            <div
              dangerouslySetInnerHTML={{__html: data?.important_info}}
              className='sub2 text-greyscale-50 leading-[1.5] text-justify text_accordion'
            ></div>
          </ShowMore>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        className={cn('relative')}
        value='2'
      >
        <AccordionTrigger className='caption4 font-semibold capitalize !no-underline text-greyscale-70'>
          THÔNG TIN CHI TIẾT
        </AccordionTrigger>
        <AccordionContent>
          <ShowMore
            maxHeight={200}
            textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
            iconProp={{
              className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
              url: '/product/arrow.svg',
            }}
            wrapperClass='bg-transparent relative'
          >
            <div
              dangerouslySetInnerHTML={{__html: data?.detail_info}}
              className='sub2 text-greyscale-50 leading-[1.5] text-justify text_accordion'
            ></div>
          </ShowMore>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        className={cn('relative border-none')}
        value='3'
      >
        <AccordionTrigger className='caption4 font-semibold capitalize !no-underline text-greyscale-70'>
          CÁCH SỬ DỤNG & BẢO HÀNH
        </AccordionTrigger>
        <AccordionContent>
          <ShowMore
            maxHeight={200}
            textClass='sub2 text-greyscale-30 font-medium mr-0.29rem'
            iconProp={{
              className: 'w-[1.1713rem] h-[1.1713rem] object-contain',
              url: '/product/arrow.svg',
            }}
            wrapperClass='bg-transparent relative'
          >
            <div
              dangerouslySetInnerHTML={{__html: data?.warranty_info}}
              className='sub2 text-greyscale-50 leading-[1.5] text-justify text_accordion'
            ></div>
          </ShowMore>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionInfo
