import { FiTrendingUp, FiUsers, FiVideo, FiMusic } from 'react-icons/fi'

const stats = [
  { title: 'Total Views', value: '12.4M', change: 12.5, icon: <FiTrendingUp /> },
  { title: 'Active Users', value: '845K', change: 8.2, icon: <FiUsers /> },
  { title: 'Videos Uploaded', value: '24.5K', change: 3.2, icon: <FiVideo /> },
  { title: 'Music Tracks', value: '18.7K', change: 5.7, icon: <FiMusic /> },
]

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3 text-white">
                {stat.icon}
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {stat.title}
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">
                      {stat.value}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="mt-4">
              <span className={`text-sm font-medium ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change >= 0 ? '+' : ''}{stat.change}% from last month
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}