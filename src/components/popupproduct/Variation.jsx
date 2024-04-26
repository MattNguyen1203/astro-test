'use client'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import {useEffect, useMemo, useState} from 'react'
import {getLastKey, getListValueOutOfStock} from './function'

const Variation = ({data = {}, setSelectedPrd, selectedPrd}) => {
  const [variationSelected, setVariationSelected] = useState([])
  const [listAttribute, setListAttribute] = useState([])
  const [listOutOfStock, setListOutOfStock] = useState({
    key: '',
    value: [],
  })

  // console.log('variationSelected', variationSelected)
  // handle attribute
  useEffect(() => {
    if (!data || !data?.list_attributes || !data?.variations) return
    // get init list attribute
    const listAttr = Object.values(data?.list_attributes)
    const listVariations = Object.values(data?.variations)

    // check attributes that appear in variations
    const finalRes = listAttr.map((attr) => {
      const parentKey = attr?.key
      const listVal = attr.value.filter((item) => {
        const isExist = listVariations?.some(
          (variant) => variant?.attributes?.[parentKey].key === item.slug,
        )
        if (isExist) return item
      })

      if (listVal) {
        return {
          ...attr,
          value: listVal,
        }
      }
    })
    setListAttribute(finalRes)
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
        selectedkey: item?.slug,
        selectedName: item?.name,
      }
    } else {
      // If the variation for the parentkey doesn't exist, add it to the array
      updatedVariationSelected.push({
        parentkey,
        selectedkey: item?.slug,
        selectedName: item?.name,
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
    if (variationSelected.length < 1) {
      if (selectedPrd?.variation?.attributes) {
        const listVariant = Object.values(
          selectedPrd?.variation?.attributes,
        )?.map((item) => {
          return {
            parentkey: item.taxonomy,
            selectedkey: item.key,
            selectedName: item.label,
          }
        })
        setVariationSelected(listVariant)
      }
    } else {
      // handle list out of stock
      const listParentKey = listAttribute.map((item) => item.key)
      const lastKey = getLastKey(variationSelected, listParentKey)
      const listVariations = Object.values(data?.variations)
      const listOutOfStock = []

      const listInstock = getListValueOutOfStock(
        listVariations,
        variationSelected,
        lastKey,
      )

      console.log('listInstock', listInstock)

      const listValueLastKey = listAttribute?.find(
        (item) => item.key === lastKey,
      )?.value

      const listValueInstock = listInstock?.map(
        (item) => item.attributes?.[lastKey]?.key,
      )

      listValueLastKey?.forEach((item) => {
        if (!listValueInstock.includes(item.slug)) {
          listOutOfStock.push(item.slug)
        }
      })

      setListOutOfStock({
        key: lastKey,
        value: listOutOfStock,
      })

      if (variationSelected.length === listParentKey.length) {
        // when variationSelected change => if list out of stock have selectedkey => update selectedkey = ""
        variationSelected.forEach((item, index) => {
          if (
            item.parentkey === lastKey &&
            listOutOfStock.includes(item.selectedkey)
          ) {
            variationSelected[index].selectedkey = ''
            setSelectedPrd((prev) => ({
              ...prev,
              variation: {},
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
            variation: variationSelectedInfo,
          }))
      }
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
                      alt='astromazing'
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
                        alt='astromazing'
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
