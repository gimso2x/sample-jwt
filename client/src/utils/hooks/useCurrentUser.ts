import { getCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { useAuthStoreActions } from '../../store/auth'

const useCurrentUser = () => {
  const [user, setUser] = useState<boolean>(false)
  const { setAuth } = useAuthStoreActions()

  useEffect(() => {
    const accessToken = getCookie('accessToken')?.toString()
    const refreshToken = getCookie('refreshToken')?.toString()
    if (accessToken && refreshToken) {
      setUser(true)
    }
  }, [])

  return user
}
export default useCurrentUser
