import { NavLink } from 'react-router-dom'
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Brain, 
  Search, 
  Calendar, 
  Users, 
  Code, 
  Briefcase, 
  Settings,
  Sparkles
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Courses', path: '/courses' },
  { icon: FileText, label: 'Notes', path: '/notes' },
  { icon: Brain, label: 'Campus AI', path: '/ai' },
  { icon: Search, label: 'Research', path: '/research' },
  { icon: Calendar, label: 'Calendar', path: '/calendar' },
  { icon: Users, label: 'Collaboration', path: '/collab' },
  { icon: Code, label: 'Workspace', path: '/workspace' },
  { icon: Briefcase, label: 'Career', path: '/career' },
  { icon: Settings, label: 'Settings', path: '/settings' },
]

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 glass border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            MCN
          </span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Academic Operating System</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-purple-600"></div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Student</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">student@university.edu</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
