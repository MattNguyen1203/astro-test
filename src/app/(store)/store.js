import {create} from 'zustand'
const useStore = create((set) => ({
  isFocusSearchNav: false,
  setIsFocusSearchNav: (data) => {
    set((state) => {
      return {
        ...state,
        isFocusSearchNav: data,
      }
    })
  },
}))
export default useStore
