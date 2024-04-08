import {create} from 'zustand'
const useStore = create((set) => ({
  isFocusSearchNav: false,
  isOpenMegaMenuRes: false,
  isFilterProduct: false,
  isFilterPosts: false,
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
}))
export default useStore
