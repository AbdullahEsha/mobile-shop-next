import NavBar from '@/components/admin/NavBar'
import UserDetailsTable from '@/components/admin/UserDetailsTable'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const DashboardPage = () => {
  const router = useRouter()
  // const user = useSelector((state) => state.AUTH_LOGIN.user)

  const userData = useSelector((state) => state.AUTH_LOGIN)

  // console.log('userData', userData.user)
  // console.log('token', userData.token)

  // protected route
  useEffect(() => {
    if (!userData.token) {
      router.push('/admin-login')
      toast.error('Please login first')
    }
  }, [userData.token, router])

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-8">
        <UserDetailsTable />
      </div>
    </div>
  )
}

export default DashboardPage
