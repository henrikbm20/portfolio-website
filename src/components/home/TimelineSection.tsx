import { useEffect } from 'react'
import { Section } from '@/components/ui/layout'

const timelineSteps = [
  {
    id: 1,
    title: 'Initial Contact',
    description: 'Reach out through our website, email, or phone. We respond within 24 hours to acknowledge your inquiry and schedule our first conversation.',
    side: 'right'
  },
  {
    id: 2,
    title: 'Discovery Call',
    description: 'A detailed 30-60 minute conversation about your business goals, target audience, design preferences, functionality needs, and budget.',
    side: 'left'
  },
  {
    id: 3,
    title: 'Custom Proposal',
    description: 'We create a detailed proposal with project timeline, deliverables, pricing, and next steps tailored specifically to your requirements.',
    side: 'right'
  },
  {
    id: 4,
    title: 'Design & Mockups',
    description: 'We create wireframes and visual designs for your approval. You\'ll see exactly how your website will look before development begins.',
    side: 'left'
  },
  {
    id: 5,
    title: 'Development',
    description: 'Our team builds your website with regular progress updates. You\'ll receive preview links to see development in real-time.',
    side: 'right'
  },
  {
    id: 6,
    title: 'Launch & Support',
    description: 'We deploy your website, provide training, and offer ongoing support to ensure your success. Your journey with us continues beyond launch.',
    side: 'left'
  }
]

export function TimelineSection() {
  useEffect(() => {
    const updateTimelineProgress = () => {
      const timelineSection = document.getElementById('timeline-section')
      const progressBar = document.getElementById('timeline-progress')
      
      if (!timelineSection || !progressBar) return

      const sectionRect = timelineSection.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      
      // Calculate how much of the timeline section is visible
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height
      const sectionBottom = sectionRect.bottom
      
      // Start progress when section enters viewport
      const startProgress = viewportHeight * 0.6 // Start when 60% down the viewport (was 80%)
      const endProgress = viewportHeight * 0.1   // Complete when 10% from top (was 20%)
      
      let progress = 0
      
      if (sectionTop <= startProgress && sectionBottom >= endProgress) {
        // Calculate progress based on scroll position within the section
        const visibleTop = Math.max(0, startProgress - sectionTop)
        const scrollableHeight = sectionHeight - (startProgress - endProgress)
        
        // Apply delay curve to make progress fill more gradually
        const rawProgress = Math.min(100, Math.max(0, (visibleTop / scrollableHeight) * 100))
        progress = Math.pow(rawProgress / 100, 1.5) * 100 // Exponential curve for more delay
      } else if (sectionBottom < endProgress) {
        // Section has passed completely
        progress = 100
      }
      
      // Update progress bar
      progressBar.style.height = `${progress}%`
      
      // Update step visibility with more precise timing
      timelineSteps.forEach((_, index) => {
        const stepElement = document.getElementById(`timeline-step-${index + 1}`)
        if (!stepElement) return
        
        const stepProgress = ((index + 1) / timelineSteps.length) * 100
        const shouldBeVisible = progress >= stepProgress - 15 // Show step when progress is within 15% of its position
        
        if (shouldBeVisible) {
          stepElement.style.opacity = '1'
          stepElement.style.transform = 'translateY(0)'
        } else {
          stepElement.style.opacity = '0'
          stepElement.style.transform = 'translateY(20px)'
        }
      })
    }

    // Initial calculation
    updateTimelineProgress()
    
    // Update on scroll with throttling for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateTimelineProgress()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateTimelineProgress)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateTimelineProgress)
    }
  }, [])

  return (
    <Section id="timeline-section" className="relative bg-background py-16 sm:py-20 lg:py-24">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
          Your Website Journey
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          From first contact to live website - every step of your journey with us
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {/* Timeline Progress Line */}
        <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-border">
          <div 
            id="timeline-progress"
            className="w-full bg-gradient-to-b from-primary to-primary/60 transition-all duration-1000 ease-out"
            style={{ height: '0%' }}
          />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-12 sm:space-y-16">
          {timelineSteps.map((step) => (
            <div 
              key={step.id}
              id={`timeline-step-${step.id}`} 
              className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out"
            >
              {/* Mobile Layout - Always left aligned */}
              <div className="md:hidden w-full">
                <div className="flex items-start gap-4">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-2 border-background shadow-lg z-10 relative"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="bg-card p-4 sm:p-5 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold text-sm sm:text-base">{step.id}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Layout - Alternating sides */}
              {step.side === 'right' ? (
                <div className="hidden md:flex w-full items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <div className="bg-card p-6 rounded-lg shadow-sm border md:ml-auto md:max-w-md hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3 md:flex-row-reverse">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{step.id}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              ) : (
                <div className="hidden md:flex w-full items-center">
                  <div className="flex-1 md:pr-8"></div>
                  <div className="absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="flex-1 md:pl-8">
                    <div className="bg-card p-6 rounded-lg shadow-sm border md:mr-auto md:max-w-md hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-bold">{step.id}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}