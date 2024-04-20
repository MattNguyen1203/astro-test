'use client'
import {loginForm} from '@/actions/loginForm'
import {Dialog, DialogContent} from '@/components/ui/dialog'
import Image from 'next/image'
import {useTransition} from 'react'

export function PopupRegister({isOpen, setIsSuccess}) {
  const [isPending, startTransition] = useTransition()

  const handleLogin = () => {
    startTransition(() => {
      const firstLogin = JSON.parse(localStorage.getItem('firstLogin'))
      const values = {
        login: firstLogin?.phone,
        password: firstLogin?.password,
        type: 'phone',
      }
      loginForm(values)
        .then((res) => {
          localStorage.removeItem('firstLogin')
        })
        .catch((err) => console.log('err', err))
    })
  }
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsSuccess}
    >
      <DialogContent
        className='max-w-fit w-fit rounded-[0.87848rem] bg-white p-[2rem]'
        overlay='bg-black/10'
        // hiddenClose={true}
      >
        <div className='flex w-[35.35871rem] p-[1.46413rem] justify-center items-center rounded-[0.87848rem] bg-white select-none'>
          <div className='flex flex-col items-center justify-center flex-1'>
            <div className='flex flex-col items-center justify-center'>
              <Image
                className='object-contain w-[2.34261rem] h-[2.34261rem]'
                src={'/components/check-circle.svg'}
                alt='icon check'
                width={32}
                height={32}
              />
              <h3
                className={`text-[#36BA61] mt-[0.58565rem] text-[1.46413rem] leading-[1.2] font-semibold `}
              >
                Đăng ký thành công
              </h3>
            </div>
            <p className='body2 font-normal text-center text-blue-800/80 my-[1.46413rem]'>
              Bạn đã đăng kí thành công tài khoản thành viên tại Astromazing.
              Hãy ghé trang chủ để xem sản phẩm nhà Astromazing nhé!
            </p>

            <button
              onClick={handleLogin}
              className='w-[12.95754rem] h-[3.22108rem] flex items-center justify-center py-[0.73206rem] pr-[1.1713rem] pl-[1.46413rem] rounded-[0.58565rem] bg-gradient-to-l from-[#1359A1] to-[#102841] font-semibold text-center text-white button whitespace-nowrap'
            >
              {isPending ? (
                <svg
                  className='animate-spin h-[2rem] w-[2rem] text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              ) : (
                <>
                  Đăng nhập ngay
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='16'
                    viewBox='0 0 17 16'
                    fill='none'
                    className='w-[1.1713rem] h-[1.1713rem] ml-[0.59rem]'
                  >
                    <path
                      d='M3.83398 8H13.1673M13.1673 8L9.16732 4M13.1673 8L9.16732 12'
                      stroke='white'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
