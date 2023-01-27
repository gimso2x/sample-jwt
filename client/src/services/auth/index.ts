import api from '../api'

export interface AuthType {
  email: string
  password: string
}

export interface TokenType {
  accessToken: string
  refreshToken: string
}

export const postSignUp = (data: AuthType) => {
  return api.post<null, TokenType>('/auth/register', data)
}

export const postSignIn = (data: AuthType) => {
  return api.post<null, TokenType>('/auth/login', data)
}
