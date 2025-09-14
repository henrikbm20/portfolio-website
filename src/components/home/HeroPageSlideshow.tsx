import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function HeroPageSlideshow() {
  const heroPages = [
    {
      url: 'https://april.papairs.com',
      title: 'April PaPairs',
      description: 'Dating platform with personalized matchmaking'
    },
    {
      url: 'https://barikisu.papairs.com',
      title: 'Barikisu PaPairs',
      description: 'Modern dating app with intelligent algorithms'
    },
    {
      url: 'https://barento.dk',
      title: 'Barento',
      description: 'Premium childcare services platform'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = (index: number) => {
    if (index === currentSlide || isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 150)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToSlide((currentSlide + 1) % heroPages.length)
      }
    }, 4000)
    
    return () => clearInterval(interval)
  }, [currentSlide, isTransitioning, heroPages.length])

  return (
    <div className="space-y-4">
      <div className="overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center justify-between">
          <div className={`transition-all duration-300 ease-in-out ${
            isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            <h4 className="font-semibold text-lg mb-2">{heroPages[currentSlide].title}</h4>
            <p className="text-muted-foreground text-sm mb-3">{heroPages[currentSlide].description}</p>
            <a 
              href={heroPages[currentSlide].url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 transition-colors"
            >
              Visit Live Site <ArrowRight className="w-3 h-3" />
            </a>
          </div>
          
          {/* Slide indicators */}
          <div className="flex gap-2">
            {heroPages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 disabled:cursor-not-allowed ${
                  index === currentSlide 
                    ? 'bg-primary scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Slide counter */}
      <div className="text-center">
        <span className={`text-sm text-muted-foreground transition-opacity duration-300 ${
          isTransitioning ? 'opacity-50' : 'opacity-100'
        }`}>
          {currentSlide + 1} of {heroPages.length} • Auto-advancing every 4 seconds
        </span>
      </div>
    </div>
  )
}