export default function ICUserVoucher({className = '', stroke = ''}) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='17'
      height='16'
      viewBox='0 0 17 16'
      fill='none'
      className={className}
    >
      <path
        d='M4.89454 3.86528C4.89454 1.72988 6.62442 0.00513317 8.75469 0C10.8901 0 12.62 1.72988 12.6251 3.86528C12.6251 6.00068 10.8952 7.73055 8.75982 7.73055H8.75469C6.62442 7.73055 4.88941 6.00068 4.89454 3.86528Z'
        fill='url(#paint0_linear_5121_92125)'
      />
      <path
        d='M14.9136 12.689C14.9136 13.1716 14.7031 13.6284 14.3387 13.9415C12.7833 15.2762 10.8019 16.0051 8.7538 15.9999C6.70567 16.0051 4.72427 15.2762 3.16892 13.9415C2.79933 13.6284 2.58887 13.1716 2.58887 12.689C2.58887 10.528 4.34441 8.79297 6.50548 8.79297H11.0073C13.1683 8.79297 14.9136 10.528 14.9136 12.689Z'
        fill='url(#paint1_linear_5121_92125)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_5121_92125'
          x1='8.75998'
          y1='0.055818'
          x2='8.75998'
          y2='7.7206'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={stroke ? '#E0B181' : '#A9A9A9'} />
          <stop
            offset='1'
            stopColor={stroke ? '#BE9367' : '#A9A9A9'}
          />
        </linearGradient>
        <linearGradient
          id='paint1_linear_5121_92125'
          x1='8.7515'
          y1='8.84501'
          x2='8.7515'
          y2='15.9907'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor={stroke ? '#E0B181' : '#A9A9A9'} />
          <stop
            offset='1'
            stopColor={stroke ? '#BE9367' : '#A9A9A9'}
          />
        </linearGradient>
      </defs>
    </svg>
  )
}
