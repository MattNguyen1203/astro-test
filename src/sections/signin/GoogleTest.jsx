import {auth, signIn, signOut} from '@/auth'
import Image from 'next/image'

export default async function GoogleTest() {
  const session = await auth()
  return (
    <div className='flex gap-x-[1.5rem]'>
      <form
        className='size-[2.92826rem] flex justify-center items-center rounded-full bg-white shadow-[2.222px_2.222px_13.333px_0px_rgba(0,0,0,0.02),-3.333px_2.222px_22.222px_0px_rgba(0,0,0,0.04)] mr-[0.59rem]'
        action={async () => {
          'use server'
          await signIn('google')
        }}
      >
        <button
          className='size-fit'
          type='submit'
        >
          <Image
            src={'/auth/icon-gg.svg'}
            alt='icon google'
            width={20}
            height={20}
            priority
          />
        </button>
      </form>
      {session?.user?.name && (
        <form
          className='size-[2.92826rem] flex justify-center items-center rounded-full bg-white shadow-[2.222px_2.222px_13.333px_0px_rgba(0,0,0,0.02),-3.333px_2.222px_22.222px_0px_rgba(0,0,0,0.04)] mr-[0.59rem]'
          action={async () => {
            'use server'
            await signOut('google')
          }}
        >
          <button
            className='size-fit '
            type='submit'
          >
            Logout
          </button>
        </form>
      )}
    </div>
  )
}
