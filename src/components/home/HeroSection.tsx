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
  <div className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden min-h-[80vh] flex items-center justify-center pt-20 sm:pt-16 pb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Main content container - perfectly centered and responsive */}
  <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-center pb-12 sm:pb-16">
        {/* Mobile Layout - Stack vertically */}
  <div className="lg:hidden w-full flex flex-col items-center justify-center space-y-6 py-6">
          {/* Mobile Text content */}
          <div className="text-center flex flex-col justify-center space-y-4">
            <h1 className="text-[clamp(2rem,7vw,3.5rem)] font-bold tracking-tight animate-fade-in delay-100 relative z-10 leading-tight break-words">
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
              <p className="text-[clamp(0.875rem,1.8vw,1rem)] text-muted-foreground">
                From DKK 12,999 • Free consultation • 30-day support included
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center text-[clamp(0.875rem,1.5vw,1rem)] text-muted-foreground gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Fast delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>SEO optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
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
            <h1 className="text-[clamp(3rem,5vw,6rem)] font-bold tracking-tight animate-fade-in delay-100 relative z-10 leading-tight">
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
                <p className="text-lg text-muted-foreground">
                  From DKK 12,999 • Free consultation • 30-day support included
                </p>
                <div className="flex flex-wrap items-center text-base text-muted-foreground gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fast delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>SEO optimized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
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
          <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
        </div>
      </div>
    </div>
  )
}