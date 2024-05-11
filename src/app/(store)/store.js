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
      preorder: '',
      device: '',
      orderby: '',
      page: 1,
    },
  },
  isOpenSortRes: false,
  actionCart: false,
  listCart: [],
  progress: 0,
  setProgress: (data) => {
    set((state) => {
      return {
        ...state,
        progress: data,
      }
    })
  },
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

  setListCart: (data) => {
    set((state) => {
      return {
        ...state,
        listCart: data,
      }
    })
  },
}))
export default useStore
