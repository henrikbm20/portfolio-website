import { Link } from 'react-router-dom'
import { TrendingUp } from 'lucide-react'
import { Section } from '@/components/ui/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { HeroPageSlideshow } from './HeroPageSlideshow'
import projectsData from '@/content/projects.json'
import { Project } from '@/types'

const projects = projectsData as Project[]
const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

export function ProjectsSection() {
  return (
    <Section className="bg-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float-1"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl animate-float-2"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Our Work
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          See how we've helped businesses like yours grow with custom web solutions.
        </p>
      </div>

      {/* Live Hero Page Previews */}
      <div className="mb-16 relative z-10">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Live Hero Page Previews</h3>
        <HeroPageSlideshow />
      </div>

      {/* Portfolio Projects */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Portfolio Case Studies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="group hover:shadow-xl transition-all duration-300 bg-slate-900/50 border-slate-700 hover:border-blue-500/30 hover:scale-105">
              <div className="aspect-video bg-slate-700 rounded-t-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-slate-300 font-medium">${project.title}</div>`
                    }
                  }}
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{project.industry}</span>
                  <span className="text-sm text-slate-400">{project.year}</span>
                </div>
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="text-slate-300">{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-400 mb-4">{project.summary}</p>
                {project.impact.conversionLiftPct && (
                  <div className="flex items-center text-sm text-green-400 mb-4">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +{project.impact.conversionLiftPct}% conversion increase
                  </div>
                )}
                <Button variant="outline" size="sm" asChild className="w-full border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:border-blue-500 hover:text-white transition-all duration-300">
                  <Link to={`/work/${project.slug}`}>View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="text-center mt-12 relative z-10">
        <Button variant="outline" size="lg" asChild className="border-slate-600 text-slate-300 hover:bg-blue-500/20 hover:border-blue-500 hover:text-white transition-all duration-300">
          <Link to="/work">View All Projects</Link>
        </Button>
      </div>
    </Section>
  )
}