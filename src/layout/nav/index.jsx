import NavUp from './components/navUp'
import NavDown from './components/navDown'

export default function Nav() {
  return (
    <header className='fixed top-0 left-0 h-fit lg:bg-white/95 z-[999] border-b-[2px] border-solid border-white lg:backdrop-blur-[14px] w-full'>
      <div className='container'>
        <NavUp />
        <div className='my-[0.8rem]'>
          <NavDown />
        </div>
      </div>
    </header>
  )
}
