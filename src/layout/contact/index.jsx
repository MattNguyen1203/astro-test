import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <section className='container space-y-[0.88rem] items-end pr-[1.17rem] fixed flex flex-col right-[7rem] bottom-[3rem] xmd:right-0 xmd:bottom-[4rem] z-[99] pointer-events-none'>
      <Link
        href='tel:+0815850292'
        className='size-[2.92826rem] rounded-full p-[0.73206rem] bg-[#FEBE10] pointer-events-auto'
      >
        <div className='size-[1.4642rem]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              d='M8.27507 11.7172C6.3661 9.80827 5.93507 7.8993 5.83782 7.13447C5.82442 7.03014 5.8352 6.92411 5.86935 6.82461C5.90349 6.72511 5.96008 6.6348 6.03472 6.56068L7.57955 5.01654C7.6899 4.90626 7.7596 4.76182 7.77726 4.60681C7.79492 4.4518 7.7595 4.29538 7.67679 4.16309L5.21713 0.343784C5.1262 0.198219 4.98425 0.0917951 4.81903 0.0453088C4.6538 -0.00117751 4.47719 0.015615 4.32369 0.0924048L0.375066 1.95206C0.249469 2.0139 0.145806 2.1127 0.0780009 2.23518C0.0101955 2.35767 -0.0185047 2.49796 -0.00424459 2.63723C0.202652 4.60275 1.05955 9.43447 5.80782 14.1831C10.5561 18.9317 15.3871 19.7883 17.3537 19.9952C17.493 20.0094 17.6333 19.9807 17.7557 19.9129C17.8782 19.8451 17.977 19.7414 18.0389 19.6159L19.8985 15.6672C19.975 15.514 19.9918 15.3379 19.9456 15.173C19.8994 15.0081 19.7935 14.8663 19.6485 14.7752L15.8292 12.3162C15.697 12.2334 15.5406 12.1979 15.3856 12.2154C15.2306 12.2329 15.0861 12.3025 14.9758 12.4128L13.4316 13.9576C13.2813 14.109 13.0695 14.1817 12.8578 14.1545C12.093 14.0572 10.184 13.6262 8.27507 11.7172Z'
              fill='#171717'
            />
            <path
              d='M15.8564 10.6886C15.6735 10.6886 15.4981 10.616 15.3688 10.4866C15.2394 10.3573 15.1668 10.1819 15.1668 9.99899C15.1633 7.14382 12.8495 4.83002 9.99434 4.82658C9.81143 4.82658 9.63602 4.75392 9.50668 4.62458C9.37735 4.49524 9.30469 4.31983 9.30469 4.13692C9.30469 3.95401 9.37735 3.7786 9.50668 3.64926C9.63602 3.51993 9.81143 3.44727 9.99434 3.44727C13.6112 3.4514 16.5419 6.38209 16.5461 9.99899C16.5461 10.1819 16.4734 10.3573 16.3441 10.4866C16.2147 10.616 16.0393 10.6886 15.8564 10.6886Z'
              fill='#171717'
            />
            <path
              d='M19.3047 10.6897C19.1218 10.6897 18.9464 10.617 18.817 10.4877C18.6877 10.3583 18.615 10.1829 18.615 10C18.6099 5.24138 14.753 1.38448 9.99434 1.37931C9.81143 1.37931 9.63602 1.30665 9.50668 1.17732C9.37735 1.04798 9.30469 0.872563 9.30469 0.689655C9.30469 0.506747 9.37735 0.331331 9.50668 0.201995C9.63602 0.0726599 9.81143 0 9.99434 0C15.5147 0.0062069 19.9881 4.47965 19.9943 10C19.9943 10.1829 19.9217 10.3583 19.7923 10.4877C19.663 10.617 19.4876 10.6897 19.3047 10.6897Z'
              fill='#171717'
            />
          </svg>
        </div>
      </Link>
      <Link
        href={'https://www.facebook.com/astromazing.official'}
        className='size-[2.92826rem] rounded-full bg-[#0084FF] flex justify-center items-center pointer-events-auto'
      >
        <div className='size-[1.4642rem]'>
          <Image
            className='size-full'
            alt='mess'
            src={'/home/mess.svg'}
            width={20}
            height={20}
          />
        </div>
      </Link>
    </section>
  )
}
