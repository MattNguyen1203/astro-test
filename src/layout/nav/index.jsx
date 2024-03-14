import './style.css'

import {auth} from '@/auth'

import NavDown from './components/navDown'
import NavUp from './components/navUp'
import WrapNav from './components/wrapnav'

export default async function Nav({isMobile}) {
  const session = await auth()
  console.log('🚀 ~ Nav ~ session:', session)
  return (
    <header
      id='container_nav'
      className='fixed top-0 left-0 h-fit md:bg-white/95 xmd:bg-white z-[999] border-b-[2px] border-solid border-white md:backdrop-blur-[14px] w-full xmd:h-[4.1rem] xmd:w-screen'
    >
      <WrapNav>
        <NavUp
          user={{...session?.user}}
          isMobile={isMobile}
        />
        {!isMobile && (
          <div
            id='nav_down'
            className='my-[0.8rem]'
          >
            <NavDown />
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
