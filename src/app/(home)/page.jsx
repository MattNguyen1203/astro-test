// import {generateMetadataInit} from '@/lib'
// import getData from '@/lib/getData'
import getData from '@/lib/getData'
import HomeIndex from '@/sections/home'

// export async function generateMetadata() {
//   const data = await getData();
//   if (data) {
//     const options = {
//       url: process.env.NEXT_PUBLIC_DOMAIN,
//       title: "test",
//       description: "test",
//       siteName: "test",
//       src: "/img.png",
//       alt: "alt",
//       keywords: ["a", "b", "c"],
//     };
//     return generateMetadataInit(options);
//   } else {
//     return generateMetadataInit();
//   }
// }

export default async function HomePage({searchParams}) {
  const products = await getData('/custom/v1/product/allProduct')
  console.log('🚀 ~ HomePage ~ products:', products)
  const {viewport} = searchParams
  return (
    <HomeIndex
      viewport={viewport}
      products={products}
    />
  )
}
