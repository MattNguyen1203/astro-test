'use client'

import Image from 'next/image'
import {useState} from 'react'

const Variation = () => {
  const [variationSelected, setVariationSelected] = useState([])
  const listVar = [
    {
      label: 'Màu sắc',
      slug: 'color',
      content: [
        {
          src: '/components/varImg.jpg',
          name: 'Trắng',
          slug: 'white',
        },
        {
          src: '/components/varImg.jpg',
          name: 'Hồng',
          slug: 'pink',
        },
        {
          src: '/components/varImg.jpg',
          name: 'Xanh',
          slug: 'blue',
        },
        {
          src: '/components/varImg.jpg',
          name: 'Đen',
          slug: 'black',
        },
      ],
    },
    {
      label: 'Dòng máy',
      slug: 'brand',
      content: [
        {
          src: '',
          name: 'Macbook',
          slug: 'macbook',
        },
        {
          src: '',
          name: 'Surface',
          slug: 'surface',
        },
        {
          src: '',
          name: 'Asus',
          slug: 'asus',
        },
        {
          src: '',
          name: 'LG',
          slug: 'lg',
        },
      ],
    },
  ]

  const handleSelectVariation = (parentSlug, item) => {
    const index = variationSelected.findIndex(
      (variant) => variant.parentSlug === parentSlug,
    )

    const updatedVariationSelected = [...variationSelected]

    if (index !== -1) {
      // If the variation for the parentSlug already exists, update its selectedSlug
      updatedVariationSelected[index] = {
        ...updatedVariationSelected[index],
        selectedSlug: item.slug,
      }
    } else {
      // If the variation for the parentSlug doesn't exist, add it to the array
      updatedVariationSelected.push({parentSlug, selectedSlug: item.slug})
    }

    setVariationSelected(updatedVariationSelected)
  }

  const isSelected = (parentSlug, itemSlug) => {
    const findExistChild = variationSelected.find(
      (variant) =>
        variant.parentSlug === parentSlug && variant.selectedSlug === itemSlug,
    )
    return findExistChild ? true : false
  }

  return (
    <div className=''>
      {listVar.map((variation, index) => {
        return (
          <div
            key={index}
            className='mt-[1.17rem]'
          >
            <span className='caption1 text-greyscale-30 font-medium mb-[0.59rem] flex'>
              {variation?.label}:
            </span>

            <div className='flex'>
              {variation?.content?.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`flex relative items-center mr-[0.44rem] p-[0.44rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)] rounded-[0.29283rem] cursor-pointer border-[2px] border-solid ${
                      isSelected(variation.slug, item.slug)
                        ? 'border-blue-500'
                        : 'border-transparent'
                    }`}
                    onClick={() => handleSelectVariation(variation?.slug, item)}
                  >
                    <Image
                      src={'/components/checkVar.svg'}
                      alt=''
                      width={12}
                      height={12}
                      className={`absolute top-[-0.43924rem] right-[-0.36603rem] z-10 ${
                        isSelected(variation.slug, item.slug)
                          ? 'flex'
                          : 'hidden'
                      }`}
                    />
                    {item.src && item.src.length > 0 ? (
                      <Image
                        src={item.src}
                        alt=''
                        width={28}
                        height={27}
                        className='w-[2.04978rem] h-[1.97657rem] object-contain mr-[0.29rem]'
                      />
                    ) : (
                      ''
                    )}
                    <span className='caption1 font-normal text-greyscale-40'>
                      {item.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Variation
