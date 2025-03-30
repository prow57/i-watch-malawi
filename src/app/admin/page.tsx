import Sidebar from './components/Sidebar'
import DashboardHeader from './components/Header'
import StatsCards from './components/StatsCards'
import ContentTable from './components/ContentTable'

export default function AdminPage() {
  return (
    <>
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <main className="p-6">
          <StatsCards />
          <ContentTable />
        </main>
      </div>
    </>
  )
}