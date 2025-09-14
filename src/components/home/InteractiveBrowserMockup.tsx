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
      {/* Floating elements for depth - aligned to grid */}
      <div className="absolute bg-primary/10 rounded-full blur-xl animate-pulse" style={{ top: '-25px', right: '-25px', width: '50px', height: '50px' }}></div>
      <div className="absolute bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000" style={{ bottom: '-25px', left: '-25px', width: '75px', height: '75px' }}></div>
      
      {/* Main hero image container - grid aligned dimensions */}
      <div className="relative bg-gradient-to-br from-primary/20 to-blue-500/20 backdrop-blur-sm border border-primary/20 shadow-2xl" style={{ borderRadius: '25px', padding: '25px' }}>
        <div className="bg-white shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl" style={{ borderRadius: '15px' }}>
          {/* Mock browser window */}
          <div className="bg-gray-100 flex items-center border-b border-gray-200" style={{ padding: '25px', gap: '12.5px' }}>
            <div className="flex items-center" style={{ gap: '6.25px' }}>
              <div className="bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer" style={{ width: '12.5px', height: '12.5px' }}></div>
              <div className="bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer" style={{ width: '12.5px', height: '12.5px' }}></div>
              <div className="bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer" style={{ width: '12.5px', height: '12.5px' }}></div>
            </div>
            <div className="bg-white rounded-lg text-gray-600 flex-1 shadow-inner border border-gray-200 text-sm" style={{ marginLeft: '12.5px', padding: '6.25px 12.5px' }}>
              yourwebsite.com
            </div>
            <div className="bg-gray-200 rounded" style={{ width: '25px', height: '25px' }}></div>
          </div>
          
          {/* Mock website content with grid spacing */}
          <div className="bg-gradient-to-br from-white via-gray-50/50 to-primary/5" style={{ padding: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {/* Header section - Static */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12.5px' }}>
                <div className="bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-full shadow-sm" style={{ height: '25px', width: '80%' }}></div>
                <div className="bg-gray-200 rounded-full" style={{ height: '12.5px', width: '60%' }}></div>
                <div className="bg-gray-200 rounded-full" style={{ height: '12.5px', width: '40%' }}></div>
              </div>
              
              {/* CTA Button - Static */}
              <div className="relative">
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow" style={{ height: '50px', width: '175px' }}>
                  <span className="text-white text-sm font-semibold">Get Started →</span>
                </div>
                <div className="absolute bg-gradient-to-r from-primary to-blue-600 rounded-lg blur opacity-20" style={{ inset: '-2px' }}></div>
              </div>
              
              {/* Feature cards with scrolling - Grid aligned */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-300 ease-out"
                  style={{ 
                    gap: '12.5px',
                    transform: `translateX(-${Math.min(scrollOffset, 150)}px)`,
                    width: 'calc(100% + 200px)'
                  }}
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200/50 flex-shrink-0" style={{ height: '75px', width: '100px', padding: '12.5px' }}>
                    <div className="bg-blue-500 rounded mb-1" style={{ width: '25px', height: '25px' }}></div>
                    <div className="bg-blue-300 rounded" style={{ height: '6.25px', width: '75%' }}></div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200/50 flex-shrink-0" style={{ height: '75px', width: '100px', padding: '12.5px' }}>
                    <div className="bg-green-500 rounded mb-1" style={{ width: '25px', height: '25px' }}></div>
                    <div className="bg-green-300 rounded" style={{ height: '6.25px', width: '75%' }}></div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200/50 flex-shrink-0" style={{ height: '75px', width: '100px', padding: '12.5px' }}>
                    <div className="bg-purple-500 rounded mb-1" style={{ width: '25px', height: '25px' }}></div>
                    <div className="bg-purple-300 rounded" style={{ height: '6.25px', width: '75%' }}></div>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200/50 flex-shrink-0" style={{ height: '75px', width: '100px', padding: '12.5px' }}>
                    <div className="bg-red-500 rounded mb-1" style={{ width: '25px', height: '25px' }}></div>
                    <div className="bg-red-300 rounded" style={{ height: '6.25px', width: '75%' }}></div>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200/50 flex-shrink-0" style={{ height: '75px', width: '100px', padding: '12.5px' }}>
                    <div className="bg-yellow-500 rounded mb-1" style={{ width: '25px', height: '25px' }}></div>
                    <div className="bg-yellow-300 rounded" style={{ height: '6.25px', width: '75%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Bottom content area - Static */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6.25px' }}>
                <div className="bg-gray-200 rounded" style={{ height: '6.25px', width: '100%' }}></div>
                <div className="bg-gray-200 rounded" style={{ height: '6.25px', width: '80%' }}></div>
                <div className="bg-gray-200 rounded" style={{ height: '6.25px', width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -z-10 bg-gradient-to-br from-primary/10 to-blue-500/10 blur-sm" style={{ top: '12.5px', left: '12.5px', width: '100%', height: '100%', borderRadius: '25px' }}></div>
      </div>
    </div>
  )
}