import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { CACHE_KEYS } from '../../../services/cacheKeys'
import { getProfile } from '../../../services/users'

const Main = () => {
  const [pageLoad, setPageLoad] = useState(false)
  const { data, isLoading } = useQuery(CACHE_KEYS.profile, getProfile, {
    enabled: pageLoad,
  })

  useEffect(() => {
    setPageLoad(true)
  }, [])

  return (
    <div className="hero bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          {data && (
            <>
              <h1 className="text-5xl font-bold">Hello {data?.email}</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </>
          )}
          {!isLoading && !data && (
            <h1 className="text-5xl font-bold">oops... not login</h1>
          )}
        </div>
      </div>
    </div>
  )
}

export default Main
