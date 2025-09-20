import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/ui/button'

function ContactForm() {
  const [state, handleSubmit] = useForm("xkgvavpj")
  
  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-green-900/50 border border-green-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">Thank You!</h2>
          <p className="text-green-300">
            Your message has been sent successfully. We'll get back to you soon!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full px-4 py-2.5 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-slate-800 text-white placeholder-slate-400"
              placeholder="Your full name"
              required
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className="w-full px-4 py-2.5 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-slate-800 text-white placeholder-slate-400"
              placeholder="your.email@example.com"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-1">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="w-full px-4 py-2.5 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-slate-800 text-white placeholder-slate-400"
            placeholder="What's this about?"
            required
          />
          <ValidationError 
            prefix="Subject" 
            field="subject"
            errors={state.errors}
            className="text-red-400 text-sm mt-1"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
            placeholder="Tell us about your project or ask us a question..."
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-1"
          />
        </div>

        <Button 
          type="submit" 
          disabled={state.submitting}
          size="lg"
          className="w-full"
        >
          {state.submitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>
  )
}

export function Contact() {
  return (
    <div className="min-h-screen pt-32 bg-slate-900">
      <div className="container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
            <p className="text-lg text-slate-300">
              Ready to start your project? Get in touch and let's discuss your requirements.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-700">
                      <span className="text-blue-400 text-sm">@</span>
                    </div>
                    <span className="text-slate-300">kontakt@ghmk.dk	</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-700">
                      <span className="text-blue-400 text-sm">📞</span>
                    </div>
                    <span className="text-slate-300">31633643</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-700">
                      <span className="text-blue-400 text-sm">📍</span>
                    </div>
                    <span className="text-slate-300">Copenhagen, Denmark</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Office Hours</h3>
                <div className="text-slate-400 space-y-1 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Response Time</h3>
                <p className="text-slate-400 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}