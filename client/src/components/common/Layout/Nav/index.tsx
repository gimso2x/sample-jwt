import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuthStoreValue } from '../../../../store/auth'
import { destroyToken } from '../../../../utils/auth'
import useCurrentUser from '../../../../utils/hooks/useCurrentUser'

const Nav = () => {
  const router = useRouter()
  const user = useCurrentUser()

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Sample-JWT
        </Link>
      </div>
      <div className="flex-none">
        {user ? (
          <button
            className="btn btn-secondary"
            onClick={() => {
              destroyToken()
              router.push('/signIn')
            }}
          >
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
