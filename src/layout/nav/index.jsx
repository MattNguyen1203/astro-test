import NavUp from './components/navUp'
import NavDown from './components/navDown'
import {auth} from '@/auth'

export default async function Nav() {
  const session = await auth()
  return (
    <header className='fixed top-0 left-0 h-fit lg:bg-white/95 z-[999] border-b-[2px] border-solid border-white lg:backdrop-blur-[14px] w-full'>
      <div className='container'>
        <NavUp user={{...session?.user}} />
        <div className='my-[0.8rem]'>
          <NavDown />
        </div>
      </div>
    </header>
  )
}
