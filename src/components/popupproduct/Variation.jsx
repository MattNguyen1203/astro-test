'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useEffect, useMemo, useState} from 'react'
import {getLastKey, getListValueOutOfStock} from './function'

const Variation = ({data = {}, setSelectedPrd}) => {
  const [variationSelected, setVariationSelected] = useState([])
  const [listAttribute, setListAttribute] = useState([])
  const [listOutOfStock, setListOutOfStock] = useState({
    key: '',
    value: [],
  })

  // handle attribute
  useEffect(() => {
    if (!data) return
    // get init list attribute
    const listAttr = Object.values(data?.list_attributes)
    const listVariations = Object.values(data?.variations)

    // check attributes that appear in variations
    const finalRes = listAttr.map((attr) => {
      const parentKey = attr?.key
      const listVal = attr.value.map((item) => {
        const isExist = listVariations?.some(
          (variant) => variant?.attributes?.[parentKey].key === item.slug,
        )
        if (isExist) return item
      })

      return {
        ...attr,
        value: listVal,
      }
    })
    setListAttribute(finalRes)

    //set default

    listVariations?.forEach((item) => {
      if (item?.default) {
        const ListParentKey = Object.keys(item?.attributes)
        const ListValue = Object.values(item?.attributes)

        const listVariant = ListParentKey.map((key, index) => {
          return {
            parentkey: key,
            selectedkey: ListValue?.[index]?.key,
            selectedName: ListValue?.[index]?.label,
          }
        })

        setVariationSelected(listVariant)
      }
    })
  }, [data])

  //handle Select variation
  const handleSelectVariation = (parentkey, item) => {
    const index = variationSelected.findIndex(
      (variant) => variant.parentkey === parentkey,
    )
    const updatedVariationSelected = [...variationSelected]

    if (index !== -1) {
      // If the variation for the parentkey already exists, update its selectedkey
      updatedVariationSelected[index] = {
        ...updatedVariationSelected[index],
        selectedkey: item.slug,
        selectedName: item.name,
      }
    } else {
      // If the variation for the parentkey doesn't exist, add it to the array
      updatedVariationSelected.push({
        parentkey,
        selectedkey: item.slug,
        selectedName: item.name,
      })
    }
    setVariationSelected(updatedVariationSelected)
  }

  //check variant selected or not
  const isSelected = (parentkey, itemkey) => {
    const findExistChild = variationSelected.find(
      (variant) =>
        variant.parentkey === parentkey && variant.selectedkey === itemkey,
    )
    return findExistChild ? true : false
  }
  useEffect(() => {
    if (variationSelected.length < 1) return
    // handle list out of stock
    const listParentKey = listAttribute.map((item) => item.key)
    const lastKey = getLastKey(variationSelected, listParentKey)
    const listVariations = Object.values(data?.variations)
    const listOutOfStock = getListValueOutOfStock(
      listVariations,
      variationSelected,
      lastKey,
    )

    // console.log('listOutOfStock', listOutOfStock)
    const listValueOutOfStock = listOutOfStock.map((item) => {
      return item.attributes?.[lastKey].key
    })

    setListOutOfStock({
      key: lastKey,
      value: listValueOutOfStock,
    })

    if (variationSelected.length === listParentKey.length) {
      // when variationSelected change => if list out of stock have selectedkey => update selectedkey = ""
      variationSelected.forEach((item, index) => {
        if (
          item.parentkey === lastKey &&
          listValueOutOfStock.includes(item.selectedkey)
        ) {
          variationSelected[index].selectedkey = ''
          setSelectedPrd((prev) => ({
            ...prev,
            selectedVariations: {},
          }))
        }
      })
      const variationSelectedInfo = listVariations.find((variant) => {
        if (
          variationSelected.every(
            (item) =>
              variant.attributes?.[item.parentkey]?.key === item.selectedkey,
          )
        ) {
          return variant
        }
      })

      if (variationSelectedInfo)
        setSelectedPrd((prev) => ({
          ...prev,
          selectedVariations: variationSelectedInfo,
        }))
    }
  }, [variationSelected])
  return (
    <div className=''>
      {listAttribute?.map((variation, index) => {
        return (
          <div
            key={index}
            className='mt-[1.17rem]'
          >
            <span className='caption1 text-greyscale-30 font-medium mb-[0.59rem] flex'>
              {variation?.label}:
            </span>

            <div className='flex'>
              {variation?.value?.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={cn(
                      'flex relative items-center mr-[0.44rem] p-[0.44rem] shadow-[2px_4px_20px_0px_rgba(0,0,0,0.02),-6px_2px_32px_0px_rgba(0,0,0,0.06)] rounded-[0.29283rem] cursor-pointer border-[2px] border-solid',
                      isSelected(variation?.key, item?.slug)
                        ? 'border-blue-500'
                        : 'border-transparent',
                      variation.key === listOutOfStock.key &&
                        listOutOfStock.value.includes(item?.slug)
                        ? 'bg-[rgba(0,0,0,0.2)] pointer-events-none'
                        : 'bg-white',
                    )}
                    onClick={() => handleSelectVariation(variation?.key, item)}
                  >
                    <Image
                      src={'/components/checkVar.svg'}
                      alt=''
                      width={12}
                      height={12}
                      className={`absolute top-[-0.43924rem] right-[-0.36603rem] z-10 ${
                        isSelected(variation.key, item?.slug)
                          ? 'flex'
                          : 'hidden'
                      }`}
                    />
                    {item?.image && item?.image?.length > 0 ? (
                      <Image
                        src={item.image}
                        alt=''
                        width={28}
                        height={27}
                        className='w-[2.04978rem] h-[1.97657rem] object-contain mr-[0.29rem]'
                      />
                    ) : (
                      ''
                    )}
                    <span className='caption1 font-normal text-greyscale-40'>
                      {item?.name}
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
