import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { Notes } from './pages/Notes'
import { Courses } from './pages/Courses'
import { CampusAI } from './pages/CampusAI'
import { Research } from './pages/Research'
import { Calendar } from './pages/Calendar'
import { Settings } from './pages/Settings'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/ai" element={<CampusAI />} />
        <Route path="/research" element={<Research />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
