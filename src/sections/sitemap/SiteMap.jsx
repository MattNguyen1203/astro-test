'use client'
import {cn} from '@/lib/utils'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'

const listSiteMapPage = [
  {label: 'Homepage', link: '/'},
  {label: 'Sản Phẩm', link: '/san-pham'},
  {label: 'Pre-order', link: '/pre-order'},
  {label: 'Flash Sale', link: '/flash-sale'},
  {label: 'Tin Tức', link: '/tin-tuc'},
  {label: 'Liên Hệ', link: '/lien-he'},
  {label: 'Tra cứu đơn hàng', link: '/tra-cuu-don-hang'},
  {label: 'Tìm kiếm theo phụ kiện', link: '/phu-kien'},
  {label: 'Đăng nhập', link: '/dang-nhap'},
  {label: 'Đăng ký', link: '/dang-ky'},
]

function getNamesAndCombinedSlugs(item, parentSlug, result) {
  // Tạo slug mới bằng cách kết hợp slug của cha và slug của con
  const combinedSlug = parentSlug ? `${parentSlug}/${item.slug}` : item.slug

  result((prev) => {
    return [
      ...prev,
      {
        name: item.name,
        slug: item.slug,
        order: parentSlug === '' ? 1 : parentSlug.includes('/') ? 3 : 2,
      },
    ]
  })

  // Nếu có children, duyệt qua từng children và lấy thông tin của chúng
  if (item.children && item.children.length > 0) {
    item.children.forEach((child) => {
      getNamesAndCombinedSlugs(child, combinedSlug, result)
    })
  }
}

function generateHTML(data, parentSlug) {
  return (
    <div className='columns-3 xmd:columns-2'>
      {data.map((parent) => (
        <div key={parent.id}>
          <Link
            href={`/${parentSlug}/${parent.slug}`}
            className='flex text-blue-600 hover:underline mb-[1rem] sub1 font-medium'
          >
            {parent.name}
          </Link>
          <ul>
            {parent.children.map((child) => (
              <>
                <li
                  key={child.id}
                  className='flex'
                >
                  <Link
                    href={`/${parentSlug}/${child.slug}`}
                    className='flex sub2 ml-[1.5rem] text-blue-600 hover:underline mb-[1rem]'
                  >
                    {child.name}
                  </Link>
                </li>

                {child?.children &&
                  child?.children?.length > 0 &&
                  generateItemHTML(child?.children, parentSlug)}
              </>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function generateItemHTML(data, parentSlug) {
  return data?.map((item) => {
    return (
      <li
        key={item.id}
        className='flex'
      >
        <Link
          href={`/${parentSlug}/${item.slug}`}
          className='flex text-[0.875rem] ml-[2.5rem] text-blue-600 hover:underline mb-[1rem]'
        >
          {item.name}
        </Link>
      </li>
    )
  })
}

const SiteMap = ({allProductCategory, allBlogCategory}) => {
  return (
    <div className='container mt-[10.76rem] xmd:mt-[5.76rem]'>
      <h1 className='h4 font-semibold pb-[0.5rem] border-b-[1px] border-[rgba(0,0,0,0.1)] text-blue-600 mb-[5rem]'>
        Astromazing Site Map
      </h1>

      <section className='pb-[2rem] xmd:px-[1rem] border-b-[1px] border-[rgba(0,0,0,0.1)] mb-[4rem]'>
        <h2 className='h6 font-semibold text-blue-600 mb-[2rem] uppercase'>
          Trang
        </h2>
        <div className='grid grid-cols-3 xmd:grid-cols-2 gap-[1rem]'>
          {listSiteMapPage?.map((item) => (
            <Link
              href={`${item.link}`}
              className='sub1 text-blue-600 hover:underline'
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className='pb-[2rem] xmd:px-[1rem] border-b-[1px] border-[rgba(0,0,0,0.1)] mb-[4rem]'>
        <h2 className='h6 font-semibold text-blue-600 mb-[2rem] uppercase'>
          Sản Phẩm
        </h2>
        {generateHTML(allProductCategory, 'san-pham')}
      </section>

      <section className='pb-[2rem] xmd:px-[1rem] border-b-[1px] border-[rgba(0,0,0,0.1)] mb-[4rem]'>
        <h2 className='h6 font-semibold text-blue-600 mb-[2rem] uppercase'>
          Tin tức
        </h2>
        {generateHTML(allBlogCategory, 'danh-muc')}
      </section>
    </div>
  )
}

export default SiteMap
