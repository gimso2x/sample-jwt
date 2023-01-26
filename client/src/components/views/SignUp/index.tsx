import { useMutation } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { AuthType, postSignUp } from '../../../services/auth'
import { CACHE_KEYS } from '../../../services/cacheKeys'

const SignUp = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthType>()

  const handleJoinForm = (data: AuthType) => {
    mutate(data)
  }

  const { mutate } = useMutation(CACHE_KEYS.singUp, postSignUp, {
    onSuccess: () => {
      router.push('/signIn')
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
        <h2 className="card-title">Join</h2>
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
          <button className="btn btn-secondary" type="submit">
            Join
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
