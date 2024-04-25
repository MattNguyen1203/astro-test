'use client'

import {sendOTP} from '@/actions/sendOTP'
import {signUpForm} from '@/actions/signUpForm'
import {InputOTP, InputOTPGroup, InputOTPSlot} from '@/components/ui/input-otp'
import {convertPhone} from '@/lib/utils'
import BtnSubmit from '@/sections/auth/components/btnsubmit'
import CountdownTimer from '@/sections/otp/components/CountdownTimer'
import {PopupRegister} from '@/sections/otp/components/PopupRegister'
import {useRouter, useSearchParams} from 'next/navigation'
import {useEffect, useState, useTransition} from 'react'
import {toast} from 'sonner'

export default function OTP({isMobile}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone')
  const email = searchParams.get('email')?.replace('%40', '@')
  const type = searchParams.get('type')
  const [isPending, startTransition] = useTransition()
  const [isPendingSend, startTransitionSend] = useTransition()
  const [value, setValue] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [validate, setValidate] = useState(null)
  const [isLock, setIsLock] = useState(false)
  const [isReCount, setIsReCount] = useState(false)
  const [isTriggerFirst, setisTriggerFirst] = useState(false)

  useEffect(() => {
    validate && setValidate('')
    if (value?.length === 6 && !isTriggerFirst) {
      setisTriggerFirst(true)
    }
  }, [value])

  useEffect(() => {
    if (isTriggerFirst) {
      handleSubmitOTP()
    }
  }, [isTriggerFirst])

  const handleReSendOTP = () => {
    startTransitionSend(() => {
      // handle case send OTP register
      if (type === 'register') {
        sendOTP(
          JSON.stringify({
            phone: phone,
            email: email,
            type: 'register',
          }),
        ).then((otp) => {
          if (otp?.code === 'phone_error_limit_code') {
            setIsLock(true)
            toast.error(
              'Bạn đã vượt quá giới hạn 5 lần/ngày. Vui lòng thử lại vào ngày mai!',
              {
                duration: 5000,
                position: 'bottom-center',
              },
            )
          }
          if (otp?.code === 'phone_error_exsited') {
            setIsLock(true)
            toast.error('Số điện thoại này đã tồn tại!', {
              duration: 5000,
              position: 'bottom-center',
            })
          }
          if (otp?.code === 'email_error_exsited') {
            setIsLock(true)
            toast.error('Email này đã tồn tại!', {
              duration: 5000,
              position: 'bottom-center',
            })
          }
          if (otp?.message === 'Send OTP Success') {
            setIsReCount(!isReCount)
            isLock && setIsLock(false)
          }
        })
      }
      // handle case send OTP change password
      if (type === 'password') {
        sendOTP(
          JSON.stringify({
            phone: phone,
            type: 'change-password',
          }),
        ).then((otp) => {
          if (otp?.code === 'phone_error_limit_code') {
            setIsLock(true)
            toast.error(
              'Bạn đã vượt quá giới hạn 5 lần/ngày. Vui lòng thử lại vào ngày mai!',
              {
                duration: 5000,
                position: 'bottom-center',
              },
            )
          }
          if (otp?.code === 'phone_error_not_exsits') {
            setIsLock(true)
            toast.error('Số điện thoại này không tồn tại!', {
              duration: 5000,
              position: 'bottom-center',
            })
          }
          if (otp?.message === 'Send OTP Success') {
            setIsReCount(!isReCount)
            isLock && setIsLock(false)
          }
        })
      }
    })
  }

  const handleSubmitOTP = () => {
    if (!phone || !type)
      return setValidate('Vui lòng quay lại bước trước đó và thử lại!')
    if (value?.length !== 6) return setValidate('Vui lòng điền OTP!')
    const registerDraf = JSON.parse(localStorage.getItem('registerDraf'))
    if (
      phone !== convertPhone(registerDraf?.phone) ||
      email !== registerDraf?.email
    )
      return

    startTransition(() => {
      if (type === 'register') {
        const body = JSON.stringify({
          phone: phone,
          type: type,
          otp: value,
          email: email,
          password: registerDraf?.password,
          re_password: registerDraf?.password,
        })
        signUpForm(body)
          .then((res) => {
            if (res?.user_id) {
              // handle register success
              localStorage.setItem('firstLogin', JSON.stringify(registerDraf))
              localStorage.removeItem('registerDraf')
              setIsSuccess(true)
            } else {
              if (res?.code === 'invalid_otp_not_found') {
                return setValidate('OTP chưa chính xác!')
              }
              if (res?.code === 'phone_error_exsited') {
                return toast.warning(
                  'Tài khoản đã tồn tại. Vui lòng đăng nhập!',
                )
              }
              // handle register failed
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
      if (type === 'password') {
        return router.push(`/dat-lai-mat-khau?phone=${phone}&otp=${value}`)
      }
    })
  }

  return (
    <>
      <div className='w-full space-y-2'>
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value) => setValue(value)}
          className='w-full'
        >
          <InputOTPGroup className='w-full grid grid-cols-6 gap-x-[0.55rem]'>
            <InputOTPSlot
              className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
              index={0}
            />
            <InputOTPSlot
              className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
              index={1}
            />
            <InputOTPSlot
              className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
              index={2}
            />
            <InputOTPSlot
              className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
              index={3}
            />
            <InputOTPSlot
              className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
              index={4}
            />
            <InputOTPSlot
              className='rounded-[0.36603rem] bg-[#F8F8F8] border w-full h-[3.22108rem]'
              index={5}
            />
          </InputOTPGroup>
        </InputOTP>
        {validate && <p className='text-validate-error'>{validate}</p>}
      </div>
      <div className='w-full space-y-[0.88rem] mt-[0.88rem]'>
        <BtnSubmit
          title='XÁC NHẬN'
          onClick={handleSubmitOTP}
          className='w-full h-[3.22rem]'
          isPending={isPending}
        />
        <p className='font-normal text-center caption1 text-greyscale-40/50'>
          Thời gian hiệu lực mã OTP còn{' '}
          {isLock ? '0s' : <CountdownTimer isReCount={isReCount} />}
        </p>
        {isPendingSend ? (
          <div className='flex items-center justify-center'>
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
                stroke='#102841'
                strokeWidth='4'
              ></circle>
              <path
                fill='#102841'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          </div>
        ) : (
          <button
            onClick={handleReSendOTP}
            className='block text-[#0084FF] button font-medium text-center w-full'
          >
            Gửi lại mã xác thực cho tôi
          </button>
        )}
        {!isMobile && (
          <button className='w-full py-[0.73rem] px-[1.46rem] flex justify-center'>
            <div
              onClick={() => router.back()}
              className='flex items-center justify-center h-[1.76rem]'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='17'
                height='16'
                viewBox='0 0 17 16'
                fill='none'
                className='size-[1.1713rem]'
              >
                <path
                  d='M12.0827 7.99967H5.41602M5.41602 7.99967L8.08268 10.6663M5.41602 7.99967L8.08268 5.33301'
                  stroke='#0D1F33'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              <span className='font-semibold text-blue-800 button'>Trở về</span>
            </div>
          </button>
        )}
      </div>
      <PopupRegister
        isOpen={isSuccess}
        setIsSuccess={setIsSuccess}
      />
      {/* <Toaster richColors /> */}
    </>
  )
}
