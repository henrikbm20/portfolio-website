import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float-1"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-slate-700/20 rounded-full blur-3xl animate-morph-1"></div>
      </div>
      
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Ready to grow your business online?
        </h2>
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Let's create a website that works as hard as you do. 
          Get a free consultation and detailed quote today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            <Link to="/quote">Get Free Quote</Link>
          </Button>
          <Button size="xl" variant="outline" asChild className="border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:border-blue-500 hover:text-white transition-all duration-300 hover:scale-105">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}