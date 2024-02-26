import { create } from 'zustand'
const useStore = create((set) => ({
  indexTab: 1,
  setIndexTab: (data) => {
    set((state) => {
      return {
        ...state,
        indexTab: data,
      }
    })
  },
}))
export default useStore
