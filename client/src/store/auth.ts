import { create } from 'zustand'
import { TokenType } from '../services/auth'

interface StoreType {
  auth: {} | TokenType
  actions: {
    setAuth: (auth: TokenType) => void
    clearAuth: () => void
  }
}

export const useAuthStore = create<StoreType>((set) => ({
  auth: {},
  actions: {
    setAuth: (auth: TokenType) => set({ auth }),
    clearAuth: () => set({ auth: {} }),
  },
}))

export const useStoreAuth = () => useAuthStore((state) => state.auth)
export const useStoreActions = () => useAuthStore((state) => state.actions)
