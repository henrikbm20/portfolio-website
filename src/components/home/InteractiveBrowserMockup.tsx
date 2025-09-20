import { useState, useEffect } from 'react'

export function InteractiveBrowserMockup() {
  const [scrollOffset, setScrollOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Convert vertical scroll to horizontal scroll offset
      // Adjust the multiplier (0.3) to control sensitivity
      setScrollOffset(scrollY * 0.3)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative w-full" style={{ maxWidth: '500px' }}>
      {/* Floating elements for depth - responsive sizing */}
      <div className="absolute bg-primary/10 rounded-full blur-xl animate-pulse" style={{ top: '-15px', right: '-15px', width: '30px', height: '30px' }}></div>
      <div className="absolute bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" style={{ bottom: '-15px', left: '-15px', width: '45px', height: '45px' }}></div>
      
      {/* Main hero image container - grid aligned dimensions */}
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-6 lg:p-8">
        <div className="bg-slate-900 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl rounded-lg sm:rounded-xl border border-slate-700/50">
          {/* Mock browser window */}
          <div className="bg-slate-800 flex items-center border-b border-slate-700 px-3 py-3 sm:px-6 sm:py-6 gap-2 sm:gap-3">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <div className="bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer w-2 h-2 sm:w-3 sm:h-3"></div>
              <div className="bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer w-2 h-2 sm:w-3 sm:h-3"></div>
              <div className="bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer w-2 h-2 sm:w-3 sm:h-3"></div>
            </div>
            <div className="bg-slate-700 rounded-lg text-gray-300 flex-1 shadow-inner border border-slate-600 text-xs sm:text-sm ml-2 sm:ml-3 px-2 py-1 sm:px-3 sm:py-1.5">
              yourwebsite.com
            </div>
            <div className="bg-slate-600 rounded w-4 h-4 sm:w-6 sm:h-6"></div>
          </div>
          
          {/* Mock website content with responsive spacing */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800/50 to-slate-700/30 p-4 sm:p-8 lg:p-12">
            <div className="flex flex-col gap-3 sm:gap-6">
              {/* Header section - Static */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full shadow-sm h-4 sm:h-6 w-4/5"></div>
                <div className="bg-slate-600 rounded-full h-2 sm:h-3 w-3/5"></div>
                <div className="bg-slate-600 rounded-full h-2 sm:h-3 w-2/5"></div>
              </div>
              
              {/* CTA Button - Static */}
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow h-8 sm:h-12 w-24 sm:w-44">
                  <span className="text-white text-xs sm:text-sm font-semibold">Get Started →</span>
                </div>
                <div className="absolute bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 inset-0 -inset-0.5"></div>
              </div>
              
              {/* Feature cards with scrolling - Responsive */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-out gap-2 sm:gap-3"
                  style={{ 
                    transform: `translateX(-${Math.min(scrollOffset, 150)}px)`,
                    width: 'calc(100% + 200px)'
                  }}
                >
                  <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 rounded-lg border border-blue-700/50 flex-shrink-0 h-12 sm:h-20 w-16 sm:w-24 p-2 sm:p-3">
                    <div className="bg-blue-400 rounded mb-1 w-4 h-4 sm:w-6 sm:h-6"></div>
                    <div className="bg-blue-600 rounded h-1 sm:h-1.5 w-3/4"></div>
                  </div>
                  <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 rounded-lg border border-green-700/50 flex-shrink-0 h-12 sm:h-20 w-16 sm:w-24 p-2 sm:p-3">
                    <div className="bg-green-400 rounded mb-1 w-4 h-4 sm:w-6 sm:h-6"></div>
                    <div className="bg-green-600 rounded h-1 sm:h-1.5 w-3/4"></div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg border border-purple-700/50 flex-shrink-0 h-12 sm:h-20 w-16 sm:w-24 p-2 sm:p-3">
                    <div className="bg-purple-400 rounded mb-1 w-4 h-4 sm:w-6 sm:h-6"></div>
                    <div className="bg-purple-600 rounded h-1 sm:h-1.5 w-3/4"></div>
                  </div>
                  <div className="bg-gradient-to-br from-red-900/50 to-red-800/50 rounded-lg border border-red-700/50 flex-shrink-0 h-12 sm:h-20 w-16 sm:w-24 p-2 sm:p-3">
                    <div className="bg-red-400 rounded mb-1 w-4 h-4 sm:w-6 sm:h-6"></div>
                    <div className="bg-red-600 rounded h-1 sm:h-1.5 w-3/4"></div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/50 rounded-lg border border-yellow-700/50 flex-shrink-0 h-12 sm:h-20 w-16 sm:w-24 p-2 sm:p-3">
                    <div className="bg-yellow-400 rounded mb-1 w-4 h-4 sm:w-6 sm:h-6"></div>
                    <div className="bg-yellow-600 rounded h-1 sm:h-1.5 w-3/4"></div>
                  </div>
                </div>
              </div>
              
              {/* Bottom content area - Static */}
              <div className="flex flex-col gap-1 sm:gap-1.5">
                <div className="bg-slate-600 rounded h-1 sm:h-1.5 w-full"></div>
                <div className="bg-slate-600 rounded h-1 sm:h-1.5 w-4/5"></div>
                <div className="bg-slate-600 rounded h-1 sm:h-1.5 w-3/5"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 bg-gradient-to-br from-slate-700/20 to-slate-800/20 blur-sm" style={{ top: '12.5px', left: '12.5px', width: '100%', height: '100%', borderRadius: '25px' }}></div>
      </div>
    </div>
  )
}