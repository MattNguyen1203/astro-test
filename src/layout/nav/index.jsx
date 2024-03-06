import NavDown from './components/navDown'
import NavUp from './components/navUp'
import WrapNav from './components/wrapnav'
import './style.css'

import {auth} from '@/auth'

export default async function Nav() {
  const session = await auth()
  return (
    <header className='fixed top-0 left-0 h-fit lg:bg-white/95 z-[999] border-b-[2px] border-solid border-white lg:backdrop-blur-[14px] w-full'>
      <WrapNav>
        <NavUp user={{...session?.user}} />
        <div
          id='nav_down'
          className='my-[0.8rem]'
        >
          <NavDown />
        </div>
      </WrapNav>
      <div
        id='overlay_search_nav'
        className='fixed top-0 left-0 z-0 w-full h-screen transition-all duration-200 opacity-0 pointer-events-none bg-black/40'
      ></div>
    </header>
  )
}
