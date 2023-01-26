import axios from 'axios'
import { getCookie } from 'cookies-next'

const accessToken = getCookie('accessToken')

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
  },
})

export default api
