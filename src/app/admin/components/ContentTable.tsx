'use client'
import { SAMPLE_CONTENT } from '../lib/constants'
import { ContentItem } from '../types/dashboard-types'
import { FiEdit2, FiTrash2, FiEye } from 'react-icons/fi'

const statusStyles: Record<string, string> = {
  published: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  flagged: 'bg-red-100 text-red-800',
}

export default function ContentTable() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Recent Content
        </h3>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Add New
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Views
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Upload Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Creator
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {SAMPLE_CONTENT.map((content) => (
              <TableRow key={content.id} content={content} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function TableRow({ content }: { content: ContentItem }) {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {content.title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {content.type}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {content.views.toLocaleString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(content.uploadDate).toLocaleDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[content.status]}`}>
          {content.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {content.creator}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
        <button className="text-indigo-600 hover:text-indigo-900">
          <FiEye className="h-5 w-5" />
        </button>
        <button className="text-yellow-600 hover:text-yellow-900">
          <FiEdit2 className="h-5 w-5" />
        </button>
        <button className="text-red-600 hover:text-red-900">
          <FiTrash2 className="h-5 w-5" />
        </button>
      </td>
    </tr>
  )
}