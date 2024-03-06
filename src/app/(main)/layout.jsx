import Nav from '@/layout/nav'
import ListStrength from '@/components/liststrength'

export default function MainLayout({children}) {
  return (
    <>
      <Nav />
      {children}
      <ListStrength />
    </>
  )
}
