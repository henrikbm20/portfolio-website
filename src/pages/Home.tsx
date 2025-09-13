import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { Hero, Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import projectsData from '@/content/projects.json'
import testimonialsData from '@/content/testimonials.json'
import { Project, Testimonial } from '@/types'
import { useState, useEffect } from 'react'

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
  return (
    <>
      {/* Hero Section */}
      <Hero size="lg" className="relative bg-gradient-to-br from-primary/5 via-background to-primary/10 overflow-hidden min-h-screen flex items-center pt-0 -mt-16 pt-16 grid-background">
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
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start animate-fade-in delay-300" style={{ gap: '25px' }}>
                <Button size="xl" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4">
                  <Link to="/quote" className="group inline-flex items-center">
                    Get a Quote
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild className="text-lg px-8 py-4">
                  <Link to="/work">See Our Work</Link>
                </Button>
              </div>
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
            <div className="relative order-1 lg:order-2 animate-fade-in delay-500 flex items-center justify-center mb-8 lg:mb-0" style={{marginTop: '-100px'}}>
              <InteractiveBrowserMockup />
            </div>
          </div>
        </div>
      </Hero>

      {/* Benefits Section */}
      <Section className="relative -mt-16 pt-24">{/* Smooth overlap transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose our web development?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We create websites that not only look amazing but also drive real business results.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center border-0 shadow-none">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
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