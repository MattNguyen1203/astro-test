import {cn} from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {useState} from 'react'
import ShowMore from '@/components/showmore'

const AccordionInfo = ({data}) => {
  return (
    <Accordion
      className=''
      type='single'
      defaultValue={data ? data[0].key : ''}
      collapsible
    >
      {data?.map((item, index) => {
        return (
          <AccordionItem
            className={cn(
              'relative',
              index === data?.length - 1 ? 'border-none' : '',
            )}
            value={item.key}
          >
            <AccordionTrigger className='caption4 font-semibold capitalize !no-underline text-greyscale-70'>
              {item.label}
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
                  dangerouslySetInnerHTML={{__html: item.content}}
                  className='sub2 text-greyscale-50 leading-[1.5] text-justify'
                ></div>
              </ShowMore>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionInfo
