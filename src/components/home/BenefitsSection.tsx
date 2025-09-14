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
  )
}