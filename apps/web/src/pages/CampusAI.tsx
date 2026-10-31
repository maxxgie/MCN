import { Send, Sparkles, Bot, User } from 'lucide-react'
import { useState } from 'react'

export function CampusAI() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m Campus AI, your personal academic assistant. How can I help you today?' }
  ])

  const handleSend = () => {
    if (!message.trim()) return
    setMessages([...messages, { role: 'user', content: message }])
    setMessage('')
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: 'I\'m processing your request... This is a demo response.' }])
    }, 1000)
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-fade-in">
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-purple-600" />
          Campus AI
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Your intelligent academic companion</p>
      </div>

      <div className="flex-1 glass rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
              )}
              <div className={`max-w-2xl p-4 rounded-xl ${
                msg.role === 'user' 
                  ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white' 
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}>
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about your courses, research, or studies..."
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-gradient-to-r from-primary-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
