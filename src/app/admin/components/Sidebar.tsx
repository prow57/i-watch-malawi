'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '../lib/constants'
export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:w-64 md:flex-col">
      <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-xl font-bold text-gray-900">StreamHub Admin</h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  pathname === item.href
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.title}
                {item.count && (
                  <span className="ml-auto inline-block py-0.5 px-3 text-xs rounded-full bg-indigo-100 text-indigo-800">
                    {item.count}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}