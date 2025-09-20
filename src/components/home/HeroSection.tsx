import { CheckCircle, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { TypewriterText } from './TypewriterText'
import { InteractiveBrowserMockup } from './InteractiveBrowserMockup'

export function HeroSection() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Show arrow only when near the top (within first 100px)
      setShowScrollIndicator(window.scrollY < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden min-h-screen h-screen flex items-center justify-center pt-20 sm:pt-16 pb-8"
    style={{ paddingTop: 'env(safe-area-inset-top, 1.5rem)', paddingBottom: 'env(safe-area-inset-bottom, 1.5rem)' }}>
      {/* Animated background elements - Professional tech theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating code snippets */}
        <div className="absolute top-20 left-10 w-32 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-float-1">
          <div className="text-xs text-blue-300 font-mono p-2">
            &lt;div&gt;Hello&lt;/div&gt;
          </div>
        </div>
        <div className="absolute top-40 right-20 w-40 h-20 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg animate-float-2">
          <div className="text-xs text-green-300 font-mono p-2">
            function animate() &#123; ... &#125;
          </div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-28 h-14 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg animate-float-3">
          <div className="text-xs text-pink-300 font-mono p-2">
            .hero &#123; animation: ... &#125;
          </div>
        </div>
        
        {/* Morphing geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full animate-morph-1"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-green-400/10 to-teal-600/10 rounded-full animate-morph-2"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>
        </div>
        
        {/* Subtle particle effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Main content container - perfectly centered and responsive */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-center pb-12 sm:pb-16">
        {/* Mobile Layout - Stack vertically */}
  <div className="lg:hidden w-full flex flex-col items-center justify-center space-y-6 py-6"
    style={{ marginTop: 'max(env(safe-area-inset-top, 1.5rem), 6vh)', marginBottom: 'max(env(safe-area-inset-bottom, 1.5rem), 6vh)' }}>
          {/* Mobile Text content */}
          <div className="text-center flex flex-col justify-center space-y-4">
            <h1 className="text-[clamp(2rem,7vw,3.5rem)] font-bold tracking-tight animate-fade-in delay-100 relative z-10 leading-tight break-words text-white">
              <div>Custom</div>
              <div>websites</div>
              <div>that</div>
              <div className="flex justify-center items-baseline" style={{paddingBottom: '0.25rem', minHeight: '1.2em'}}>
                <div className="w-[180px] sm:w-[200px] relative">
                  <TypewriterText />
                </div>
              </div>
            </h1>
          </div>
          
          {/* Mobile Hero image */}
          <div className="relative animate-fade-in delay-500 flex items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px]">
              <InteractiveBrowserMockup />
            </div>
          </div>
          
          {/* Mobile Bottom section - Pricing and features info */}
          <div className="animate-fade-in delay-400 text-center">
            <div className="space-y-4 max-w-4xl mx-auto">
              <p className="text-[clamp(0.875rem,1.8vw,1rem)] text-gray-300">
                From DKK 12,999 • Free consultation • 30-day support included
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center text-[clamp(0.875rem,1.5vw,1rem)] text-gray-300 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Fast delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>SEO optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Mobile responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:grid lg:grid-cols-2 items-center gap-16 w-full py-8">
          {/* Left side - Text content */}
          <div className="text-left flex flex-col justify-center space-y-6">
            <h1 className="text-[clamp(3rem,5vw,6rem)] font-bold tracking-tight animate-fade-in delay-100 relative z-10 leading-tight text-white">
              <div>Custom</div>
              <div>websites</div>
              <div>that</div>
              <div className="flex justify-start items-baseline" style={{paddingBottom: '0.25rem', minHeight: '1.2em'}}>
                <div className="w-[250px] relative">
                  <TypewriterText />
                </div>
              </div>
            </h1>
            
            {/* Desktop Bottom section - Pricing and features info */}
            <div className="animate-fade-in delay-400">
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  From DKK 12,999 • Free consultation • 30-day support included
                </p>
                <div className="flex flex-wrap items-center text-base text-gray-300 gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Fast delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>SEO optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Mobile responsive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Hero image */}
          <div className="relative animate-fade-in delay-500 flex items-center justify-center">
            <div className="w-full max-w-[600px]">
              <InteractiveBrowserMockup />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-10 ${
          showScrollIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="cursor-pointer animate-bounce" 
             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <ChevronDown className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  )
}