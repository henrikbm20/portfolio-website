export function NotFound() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-white">Page not found</h2>
        <p className="text-slate-300 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
        >
          Go back home
        </a>
      </div>
    </div>
  )
}