import { ReactNode } from 'react'
import { useStoreAuth } from '../../../store/auth'
import Nav from './Nav'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <main className="lg:container m-auto">
      <Nav />
      <div className="card bg-base-100 mt-10 p-10">{children}</div>
    </main>
  )
}

export default Layout
