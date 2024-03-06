import Nav from '@/layout/nav'

export default function HomeLayout({children}) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
