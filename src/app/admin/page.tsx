import Sidebar from './components/Sidebar'
import DashboardHeader from './components/DashboardHeader'
import StatsCards from './components/StatsCards'
import ContentTable from './components/ContentTable'

export default function AdminPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <DashboardHeader />
        <main className="p-6">
          <StatsCards />
          <ContentTable />
        </main>
      </div>
    </>
  )
}