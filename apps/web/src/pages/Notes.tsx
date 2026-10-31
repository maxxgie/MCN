import { Plus, Search, FileText } from 'lucide-react'

export function Notes() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Notes</h1>
          <p className="text-gray-600 dark:text-gray-400">Your knowledge base</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">
          <Plus className="w-4 h-4" />
          New Note
        </button>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search notes..."
          className="w-full pl-10 pr-4 py-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="glass p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-start justify-between mb-3">
            <FileText className="w-5 h-5 text-primary-600" />
          </div>
          <h3 className="font-semibold mb-2">Data Structures Overview</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            Arrays, linked lists, stacks, queues, trees and graphs...
          </p>
          <p className="text-xs text-gray-500">2 days ago</p>
        </div>
      </div>
    </div>
  )
}
