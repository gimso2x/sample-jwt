import api from '../api'

export interface ProfileType {
  id: string
  email: string
}

export const getProfile = () => {
  return api.get<null, ProfileType>('/users/profile')
}
