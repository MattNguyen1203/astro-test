import {clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
export function handleViewPort(viewport, desktop, tablet, mobile) {
  if (viewport === 'desktop') {
    return desktop
  } else if (viewport === 'tablet') {
    return tablet || desktop
  } else {
    return mobile || desktop
  }
}
