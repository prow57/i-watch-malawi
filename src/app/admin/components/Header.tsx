'use client'
import { FiBell, FiSearch, FiUser } from 'react-icons/fi'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="relative max-w-md w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search..."
            type="search"
          />
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <FiBell className="h-6 w-6" />
          </button>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FiUser className="h-8 w-8 rounded-full bg-gray-200 p-2 text-gray-700" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}