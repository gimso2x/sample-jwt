import { deleteCookie } from 'cookies-next'
import { NextRequest } from 'next/server'
import api from '@/services/api'

export const isLoginValidServerSide = (request: NextRequest) => {
  const accessToken = request.cookies.get('accessToken')
  const refreshToken = request.cookies.get('refreshToken')

  if (accessToken) {
    return true
  }
  if (refreshToken) {
    return true
  }
  return false
}

export const destroyToken = () => {
  deleteCookie('accessToken')
  deleteCookie('refreshToken')
  api.defaults.headers.common['Authorization'] = ''
}
