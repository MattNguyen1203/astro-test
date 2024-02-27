import StrengthPage from '../@strength/page'

export default function MainLayout({children}) {
  return (
    <>
      {children}
      <StrengthPage />
    </>
  )
}
