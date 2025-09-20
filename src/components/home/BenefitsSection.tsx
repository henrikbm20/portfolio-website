import { TrendingUp, CheckCircle, Star, ArrowRight } from 'lucide-react'
import { Section } from '@/components/ui/layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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

export function BenefitsSection() {
  return (
    <Section id="benefits-section" className="relative bg-slate-900 text-white py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-morph-1"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-morph-2"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Why choose Dequ?
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          We create websites that not only look amazing but also drive real business results.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <Card key={index} className="text-center border border-slate-700 shadow-lg bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/10">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-slate-300">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}