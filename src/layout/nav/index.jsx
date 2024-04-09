import './style.css'

import {auth} from '@/auth'

import NavDown from './components/navDown'
import NavUp from './components/navUp'
import WrapNav from './components/wrapnav'
import getData from '@/lib/getData'
import {Skeleton} from '@/components/ui/skeleton'

export default async function Nav({isMobile, referer}) {
  const session = await auth()
  const categories = await getData('/okhub/v1/category/allCategories')
  return (
    <header
      id='container_nav'
      className='fixed top-0 left-0 h-fit bg-white/95 z-[999] border-b-[2px] border-solid border-white md:backdrop-blur-[14px] w-full xmd:h-[4.1rem] xmd:w-screen'
    >
      <WrapNav isMobile={isMobile}>
        <NavUp
          categories={categories}
          isMobile={isMobile}
          referer={referer}
          session={session}
        />
        {!isMobile && (
          <div
            id='nav_down'
            className='my-[0.8rem]'
          >
            <NavDown categories={categories} />
          </div>
        )}
      </WrapNav>
      <div
        id='overlay_search_nav'
        className='fixed top-0 left-0 z-0 w-full h-screen transition-all duration-200 opacity-0 pointer-events-none bg-black/40'
      ></div>
    </header>
  )
}

const NavLoading = () => {
  return (
    <header className='fixed top-0 left-0 h-[7.76rem] z-[999] w-full xmd:h-[4.1rem]'>
      <Skeleton className='size-full' />
    </header>
  )
}

NavLoading.displayName = 'NavLoading'
export {NavLoading}
