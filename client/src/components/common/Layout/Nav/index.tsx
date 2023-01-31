import { getProfile } from '@/services/users'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CACHE_KEYS } from '@/services/cacheKeys'
import { destroyToken } from '@/utils/auth'

const Nav = () => {
  const router = useRouter()
  const client = useQueryClient()
  const { data, isLoading } = useQuery(CACHE_KEYS.profile, getProfile, {
    enabled: router.pathname !== '/signIn',
  })

  const logoutAction = () => {
    destroyToken()
    client.removeQueries(CACHE_KEYS.profile)
    router.push('/signIn')
  }

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Sample-JWT
        </Link>
      </div>
      <div className="flex-none">
        {data ? (
          <button className="btn btn-secondary" onClick={logoutAction}>
            로그아웃
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => router.push('/signIn')}
          >
            로그인
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
