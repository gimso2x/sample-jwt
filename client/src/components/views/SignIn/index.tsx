import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { AuthType, postSignIn } from '../../../services/auth'
import { CACHE_KEYS } from '../../../services/cacheKeys'
import { setCookie } from 'cookies-next'
import api from '../../../services/api'
import { useAuthStoreActions } from '../../../store/auth'

const SignIn = () => {
  const router = useRouter()
  const { setAuth } = useAuthStoreActions()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthType>()

  const handleJoinForm = (data: AuthType) => {
    mutate(data)
  }

  const { mutate } = useMutation(CACHE_KEYS.singIn, postSignIn, {
    onSuccess: (response) => {
      setCookie('accessToken', response.accessToken)
      setCookie('refreshToken', response.refreshToken)
      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.accessToken}`
      setAuth(true)
      router.replace('/')
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        if (err.response?.data) {
          setError('email', {
            type: 'custom',
            message: err.response.data.message,
          })
        }
      }
    },
  })

  return (
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-auto">
      <form className="card-body" onSubmit={handleSubmit(handleJoinForm)}>
        <h2 className="card-title">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            {...register('email', { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            {...register('password', { required: true })}
          />
        </div>
        {errors.email && (
          <span className="text-red-700">{errors.email.message}</span>
        )}
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
