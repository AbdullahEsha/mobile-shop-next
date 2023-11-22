import NavBar from '@/components/admin/NavBar'
import UserDetailsTable from '@/components/admin/UserDetailsTable'

const DashboardPage = () => {
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
