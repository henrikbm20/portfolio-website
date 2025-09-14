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
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          element.style.opacity = '1'
          element.style.transform = 'translateY(0)'
          
          // Progress bar animation
          if (element.id.includes('timeline-step')) {
            const stepNumber = parseInt(element.id.split('-')[2])
            const progressBar = document.getElementById('timeline-progress')
            if (progressBar) {
              const progress = (stepNumber / timelineSteps.length) * 100
              progressBar.style.height = `${progress}%`
            }
          }
        }
      })
    }, observerOptions)

    // Observe all timeline steps
    timelineSteps.forEach((_, index) => {
      const element = document.getElementById(`timeline-step-${index + 1}`)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
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
          {timelineSteps.map((step) => (
            <div 
              key={step.id}
              id={`timeline-step-${step.id}`} 
              className="relative flex items-center opacity-0 translate-y-10 transition-all duration-800 ease-out"
            >
              {step.side === 'right' ? (
                <>
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
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  <div className="flex-1 md:pl-8 hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="flex-1 md:pr-8 hidden md:block"></div>
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}