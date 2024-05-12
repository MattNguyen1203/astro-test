import {fetchMetaData} from '@/lib/fetchMetaData'
import {getMeta} from '@/lib/getMeta'
import ContactIndex from '@/sections/contact'

export async function generateMetadata({params}) {
  const result = await fetchMetaData(`lien-he/`)
  return getMeta(result, `lien-he/`)
}

export default function ContactPage() {
  return (
    <div className='items-center justify-center w-full'>
      <ContactIndex />
    </div>
  )
}
