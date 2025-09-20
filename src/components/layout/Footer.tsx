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
    <footer className="bg-slate-900 border-t border-slate-700 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">dequ.dk</span>
            </Link>
            <p className="text-slate-400 mb-4 text-sm leading-relaxed">
              Creating beautiful, fast, and SEO-ready websites that convert visitors into customers. 
              Based in Denmark, serving clients worldwide.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                kontakt@ghmk.dk
              </div>
              <div className="flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +45 31 63 36 43
              </div>
              <div className="flex items-center text-sm text-slate-400 hover:text-blue-400 transition-colors">
                <MapPin className="h-4 w-4 mr-2" />
                Copenhagen, Denmark
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400"> 
            © {new Date().getFullYear()} Dequ. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300 hover:scale-110"
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