import { NextResponse, type NextRequest } from 'next/server'

import { isLoginValidServerSide } from 'utils/auth'

export function middleware(request: NextRequest) {
  if (
    protectedRoutes.includes(request.nextUrl.pathname) &&
    isLoginValidServerSide(request)
  ) {
    return NextResponse.redirect(new URL('/', request.url), 302)
  }

  if (
    authRoutes.includes(request.nextUrl.pathname) &&
    !isLoginValidServerSide(request)
  ) {
    return NextResponse.redirect(new URL('/', request.url), 302)
  }

  return NextResponse.next()
}

// export const config = {
//   matcher: ['/signIn', '/signUp'],
// }

const authRoutes = ['/authPage']
const protectedRoutes = ['/signIn', '/signUp']
