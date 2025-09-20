import { Star } from 'lucide-react'
import { Section } from '@/components/ui/layout'
import { Card, CardContent } from '@/components/ui/card'
import testimonialsData from '@/content/testimonials.json'
import { Testimonial } from '@/types'

const testimonials = testimonialsData as Testimonial[]

export function TestimonialsSection() {
  return (
    <Section className="bg-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-morph-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-morph-2"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          What our clients say
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what business owners say about working with us.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonials.slice(0, 6).map((testimonial, index) => (
          <Card key={index} className="border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
            <CardContent className="pt-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-slate-300 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}