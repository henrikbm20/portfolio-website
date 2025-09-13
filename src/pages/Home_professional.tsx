import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, TrendingUp, Shield, Users, Zap } from 'lucide-react'
import { Hero, Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import projectsData from '@/content/projects.json'
import testimonialsData from '@/content/testimonials.json'
import { Project, Testimonial } from '@/types'
import { useEffect, useState } from 'react'

const projects = projectsData as Project[]
const testimonials = testimonialsData as Testimonial[]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Proven ROI',
    description: 'Our enterprise solutions deliver an average 340% increase in qualified leads and 65% improvement in conversion rates within the first quarter.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'ISO 27001 certified processes, bank-level encryption, GDPR compliance, and 99.9% uptime SLA with redundant infrastructure.'
  },
  {
    icon: Users,
    title: 'Fortune 500 Expertise',
    description: 'Trusted by industry leaders across Europe. Our team has delivered mission-critical solutions for companies with 10,000+ employees.'
  },
  {
    icon: Zap,
    title: 'Scalable Architecture',
    description: 'Future-proof development using enterprise-grade frameworks. Our solutions effortlessly handle 10x traffic growth and global expansion.'
  }
]

const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

// Typewriter Effect Component
function TypewriterText() {
  const words = ['scale', 'dominate', 'excel', 'transform', 'outperform', 'lead']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < word.length) {
          setCurrentText(word.substring(0, currentText.length + 1))
        } else {
          // Start deleting after a pause
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="text-cream-500 relative">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Professional Hero Image Component
function ProfessionalHeroImage() {
  const [scrollOffset, setScrollOffset] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setScrollOffset(prev => (prev + 1) % 200)
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative lg:col-span-1 flex justify-center lg:justify-end">
      {/* Floating background elements */}
      <div className="absolute -top-4 -right-4 w-32 h-32 bg-navy-200/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cream-200/30 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      {/* Main professional showcase */}
      <div className="relative bg-gradient-to-br from-navy-100/30 to-cream-50/20 rounded-lg p-4 lg:p-6 backdrop-blur-sm border border-navy-200/50 shadow-2xl max-w-lg">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
          {/* Professional browser chrome */}
          <div className="bg-gray-50 px-4 py-3 flex items-center gap-3 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors cursor-pointer"></div>
            </div>
            <div className="ml-2 bg-white rounded px-3 py-1.5 text-sm text-gray-600 flex-1 shadow-inner border border-gray-200 font-mono">
              enterprise-client.com
            </div>
            <div className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-400 rounded"></div>
            </div>
          </div>
          
          {/* Professional website content */}
          <div className="p-6 bg-gradient-to-br from-white via-navy-50/20 to-cream-50/10">
            <div className="space-y-6">
              {/* Enterprise Header */}
              <div className="space-y-3">
                <div className="h-5 bg-gradient-to-r from-navy-700 to-navy-800 rounded w-3/4 shadow-sm"></div>
                <div className="h-3 bg-navy-300 rounded w-4/5"></div>
                <div className="h-3 bg-navy-200 rounded w-2/3"></div>
              </div>
              
              {/* Premium CTA */}
              <div className="relative">
                <div className="h-12 bg-gradient-to-r from-navy-800 to-navy-900 rounded-lg w-48 flex items-center justify-center shadow-xl border border-navy-700">
                  <span className="text-white text-sm font-semibold tracking-wide">Request Consultation →</span>
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-navy-700 to-navy-800 rounded-lg blur opacity-30"></div>
              </div>
              
              {/* Enterprise metrics cards */}
              <div className="mt-6 overflow-hidden">
                <div 
                  className="flex gap-3 transition-transform duration-300 ease-out"
                  style={{ 
                    transform: `translateX(-${Math.min(scrollOffset, 120)}px)`,
                    width: 'calc(100% + 200px)'
                  }}
                >
                  <div className="h-16 bg-gradient-to-br from-navy-50 to-navy-100 rounded-lg border border-navy-200/70 p-3 flex-shrink-0 w-24 shadow-sm">
                    <div className="w-6 h-6 bg-navy-700 rounded mb-2"></div>
                    <div className="h-1.5 bg-navy-500 rounded w-4/5"></div>
                    <div className="h-1.5 bg-navy-400 rounded w-3/5 mt-1"></div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-cream-50 to-cream-100 rounded-lg border border-cream-200/70 p-3 flex-shrink-0 w-24 shadow-sm">
                    <div className="w-6 h-6 bg-cream-600 rounded mb-2"></div>
                    <div className="h-1.5 bg-cream-500 rounded w-4/5"></div>
                    <div className="h-1.5 bg-cream-400 rounded w-3/5 mt-1"></div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200/70 p-3 flex-shrink-0 w-24 shadow-sm">
                    <div className="w-6 h-6 bg-emerald-600 rounded mb-2"></div>
                    <div className="h-1.5 bg-emerald-500 rounded w-4/5"></div>
                    <div className="h-1.5 bg-emerald-400 rounded w-3/5 mt-1"></div>
                  </div>
                  <div className="h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200/70 p-3 flex-shrink-0 w-24 shadow-sm">
                    <div className="w-6 h-6 bg-blue-600 rounded mb-2"></div>
                    <div className="h-1.5 bg-blue-500 rounded w-4/5"></div>
                    <div className="h-1.5 bg-blue-400 rounded w-3/5 mt-1"></div>
                  </div>
                </div>
              </div>
              
              {/* Enterprise analytics dashboard */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-3 bg-navy-400 rounded w-1/3"></div>
                  <div className="h-3 bg-green-600 rounded w-1/4"></div>
                </div>
                <div className="flex gap-1 h-8 items-end">
                  <div className="bg-navy-500 rounded-sm flex-1" style={{ height: '35%' }}></div>
                  <div className="bg-navy-600 rounded-sm flex-1" style={{ height: '60%' }}></div>
                  <div className="bg-navy-700 rounded-sm flex-1" style={{ height: '80%' }}></div>
                  <div className="bg-cream-500 rounded-sm flex-1" style={{ height: '90%' }}></div>
                  <div className="bg-green-600 rounded-sm flex-1" style={{ height: '100%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero size="lg" className="relative bg-white overflow-hidden min-h-screen flex items-center pt-0 -mt-16">
        {/* Professional background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-50 via-white to-cream-50/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(15,23,42,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(245,158,11,0.03),transparent_50%)]"></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left side - Content */}
            <div className="space-y-8">
              
              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-navy-600">
                <div className="flex items-center gap-2 bg-navy-50 px-4 py-2 rounded-full border border-navy-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-cream-50 px-4 py-2 rounded-full border border-cream-200">
                  <Star className="w-4 h-4 text-cream-500 fill-current" />
                  <span className="font-medium">4.9/5 Enterprise Rating</span>
                </div>
              </div>
              
              {/* Main headline */}
              <div className="space-y-6">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
                  Enterprise websites
                  <span className="block">that help you</span>
                  <TypewriterText />
                </h1>
                
                <p className="text-xl text-navy-600 leading-relaxed max-w-xl">
                  We've delivered 500+ mission-critical websites for Fortune 1000 companies, 
                  generating over €50M in measurable client revenue since 2018.
                </p>
              </div>
              
              {/* Key differentiators */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700 font-medium">6-12 week enterprise delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700 font-medium">99.9% uptime SLA guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-navy-700 font-medium">24/7 white-glove support</span>
                </div>
              </div>
              
              {/* Call-to-action */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="xl" asChild className="bg-navy-800 text-cream-50 hover:bg-navy-900 text-lg px-8 py-4 shadow-xl">
                    <Link to="/quote" className="group inline-flex items-center">
                      Schedule Strategy Call
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild className="text-lg px-8 py-4 border-navy-300 text-navy-700 hover:bg-navy-50">
                    <Link to="/work">View Case Studies</Link>
                  </Button>
                </div>
                
                <p className="text-sm text-navy-500">
                  Starting at €25,000 • Fortune 500 experience • No upfront payment required
                </p>
              </div>
              
              {/* Social proof */}
              <div className="border-t border-navy-200 pt-6">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-serif font-bold text-navy-900">500+</div>
                    <div className="text-sm text-navy-600">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-navy-900">€50M+</div>
                    <div className="text-sm text-navy-600">Revenue Generated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-bold text-navy-900">7</div>
                    <div className="text-sm text-navy-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Professional Hero Image */}
            <ProfessionalHeroImage />
            
          </div>
        </div>
      </Hero>

      {/* Benefits Section */}
      <Section className="bg-cream-50/50 border-t border-navy-100">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-navy-900">
            Enterprise-Grade Solutions
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by Fortune 500 companies and high-growth startups across Europe. 
            Our proven methodology delivers measurable results that scale with your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center border border-navy-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 bg-navy-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-navy-700" />
                  </div>
                  <CardTitle className="text-xl text-navy-900 font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-navy-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Featured Projects */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-navy-900">
            Client Success Stories
          </h2>
          <p className="text-lg text-navy-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover how we've helped industry leaders transform their digital presence 
            and achieve remarkable growth through strategic web development.
          </p>
          <Button variant="outline" asChild className="border-navy-300 text-navy-700 hover:bg-navy-50">
            <Link to="/work">View All Case Studies</Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 border border-navy-200 bg-white">
              <div className="aspect-video bg-navy-50 rounded-t-lg overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-navy-700 font-semibold text-lg mb-2">{project.title}</div>
                    <div className="text-navy-500 text-sm">{project.industry}</div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-navy-700">
                  {project.year}
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-cream-500 bg-cream-50 px-2 py-1 rounded">{project.industry}</span>
                  {project.impact.conversionLiftPct && (
                    <div className="flex items-center text-sm text-green-600 font-semibold">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      +{project.impact.conversionLiftPct}%
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl text-navy-900 font-semibold">{project.title}</CardTitle>
                <CardDescription className="text-navy-600">{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-navy-600 mb-4 leading-relaxed">{project.summary}</p>
                <Button variant="outline" size="sm" asChild className="w-full border-navy-300 text-navy-700 hover:bg-navy-50">
                  <Link to={`/work/${project.slug}`}>View Case Study →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-cream-50/50 border-y border-navy-100">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-navy-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about our work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="border border-navy-200 shadow-sm bg-white">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-cream-500 text-cream-500" />
                    ))}
                  </div>
                  <blockquote className="text-navy-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-navy-100 pt-4">
                  <cite className="font-semibold text-navy-900 not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-navy-600">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-navy-800 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-navy-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Enterprise Solutions Available</span>
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-navy-200 mb-8 leading-relaxed">
            Join the ranks of Fortune 500 companies who trust us with their most critical digital initiatives. 
            Let's discuss how we can accelerate your growth with a world-class web solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="xl" asChild className="bg-cream-500 text-navy-900 hover:bg-cream-400 shadow-xl">
              <Link to="/quote" className="group inline-flex items-center">
                Schedule Strategy Session
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-navy-400 text-navy-200 hover:bg-navy-700">
              <Link to="/contact">Download Case Studies</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center text-sm text-navy-300">
            <div>
              <div className="text-2xl font-bold text-cream-400 mb-1">500+</div>
              <div>Enterprises Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cream-400 mb-1">€50M+</div>
              <div>Client Revenue Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-cream-400 mb-1">99.9%</div>
              <div>Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}