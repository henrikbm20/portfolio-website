import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, TrendingUp, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { Hero, Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import projectsData from '@/content/projects.json'
import testimonialsData from '@/content/testimonials.json'
import { Project, Testimonial } from '@/types'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = projectsData as Project[]
const testimonials = testimonialsData as Testimonial[]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Fast Performance',
    description: 'Lightning-fast websites that load in under 2 seconds and rank higher in search results.'
  },
  {
    icon: CheckCircle,
    title: 'Mobile-First Design',
    description: 'Responsive designs that work perfectly on all devices and screen sizes.'
  },
  {
    icon: Star,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices to help your business get found online.'
  },
  {
    icon: ArrowRight,
    title: 'Easy Maintenance',
    description: 'User-friendly content management and ongoing support to keep your site updated.'
  }
]

const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

// Hero Page Slideshow Component
function HeroPageSlideshow() {
  const heroPages = [
    {
      url: 'https://april.papairs.com',
      title: 'April PaPairs',
      description: 'Dating platform with personalized matchmaking'
    },
    {
      url: 'https://barikisu.papairs.com',
      title: 'Barikisu PaPairs',
      description: 'Specialized dating platform for African diaspora'
    },
    {
      url: 'https://testing.papairs.com',
      title: 'Testing PaPairs',
      description: 'Development environment for platform testing'
    },
    {
      url: 'https://papairs.com',
      title: 'PaPairs',
      description: 'Main dating platform connecting compatible singles'
    },
    {
      url: 'https://henrikbm20.github.io/everythinginvestment',
      title: 'Investment',
      description: 'Main dating platform connecting compatible singles'
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const changeSlide = (newSlideIndex: number) => {
    if (isTransitioning || newSlideIndex === currentSlide) return
    
    setIsTransitioning(true)
    
    // Update slide after a short delay for animation
    setTimeout(() => {
      setCurrentSlide(newSlideIndex)
      setIsTransitioning(false)
    }, 300)
  }

  const handleNextSlide = () => {
    const nextIndex = (currentSlide + 1) % heroPages.length
    changeSlide(nextIndex)
  }

  const handlePrevSlide = () => {
    const prevIndex = (currentSlide - 1 + heroPages.length) % heroPages.length
    changeSlide(prevIndex)
  }

  const goToSlide = (index: number) => {
    changeSlide(index)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main slideshow area */}
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden group">
        <div className="aspect-video relative overflow-hidden">
          {/* Current slide with fade transition */}
          <div 
            className={`w-full h-full transition-opacity duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <iframe 
              src={heroPages[currentSlide].url} 
              className="w-full h-full scale-50 origin-top-left transform"
              style={{ width: '200%', height: '200%' }}
              title={`${heroPages[currentSlide].title} Hero`}
              key={`slide-${currentSlide}`}
            />
          </div>
          
          <div className="absolute inset-0 bg-transparent hover:bg-black/5 transition-colors cursor-pointer" 
               onClick={() => window.open(heroPages[currentSlide].url, '_blank')} />
          
          {/* Navigation arrows */}
          <button
            onClick={handlePrevSlide}
            disabled={isTransitioning}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        {/* Slide info */}
        <div className="p-6">
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
      </div>
      
      {/* Slide counter */}
      <div className="text-center mt-4">
        <span className={`text-sm text-muted-foreground transition-opacity duration-300 ${
          isTransitioning ? 'opacity-50' : 'opacity-100'
        }`}>
          {currentSlide + 1} of {heroPages.length} • Auto-advancing every 4 seconds
        </span>
      </div>
    </div>
  )
}

// Typewriter Effect Component
function TypewriterText() {
  const words = ['convert', 'perform', 'succeed', 'grow', 'impress', 'deliver']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1000)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          // Move to next word
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 80)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent relative z-10 inline-block text-left">
      {currentText}
      <span className="animate-pulse text-primary opacity-100 ml-1 font-thin">│</span>
    </span>
  )
}

// Interactive Browser Mockup Component
function InteractiveBrowserMockup() {
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

export function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show arrow only when near the top (within first 100px)
      setShowScrollIndicator(window.scrollY < 100);

      // Timeline animation
      const timelineSection = document.querySelector('#timeline-progress')?.parentElement?.parentElement;
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the timeline is visible (balanced progression)
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        // Start animation later but line fills at moderate speed
        const visibleStart = Math.max(0, (windowHeight * 0.7) - sectionTop); // Start at 70% of viewport
        const visibleProgress = Math.min(1, visibleStart / (sectionHeight * 1)); // line speed

        // Animate progress line
        const progressLine = document.getElementById('timeline-progress');
        if (progressLine) {
          progressLine.style.height = `${visibleProgress * 100}%`;
        }

        // Animate timeline steps (6 steps now, much more gradual)
        for (let i = 1; i <= 6; i++) {
          const step = document.getElementById(`timeline-step-${i}`);
          if (step) {
            const stepProgress = Math.max(0, (visibleProgress * 8) - (i - 1) * 1.2); // Keep gradual steps
            if (stepProgress > 0.1) { // Start fading in very early
              step.style.opacity = Math.min(1, (stepProgress - 0.1) * 1.5).toString(); // Slower fade
              step.style.transform = `translateY(${Math.max(0, (1 - stepProgress) * 50)}px)`; // More movement
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Chat animation state
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const runSequence = () => {
      setVisibleMessages([]);
      
      timeouts.push(setTimeout(() => setVisibleMessages([1]), 1000));
      timeouts.push(setTimeout(() => setVisibleMessages([1, 2]), 2400));
      timeouts.push(setTimeout(() => setVisibleMessages([1, 2, 3]), 3800));
      timeouts.push(setTimeout(() => {
        setVisibleMessages([]);
        timeouts.push(setTimeout(runSequence, 1000));
      }, 5200));
    };
    
    runSequence();
    
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
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
        
        {/* Scroll indicator arrow */}
        <div 
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce z-50 transition-opacity duration-500 ease-in-out ${
            showScrollIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className="flex flex-col items-center cursor-pointer group relative z-50" 
            onClick={() => {
              const benefitsSection = document.querySelector('#benefits-section');
              if (benefitsSection) {
                benefitsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
              }
            }}
            style={{ pointerEvents: 'auto' }}
          >
            <div className="w-8 h-8 border border-muted-foreground rounded-full flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground/10 transition-all bg-background/80 backdrop-blur-sm">
              <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
          </div>
        </div>
      </Hero>

      {/* Why Choose Dequ - Now with Primary Background */}
      <Section id="benefits-section" className="relative bg-primary text-primary-foreground py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
            Why choose Dequ?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We create websites that not only look amazing but also drive real business results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center border-0 shadow-none bg-primary-foreground/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-primary-foreground/80">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Customer Support Chat Animation Section */}
      <Section className="relative bg-muted/30 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Always Here to Help
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From project start to launch and beyond, our dedicated support team ensures your success every step of the way.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {/* Chat Window */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-border">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Dequ Customer Support</h3>
                  <p className="text-xs text-white/80">Always online</p>
                </div>
              </div>
            </div>

            {/* Chat Messages Container */}
            <div className="p-4 h-80 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative flex flex-col justify-end">
              
              <div className="flex flex-col gap-3">
                
                {/* Message 1 */}
                <AnimatePresence>
                  {visibleMessages.includes(1) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      layout
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">D</span>
                      </div>
                      <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm border max-w-xs">
                        <div className="space-y-2">
                          <div className="h-2 bg-gray-300 w-32"></div>
                          <div className="h-2 bg-gray-300 w-20"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Message 2 */}
                <AnimatePresence>
                  {visibleMessages.includes(2) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      layout
                      className="flex items-start gap-3 justify-end"
                    >
                      <div className="bg-primary text-white rounded-lg rounded-tr-none p-3 shadow-sm max-w-xs">
                        <div className="space-y-2">
                          <div className="h-2 bg-white/40 w-24"></div>
                          <div className="h-2 bg-white/40 w-16"></div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">You</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Message 3 */}
                <AnimatePresence>
                  {visibleMessages.includes(3) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      layout
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">D</span>
                      </div>
                      <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm border max-w-xs">
                        <p className="text-sm text-gray-800 mb-3">Here is your finished CIM, let us know if you want any changes ❤️</p>
                        
                        {/* File Download Component */}
                        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-gray-900 text-sm">Pied_Piper_CIM.pdf</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

            {/* Chat Input (Static) - Simple bottom section */}
            <div className="p-4 bg-white border-t flex justify-center">
              <div className="space-y-2" style={{width: '20rem'}}>
                <div className="h-2 bg-gray-300 w-full"></div>
                <div className="h-2 bg-gray-300 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="relative bg-background py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Website Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From first contact to live website - every step of your journey with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Progress Line */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-border">
            <div 
              id="timeline-progress"
              className="w-full bg-gradient-to-b from-primary to-primary/60 transition-all duration-1000 ease-out"
              style={{ height: '0%' }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16">
            {/* Step 1: Contact */}
            <div id="timeline-step-1" className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out">
              <div className="flex-1 md:pr-8 md:text-right">
                <div className="bg-card p-6 rounded-lg shadow-sm border md:ml-auto md:max-w-md hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h3 className="text-xl font-semibold">Initial Contact</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Reach out through our website, email, or phone. We respond within 24 hours to acknowledge your inquiry and schedule our first conversation.
                  </p>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              <div className="flex-1 md:pl-8 hidden md:block"></div>
            </div>

            {/* Step 2: Discovery */}
            <div id="timeline-step-2" className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out">
              <div className="flex-1 md:pr-8 hidden md:block"></div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              <div className="flex-1 md:pl-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border md:mr-auto md:max-w-md hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h3 className="text-xl font-semibold">Discovery Call</h3>
                  </div>
                  <p className="text-muted-foreground">
                    A detailed 30-60 minute conversation about your business goals, target audience, design preferences, functionality needs, and budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Proposal */}
            <div id="timeline-step-3" className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out">
              <div className="flex-1 md:pr-8 md:text-right">
                <div className="bg-card p-6 rounded-lg shadow-sm border md:ml-auto md:max-w-md hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h3 className="text-xl font-semibold">Custom Proposal</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We create a detailed proposal with project timeline, deliverables, pricing, and next steps tailored specifically to your requirements.
                  </p>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              <div className="flex-1 md:pl-8 hidden md:block"></div>
            </div>

            {/* Step 4: Design Phase */}
            <div id="timeline-step-4" className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out">
              <div className="flex-1 md:pr-8 hidden md:block"></div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              <div className="flex-1 md:pl-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border md:mr-auto md:max-w-md hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    <h3 className="text-xl font-semibold">Design & Mockups</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We create wireframes and visual designs for your approval. You'll see exactly how your website will look before development begins.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5: Development */}
            <div id="timeline-step-5" className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out">
              <div className="flex-1 md:pr-8 md:text-right">
                <div className="bg-card p-6 rounded-lg shadow-sm border md:ml-auto md:max-w-md hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">5</span>
                    </div>
                    <h3 className="text-xl font-semibold">Development</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Our team builds your website with regular progress updates. You'll receive preview links to see development in real-time.
                  </p>
                </div>
              </div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              <div className="flex-1 md:pl-8 hidden md:block"></div>
            </div>

            {/* Step 6: Launch & Support */}
            <div id="timeline-step-6" className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out">
              <div className="flex-1 md:pr-8 hidden md:block"></div>
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
              <div className="flex-1 md:pl-8">
                <div className="bg-card p-6 rounded-lg shadow-sm border md:mr-auto md:max-w-md hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold">6</span>
                    </div>
                    <h3 className="text-xl font-semibold">Launch & Support</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We deploy your website, provide training, and offer ongoing support to ensure your success. Your journey with us continues beyond launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours grow with custom web solutions.
          </p>
        </div>

        {/* Live Hero Page Previews */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Live Hero Page Previews</h3>
          <HeroPageSlideshow />
        </div>

        {/* Portfolio Projects */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Portfolio Case Studies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.slug} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted rounded-t-2xl overflow-hidden flex items-center justify-center">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-muted-foreground font-medium">${project.title}</div>`;
                      }
                    }}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{project.industry}</span>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
                  {project.impact.conversionLiftPct && (
                    <div className="flex items-center text-sm text-green-600 mb-4">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +{project.impact.conversionLiftPct}% conversion increase
                    </div>
                  )}
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to={`/work/${project.slug}`}>View Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/work">View All Projects</Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our clients say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners say about working with us.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-none bg-muted/30">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to grow your business online?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Let's create a website that works as hard as you do. 
            Get a free consultation and detailed quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild className="text-primary">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button size="xl" variant="secondary" asChild className="text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
