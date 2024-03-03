import NavPage from '../@nav/page'
import StrengthPage from './@strength/page'

export default function MainLayout({children, nav}) {
  return (
    <>
      <NavPage />
      {children}
      <StrengthPage />
    </>
  )
}
