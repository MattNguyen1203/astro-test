export default function ICSearchAccessory({
  className = '',
  stroke = '#262626',
}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='18'
      viewBox='0 0 17 18'
      fill='none'
      className={className}
    >
      <path
        d='M16 16.5L12.375 12.875M14.3333 8.16667C14.3333 11.8486 11.3486 14.8333 7.66667 14.8333C3.98477 14.8333 1 11.8486 1 8.16667C1 4.48477 3.98477 1.5 7.66667 1.5C11.3486 1.5 14.3333 4.48477 14.3333 8.16667Z'
        stroke={stroke}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}