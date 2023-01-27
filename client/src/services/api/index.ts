import axios, { isAxiosError } from 'axios'
import { getCookie, setCookie } from 'cookies-next'
import { TokenType } from '../auth'

const accessToken = getCookie('accessToken')

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
})

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const originalRequest = error.config
    if (isAxiosError(error)) {
      if (
        error.response?.status === 401 &&
        error.response.data.message === 'TokenExpiredError'
      ) {
        const refreshToken = getCookie('refreshToken')
        if (refreshToken) {
          return api
            .post<null, TokenType>('/auth/refreshToken', { refreshToken })
            .then(({ accessToken: newAccessToken, refreshToken }) => {
              setCookie('accessToken', accessToken)
              setCookie('refreshToken', refreshToken)
              api.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`
              originalRequest.headers!.Authorization = `Bearer ${newAccessToken}`
              return api(originalRequest)
            })
        }
      }
    }

    return Promise.reject(error)
  }
)

export default api
