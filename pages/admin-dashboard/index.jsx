import NavBar from '@/components/admin/NavBar'
import UserDetailsTable from '@/components/admin/UserDetailsTable'
import { useSelector } from 'react-redux'

const DashboardPage = () => {
  const data = useSelector((state) => state.AUTH_LOGIN)

  if (data) {
    console.log('user', data)
  }

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
