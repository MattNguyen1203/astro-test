import './style.css'

import {auth} from '@/auth'

import NavDown from './components/navDown'
import NavUp from './components/navUp'
import WrapNav from './components/wrapnav'
import getData from '@/lib/getData'
import {IDGLOBALAPI} from '@/lib/IdPageAPI'

export default async function Nav({isMobile}) {
  const [session, categories, categoryOptions, global] = await Promise.all([
    auth(),
    getData('/okhub/v1/category/category'),
    getData(
      `/okhub/v1/acf-categories/?page_id=${IDGLOBALAPI}&cat_slug=navbar&cat_slug=product_cat`,
    ),
    getData(`/wp/v2/pages/${IDGLOBALAPI}`),
  ])

  const linkSocial = global?.acf?.link_social
  return (
    <header
      id='container_nav'
      className='fixed top-0 left-0 h-fit bg-white/95 z-[99] border-b-[2px] border-solid border-white md:backdrop-blur-[14px] w-full xmd:h-[4.1rem] xmd:w-screen'
    >
      <WrapNav isMobile={isMobile}>
        <NavUp
          categories={categories}
          categoryOptions={categoryOptions}
          isMobile={isMobile}
          session={session}
          linkSocial={linkSocial}
        />
        {!isMobile && (
          <div
            id='nav_down'
            className='my-[0.8rem]'
          >
            <NavDown
              categoryOptions={categoryOptions}
              categories={categories}
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
