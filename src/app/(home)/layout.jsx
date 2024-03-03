import NavPage from '../@nav/page'

export default function HomeLayout({children}) {
  return (
    <>
      <NavPage />
      {children}
    </>
  )
}
