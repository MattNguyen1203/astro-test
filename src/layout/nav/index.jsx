import './style.css'

import {auth} from '@/auth'

import NavDown from './components/navDown'
import NavUp from './components/navUp'
import WrapNav from './components/wrapnav'
import getData from '@/lib/getData'
import {IDGLOBALAPI, IDHOMEPAGE} from '@/lib/IdPageAPI'

export default async function Nav({isMobile, referer}) {
  const [session, categories, categoryOptions, global] = await Promise.all([
    auth(),
    getData('/okhub/v1/category/category'),
    getData(`/okhub/v1/acf-categories/${IDHOMEPAGE}`),
    getData(`/wp/v2/pages/${IDGLOBALAPI}`),
  ])
  console.log('🚀 ~ Nav ~ session:', session)
  const linkSocial = global?.acf?.link_social
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
          linkSocial={linkSocial}
        />
        {!isMobile && (
          <div
            id='nav_down'
            className='my-[0.8rem]'
          >
            <NavDown
              categories={categories}
              categoryOptions={categoryOptions}
            />
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
