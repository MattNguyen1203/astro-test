'use client'
import Variation from '@/components/popupproduct/Variation'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {useEffect, useMemo, useState} from 'react'
import {covertToText} from './function'

export default function SelectOptions({
  className = '',
  form,
  data,
  setSelectedPrd,
  selectedPrd,
}) {
  const placeholder = useMemo(() => covertToText(selectedPrd), [selectedPrd])

  return (
    <div className={`${className} w-full h-full`}>
      <Select className='h-full'>
        <SelectTrigger className='w-full h-full bg-elevation-20 rounded-[0.43924rem]'>
          <SelectValue placeholder={placeholder || 'Vui lòng chọn option'} />
        </SelectTrigger>
        <SelectContent className='z-[999999] max-w-full p-[1rem]'>
          <Variation
            data={data}
            setSelectedPrd={setSelectedPrd}
            selectedPrd={selectedPrd}
          />
        </SelectContent>
      </Select>
    </div>
  )
}
