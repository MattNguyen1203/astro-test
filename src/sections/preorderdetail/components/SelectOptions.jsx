'use client'
import Variation from '@/components/popupproduct/Variation'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {useEffect, useMemo, useState} from 'react'

export default function SelectOptions({
  className = '',
  form,
  data,
  setSelectedPrd,
  selectedPrd,
}) {
  // console.log('selectedPrd', selectedPrd)

  const placeholder = useMemo(() => {
    const listAttr = selectedPrd.attributes

    let text = ''

    const result = listAttr.map((item) => {
      return {
        ...item,
        value: selectedPrd?.selectedVariations?.attributes?.find(
          (attr) => attr.taxonomy === item.key,
        )?.label,
      }
    })

    if (result) {
      result.forEach((item, index) => {
        text += `${item.label}: ${item.value || ''}${
          index !== result.length - 1 ? ', ' : ''
        }`
      })
    }

    return text
  }, [selectedPrd])

  return (
    <div className={`${className} w-full h-full`}>
      <Select className='h-full'>
        <SelectTrigger className='w-full h-full bg-elevation-20 rounded-[0.43924rem]'>
          <SelectValue placeholder={placeholder || ''} />
        </SelectTrigger>
        <SelectContent className='z-[999999] max-w-full p-[1rem]'>
          <Variation
            data={data}
            setSelectedPrd={setSelectedPrd}
          />
        </SelectContent>
      </Select>
    </div>
  )
}
