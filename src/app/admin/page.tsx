import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'
import ContentTable from './components/ContentTable'
import Header from './components/Header'

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