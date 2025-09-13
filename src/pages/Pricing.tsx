import { Check } from 'lucide-react'
import { Hero, Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PrimaryCTA } from '@/components/ui/primary-cta'
import packagesData from '@/content/packages.json'
import { Package } from '@/types'
import { formatPrice } from '@/lib/utils'

const packages = packagesData as Package[]

export function Pricing() {
  return (
    <>
      <Hero size="md" className="pt-24">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Choose the perfect package for your business. No hidden fees, no surprises.
            All packages include responsive design, SEO optimization, and ongoing support.
          </p>
        </div>
      </Hero>

      <Section>
        <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{formatPrice(pkg.basePrice)}</span>
                  <span className="text-muted-foreground ml-2">starting from</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  {pkg.deliveryTime} delivery • {pkg.revisions === -1 ? 'Unlimited' : pkg.revisions} revisions
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <PrimaryCTA 
                    href="/quote" 
                    variant={pkg.popular ? 'default' : 'outline'}
                    className="w-full"
                  >
                    Get Started
                  </PrimaryCTA>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Need something custom? We create tailored solutions for unique requirements.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/contact">Contact us for custom pricing</a>
          </Button>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center py-12">
            <p className="text-muted-foreground">FAQ section coming soon...</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get a detailed quote tailored to your specific needs. 
            Our team will help you choose the right package and features.
          </p>
          <PrimaryCTA href="/quote" size="xl">
            Get Your Free Quote
          </PrimaryCTA>
        </div>
      </Section>
    </>
  )
}