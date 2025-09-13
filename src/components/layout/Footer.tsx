import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const footerNavigation = {
  services: [
    { name: 'Web Development', href: '/work' },
    { name: 'E-commerce', href: '/pricing' },
    { name: 'SEO Optimization', href: '/pricing' },
    { name: 'Maintenance', href: '/pricing' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/work' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '/work' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Get Quote', href: '/quote' },
  ],
}

const socialLinks = [
  { name: 'Github', href: '#', icon: Github },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
]

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl">Dequ</span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Creating beautiful, fast, and SEO-ready websites that convert visitors into customers. 
              Based in Denmark, serving clients worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2" />
                hello@webcraft.dk
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                +45 12 34 56 78
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                Copenhagen, Denmark
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} WebCraft. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}