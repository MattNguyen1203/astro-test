'use client'

import * as React from 'react'

export default function useToggle(init = false) {
  const [value, setValue] = React.useState(init)
  return [value, setValue]
}
