import { Search, FileText, ExternalLink } from 'lucide-react'

export function Research() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold mb-2">Research Environment</h1>
        <p className="text-gray-600 dark:text-gray-400">Literature review, citations, and academic research</p>
      </div>

      <div className="glass p-6 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search academic papers from Google Scholar, arXiv, Semantic Scholar..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Google Scholar</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">arXiv</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">Semantic Scholar</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">PubMed</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm">IEEE Xplore</span>
        </div>
      </div>

      <div className="glass p-6 rounded-xl border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-semibold mb-4">Recent Papers</h2>
        <div className="space-y-4">
          <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              Attention Is All You Need
              <ExternalLink className="w-4 h-4" />
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Vaswani et al. - NIPS 2017</p>
            <p className="text-sm text-gray-500 line-clamp-2">
              The dominant sequence transduction models are based on complex recurrent or convolutional neural networks...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
