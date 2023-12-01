import NavBar from '@/components/admin/NavBar'
import UserDetailsTable from '@/components/admin/UserDetailsTable'
import { useSelector } from 'react-redux'

const DashboardPage = () => {
  // const user = useSelector((state) => state.AUTH_LOGIN.user)

  //  user is a string using JSON.parse(user) to convert it into an object.

  const user = useSelector((state) => JSON.parse(state.AUTH_LOGIN.user))

  console.log('user', user)

  if (!user || !user.isAdmin) {
    return (
      <div>
        <h1>Access Denied</h1>
      </div>
    )
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
