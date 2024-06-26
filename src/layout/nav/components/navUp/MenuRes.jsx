'use client'
import useStore from '@/app/(store)/store'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const SheetMegaMenu = dynamic(() => import('@/components/sheetmegamenu'), {
  ssr: false,
})

export default function MenuRes({categoryOptions, categories}) {
  const setIsOpenMegaMenuRes = useStore((state) => state.setIsOpenMegaMenuRes)
  const isOpenMegaMenuRes = useStore((state) => state.isOpenMegaMenuRes)

  return (
    <>
      <div
        onClick={() => setIsOpenMegaMenuRes(true)}
        className={`${
          isOpenMegaMenuRes ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } transition-all duration-200 size-[2.34261rem] flex justify-center items-center rounded-full bg-elevation-10`}
      >
        <Image
          className='size-[1.1713rem] object-cover'
          src={'/layout/nav/menu.svg'}
          alt='icon menu'
          width={16}
          height={16}
          priority
        />
      </div>
      <SheetMegaMenu
        categoryOptions={categoryOptions}
        categories={categories}
      />
    </>
  )
}
