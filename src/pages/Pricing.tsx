
import { Check, Info, HelpCircle, ShieldCheck, Zap } from 'lucide-react'
import { Hero, Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PrimaryCTA } from '@/components/ui/primary-cta'
import packagesData from '@/content/packages.json'
import { formatPrice } from '@/lib/utils'
import { useState } from 'react'

const packages = packagesData;

export function Pricing() {
  return (
    <>
  <Hero size="md" className="min-h-[25vh] flex items-center justify-center pt-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the perfect package for your business. No hidden fees, no surprises.
            All packages include responsive design, SEO optimization, and ongoing support.
          </p>
        </div>
      </Hero>

      <Section className="min-h-[70vh] flex items-start justify-center pt-1 pb-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start w-full">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative overflow-visible group transition-all duration-300 border-2 pt-8 ${pkg.popular ? 'border-primary shadow-xl scale-105 bg-gradient-to-br from-primary/10 to-background' : 'border-border bg-card'} hover:scale-105`}
            >
              {pkg.popular && (
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 z-[60] w-full flex justify-center pointer-events-none">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Zap className="inline w-4 h-4 mr-1 -mt-1" /> Most Popular
                  </span>
                </div>
              )}
              <div className={`absolute inset-0 pointer-events-none z-10 ${pkg.popular ? 'bg-gradient-to-br from-primary/10 to-transparent' : ''}`}></div>
              <CardHeader className="text-center relative z-20">
                <CardTitle className="text-3xl font-bold tracking-tight mb-8 flex items-center justify-center gap-2">
                  {pkg.name}
                  {pkg.complexity === 'simple' && <Info className="w-5 h-5 text-blue-400" />}
                  {pkg.complexity === 'medium' && <ShieldCheck className="w-5 h-5 text-green-500" />}
                  {pkg.complexity === 'complex' && <HelpCircle className="w-5 h-5 text-purple-500" />}
                </CardTitle>
                <CardDescription className="text-base mb-2 min-h-[48px]">{pkg.description}</CardDescription>
                <div className="mt-2 mb-2">
                  <span className="text-4xl font-extrabold text-primary drop-shadow-sm">{formatPrice(pkg.basePrice)}</span>
                  <span className="text-muted-foreground ml-2 text-base">start</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">
                  {pkg.deliveryTime} delivery • {pkg.revisions === -1 ? 'Unlimited' : pkg.revisions} revisions
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative z-20">
                <ul className="space-y-3 text-left">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
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

      {/* FAQ Section with Tabs */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers.
          </p>
        </div>
        <FAQTabs />
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
  );
}

// FAQTabs component (moved outside Pricing)
function FAQTabs() {
  const tabs = [
    {
      label: 'One-pager',
      faqs: [
        {
          q: 'Who is a one-pager for?',
          a: 'Perfect for personal brands, portfolios, or simple blogs. Great if you just need to get your info and contact online quickly.'
        },
        {
          q: 'What does the one-pager include?',
          a: 'A single scrolling page, mobile-friendly design, contact form or email link, basic SEO, and social media links.'
        },
        {
          q: 'How fast can I get it?',
          a: 'Usually delivered within 1 week.'
        },
      ]
    },
    {
      label: 'Small Website',
      faqs: [
        {
          q: 'Who is a small website for?',
          a: 'Ideal for small businesses, creators, or anyone who needs more than a landing page but not a huge site.'
        },
        {
          q: 'What does the small website include?',
          a: 'Up to 6 pages, custom design, contact & quote forms, blog or news section, SEO, analytics, and social media integration.'
        },
        {
          q: 'How long does it take?',
          a: 'Usually delivered within 2 weeks.'
        },
      ]
    },
    {
      label: 'Big Website',
      faqs: [
        {
          q: 'Who is a big website for?',
          a: 'For businesses or organizations that need advanced features, integrations, or a large site.'
        },
        {
          q: 'What does the big website include?',
          a: 'Up to 20 pages, advanced design, custom forms & systems, e-commerce or booking, API integrations, and more.'
        },
        {
          q: 'How long does it take?',
          a: 'Usually delivered within 3 weeks.'
        },
      ]
    },
    {
      label: 'Process',
      faqs: [
        {
          q: 'How long does it take to build my website?',
          a: 'Delivery time depends on the package and your requirements. See the delivery time listed above for each package.'
        },
        {
          q: 'What is your design process?',
          a: 'We start with a consultation, then move to design, development, and launch. You are involved at every step.'
        },
        {
          q: 'Do you offer support after launch?',
          a: 'Yes, all packages include support. The duration depends on your package.'
        },
      ]
    },
    {
      label: 'Payment',
      faqs: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept bank transfer, credit card, and MobilePay.'
        },
        {
          q: 'Is there a payment plan?',
          a: 'For larger projects, we can arrange a payment plan. Contact us for details.'
        },
        {
          q: 'Are there any hidden fees?',
          a: 'No. All costs are clearly outlined before you commit.'
        },
      ]
    }
  ];
  const [active, setActive] = useState(0);
  return (
    <div className="max-w-3xl mx-auto">
  <div className="flex flex-wrap justify-center gap-2 mb-8">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 border-2 focus:outline-none text-base ${active === i ? 'bg-primary text-primary-foreground border-primary shadow' : 'bg-background text-foreground border-border hover:bg-muted'}`}
            onClick={() => setActive(i)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="bg-card/80 rounded-2xl shadow p-6">
        {tabs[active].faqs.map((faq, idx) => (
          <div key={faq.q} className={`mb-6 ${idx !== tabs[active].faqs.length - 1 ? 'border-b border-muted pb-6' : ''}`}>
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="font-semibold text-lg">{faq.q}</span>
            </div>
            <p className="text-muted-foreground text-base pl-7">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}