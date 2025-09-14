import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
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
  )
}