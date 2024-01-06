import NavBar from '@/components/admin/NavBar'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const User = () => {
  const token = Cookies.get('token')
  const router = useRouter()

  // check if token is valid
  useEffect(() => {
    if (!token) {
      router.push('/admin-login')
      toast.error('Please login first')
    }
  }, [router, token]) // Include dependencies for re-running the effect

  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-col flex-1">
          <div className="flex flex-col flex-1 max-w-4xl mx-auto w-full items-center justify-center px-6 py-12">
            <div className="w-full">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-900">Users</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User
