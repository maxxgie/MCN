import { Calendar as CalendarIcon, Plus } from 'lucide-react'

export function Calendar() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Calendar</h1>
          <p className="text-gray-600 dark:text-gray-400">Schedule and deadlines</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">
          <Plus className="w-4 h-4" />
          Add Event
        </button>
      </div>

      <div className="glass p-6 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-center h-96 text-gray-500">
          <div className="text-center">
            <CalendarIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p>Calendar view coming soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}
