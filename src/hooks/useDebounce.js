'use client'
import { useEffect, useState } from 'react'

export default function useDebounce(value, duration = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, duration)
    return () => {
      clearTimeout(timer)
    }
  }, [value])
  return debouncedValue
}
