import { Plus, BookOpen } from 'lucide-react'

export function Courses() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Courses</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your courses</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">
          <Plus className="w-4 h-4" />
          Add Course
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="glass rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all cursor-pointer">
          <div className="h-2 bg-blue-500"></div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-3">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full">CS301</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Data Structures</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Fall 2024</p>
            <div className="text-xs text-gray-500">Prof. Johnson</div>
          </div>
        </div>
      </div>
    </div>
  )
}
