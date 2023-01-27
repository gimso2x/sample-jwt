import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from '../components/common/Layout'
import { useEffect } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // 실패한 쿼리 재시도 옵션 - default: 3, true: infinite, false: false
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,

      // onError: (err) => {
      //   console.log('err', err)
      //   if (isAxiosError(err)) {
      //     if (
      //       err.response?.status === 401 &&
      //       err.response.data.message === 'TokenExpiredError'
      //     ) {
      //     } else {
      //       window.location.href = '/signIn'
      //     }
      //   }
      // },
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log('app')
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
