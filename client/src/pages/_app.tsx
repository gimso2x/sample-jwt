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
import { getCookie } from 'cookies-next'
import { useAuthStoreActions } from '../store/auth'
import { isAxiosError } from 'axios'
import { destroyToken } from '@/utils/auth'
import { CACHE_KEYS } from '@/services/cacheKeys'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // 실패한 쿼리 재시도 옵션 - default: 3, true: infinite, false: false
      retryOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,

      onError: (err) => {
        if (isAxiosError(err)) {
          if (err.response?.data) {
            console.log(err.response?.data?.message)
            if (err.response?.data?.message === 'jwt expired') {
              destroyToken()
              queryClient.removeQueries(CACHE_KEYS.profile)
              // window.location.href = '/'
            }
          }
        }
      },
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
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
