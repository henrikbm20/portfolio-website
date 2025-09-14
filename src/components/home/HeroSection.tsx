import { Link } from 'react-router-dom'
import { CheckCircle, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Hero } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'
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
    <Hero size="lg" className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden min-h-screen flex items-center pt-0 -mt-16 pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid-aligned container with 50px spacing */}
      <div className="relative w-full max-w-7xl mx-auto" style={{ padding: '50px' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '100px' }}>
          {/* Left side - Text content aligned to grid */}
          <div className="text-center lg:text-left flex flex-col justify-center" style={{ gap: '50px' }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight animate-fade-in delay-100 relative z-10" style={{lineHeight: '1.16'}}>
              <div>Custom</div>
              <div>websites</div>
              <div>that</div>
              <div className="flex justify-center lg:justify-start items-baseline" style={{paddingBottom: '0.25rem', minHeight: '1.2em'}}>
                <div style={{width: '200px', position: 'relative', display: 'inline-block'}}>
                  <TypewriterText />
                </div>
              </div>
            </h1>
            <div className="animate-fade-in delay-400" style={{ gap: '25px', display: 'flex', flexDirection: 'column' }}>
              <p className="text-sm sm:text-base text-muted-foreground">
                From DKK 12,999 • Free consultation • 30-day support included
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start text-sm text-muted-foreground" style={{ gap: '25px' }}>
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
          
          {/* Right side - Hero image/graphic aligned to grid */}
          <div className="relative order-1 lg:order-2 animate-fade-in delay-500 flex items-center justify-center mb-8 lg:mb-0" style={{marginTop: '-60px'}}>
            <InteractiveBrowserMockup />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
          showScrollIndicator ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="cursor-pointer animate-bounce" 
             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <ChevronDown className="w-6 h-6 text-muted-foreground hover:text-foreground transition-colors" />
        </div>
      </div>
    </Hero>
  )
}