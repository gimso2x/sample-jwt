import Link from 'next/link'
import Router, { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter()

  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Sample-JWT
        </Link>
      </div>
      <div className="flex-none">
        <button
          className="btn btn-primary"
          onClick={() => router.push('/signIn')}
        >
          로그인
        </button>
      </div>
    </nav>
  )
}

export default Nav
