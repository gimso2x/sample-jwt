import { deleteCookie } from 'cookies-next'
import api from '../../services/api'

export const destroyToken = () => {
  deleteCookie('accessToken')
  deleteCookie('refreshToken')
  api.defaults.headers.common['Authorization'] = ''
}
