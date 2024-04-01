'use client'
import Variation from '@/components/popupproduct/Variation'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {useEffect, useState} from 'react'

export default function SelectOptions({className = '', form}) {
  const [color, setColor] = useState('Trắng')
  const [brand, setBrand] = useState('Macbook')
  useEffect(() => {
    if (form) {
      form?.setValue('options', `Màu sắc: ${color}, Dòng máy: ${brand}`)
    }
  }, [])

  return (
    <div className={`${className} w-full h-full`}>
      <Select className='h-full'>
        <SelectTrigger className='w-full h-full bg-elevation-20 rounded-[0.43924rem]'>
          <SelectValue placeholder={`Màu sắc: ${color}, Dòng máy: ${brand}`} />
        </SelectTrigger>
        <SelectContent className='z-[999999] max-w-full xmd:p-[1rem]'>
          <Variation />
        </SelectContent>
      </Select>
    </div>
  )
}
