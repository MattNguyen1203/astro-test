import {cn} from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'
import ShowMore from '@/components/showmore'

const AccordionInfo = ({data}) => (
  <Accordion
    className=''
    type='single'
    defaultValue={data ? data[0].key : ''}
    collapsible
  >
    {data?.map((item, index) => {
      return (
        <AccordionItem
          className='relative'
          value={item.key}
        >
          <AccordionTrigger>{item.label}</AccordionTrigger>
          <AccordionContent>
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
          </AccordionContent>
        </AccordionItem>
      )
    })}
  </Accordion>
)

export default AccordionInfo
