export default function ICVoucher({className = '', stroke = ''}) {
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
        d='M16.4782 13.0156L16.4776 10.8044C16.4714 10.4868 16.3643 10.1795 16.1719 9.92676C15.9795 9.67404 15.7116 9.48907 15.4072 9.39861C15.1116 9.30468 14.8535 9.11914 14.6704 8.86883C14.4872 8.61852 14.3885 8.31644 14.3884 8.00628C14.3884 7.69613 14.487 7.394 14.67 7.14362C14.8531 6.89323 15.111 6.70758 15.4066 6.61353C15.7114 6.52391 15.9797 6.33936 16.1725 6.08674C16.3652 5.83411 16.4723 5.52659 16.4782 5.20889L16.4776 2.99653C16.4774 2.60903 16.3234 2.23745 16.0494 1.96344C15.7754 1.68944 15.4038 1.53541 15.0163 1.53521L2.4926 1.53462C2.30069 1.53461 2.11067 1.5724 1.93337 1.64583C1.75607 1.71927 1.59497 1.82691 1.45927 1.96261C1.32357 2.09831 1.21593 2.2594 1.1425 2.43671C1.06906 2.61401 1.03127 2.80404 1.03128 2.99594L1.03187 5.20712C1.03796 5.52473 1.14498 5.83216 1.33743 6.08491C1.52988 6.33765 1.79777 6.52259 2.10232 6.61294C2.39791 6.70686 2.65595 6.89241 2.83909 7.14271C3.02224 7.39302 3.12099 7.69511 3.12105 8.00526C3.12112 8.31541 3.0225 8.61754 2.83946 8.86793C2.65642 9.11831 2.39846 9.30396 2.10292 9.39801C1.79806 9.48763 1.52976 9.67218 1.33702 9.92481C1.14429 10.1774 1.03718 10.485 1.03128 10.8027L1.03187 13.015C1.03229 13.4024 1.18639 13.7739 1.46035 14.0479C1.73431 14.3218 2.10575 14.4759 2.49319 14.4763L15.0175 14.4763C15.2094 14.4763 15.3994 14.4386 15.5767 14.3651C15.754 14.2917 15.9151 14.184 16.0508 14.0483C16.1865 13.9126 16.2941 13.7515 16.3676 13.5742C16.441 13.3969 16.4782 13.2075 16.4782 13.0156Z'
        fill='url(#paint0_linear_5121_92137)'
      />
      <path
        d='M6.10124 10.8315C5.91996 10.6499 5.81815 10.4038 5.81815 10.1471C5.81815 9.89051 5.91996 9.64437 6.10124 9.46273L10.2077 5.35628C10.3892 5.17477 10.6354 5.07279 10.8921 5.07279C11.1488 5.07279 11.395 5.17477 11.5765 5.35628C11.758 5.5378 11.86 5.78399 11.86 6.04069C11.86 6.29739 11.758 6.54358 11.5765 6.7251L7.47005 10.8315C7.28841 11.0128 7.04227 11.1146 6.78564 11.1146C6.52902 11.1146 6.28288 11.0128 6.10124 10.8315Z'
        fill='white'
      />
      <path
        d='M6.15502 6.88209C6.56263 7.2897 7.2235 7.2897 7.63111 6.88209C8.03872 6.47449 8.03872 5.81362 7.63111 5.40601C7.2235 4.9984 6.56263 4.9984 6.15502 5.40601C5.74741 5.81362 5.74741 6.47449 6.15502 6.88209Z'
        fill='white'
      />
      <path
        d='M10.155 10.8899C10.5626 11.2975 11.2235 11.2975 11.6311 10.8899C12.0387 10.4823 12.0387 9.82143 11.6311 9.41382C11.2235 9.00621 10.5626 9.00621 10.155 9.41382C9.74742 9.82143 9.74742 10.4823 10.155 10.8899Z'
        fill='white'
      />
      <defs>
        <linearGradient
          id='paint0_linear_5121_92137'
          x1='15.3272'
          y1='1.43387'
          x2='2.10396'
          y2='14.6571'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color={stroke ? '#E0B181' : '#A9A9A9'} />
          <stop
            offset='1'
            stop-color={stroke ? '#BE9367' : '#A9A9A9'}
          />
        </linearGradient>
      </defs>
    </svg>
  )
}