import api from '../api'

export interface AuthType {
  email: string
  password: string
}

export const postSignUp = (data: AuthType) => {
  return api.post('/auth/register', data)
}
