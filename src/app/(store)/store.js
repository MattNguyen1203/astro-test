import {create} from 'zustand'
const useStore = create((set) => ({
  isFocusSearchNav: false,
  isOpenMegaMenuRes: false,
  isFilterProduct: false,
  isFilterPosts: false,
  urlFilter: {
    pathName: '/san-pham',
    searchParams: {
      sort: '',
      type: '',
      flashsale: '',
      device: '',
      orderby: '',
      page: 1,
    },
  },
  isOpenSortRes: false,
  actionCart: false,
  setIsFocusSearchNav: (data) => {
    set((state) => {
      return {
        ...state,
        isFocusSearchNav: data,
      }
    })
  },
  setIsOpenMegaMenuRes: (data) => {
    set((state) => {
      return {
        ...state,
        isOpenMegaMenuRes: data,
      }
    })
  },
  setIsFilterProduct: (data) => {
    set((state) => {
      return {
        ...state,
        isFilterProduct: data,
      }
    })
  },
  setIsFilterPosts: (data) => {
    set((state) => {
      return {
        ...state,
        isFilterPosts: data,
      }
    })
  },
  setUrlFilter: (data) => {
    set((state) => {
      return {
        ...state,
        urlFilter: data,
      }
    })
  },
  setIsOpenSortRes: (data) => {
    set((state) => {
      return {
        ...state,
        isOpenSortRes: data,
      }
    })
  },
  setActionCart: (data) => {
    set((state) => {
      return {
        ...state,
        actionCart: data,
      }
    })
  },
}))
export default useStore
