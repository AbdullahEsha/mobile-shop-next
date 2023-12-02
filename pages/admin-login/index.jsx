import Image from 'next/image'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

const Login = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  console.log('process.NEXT_ENV', process.env.NEXT_ENV)

  const login = async (submitData) => {
    console.log('submitData', submitData)
    const response = await fetch(`${process.env.API_URL}/api/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submitData),
    })
    const data = await response.json()
    if (response.ok) {
      toast.success('Login successfully')
      dispatch({
        type: 'AUTH_LOGIN/login',
        payload: {
          token: data.token,
          user: JSON.stringify(data.user),
        },
      })
      router.push('/admin-dashboard')
    } else {
      toast.error(data.message)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const submitData = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
    // console.log('submitData', submitData)
    login(submitData)
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src={'/iphone-logo.png'}
            alt="login-logo"
            width={200}
            height={200}
            className="mx-auto"
            priority={true}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
