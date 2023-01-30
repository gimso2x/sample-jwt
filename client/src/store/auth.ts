import { create } from 'zustand'

interface StoreType {
  auth: boolean
  actions: {
    setAuth: (auth: boolean) => void
    clearAuth: () => void
  }
}

export const useAuthStore = create<StoreType>((set) => ({
  auth: false,
  actions: {
    setAuth: (auth: boolean) => {
      set({ auth })
    },
    clearAuth: () => set({ auth: false }),
  },
}))

export const useAuthStoreValue = () => useAuthStore((state) => state.auth)
export const useAuthStoreActions = () => useAuthStore((state) => state.actions)
