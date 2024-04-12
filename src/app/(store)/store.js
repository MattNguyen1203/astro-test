import {create} from 'zustand'
const useStore = create((set) => ({
  isFocusSearchNav: false,
  isOpenMegaMenuRes: false,

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
}))
export default useStore
