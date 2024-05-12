import getData from '@/lib/getData'
import SiteMap from '@/sections/sitemap/SiteMap'
import React from 'react'

const page = async () => {
  const getAllProductCategory = getData('/okhub/v1/category/category')
  const getAllBlogCategory = getData('/okhub/v1/category/post')

  const [allProductCategory, allBlogCategory] = await Promise.all([
    getAllProductCategory,
    getAllBlogCategory,
  ])

  return (
    <SiteMap
      allProductCategory={allProductCategory}
      allBlogCategory={allBlogCategory}
    />
  )
}

export default page
