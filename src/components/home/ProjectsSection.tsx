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
    <Section className="bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Work
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See how we've helped businesses like yours grow with custom web solutions.
        </p>
      </div>

      {/* Live Hero Page Previews */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8">Live Hero Page Previews</h3>
        <HeroPageSlideshow />
      </div>

      {/* Portfolio Projects */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8">Portfolio Case Studies</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-2xl overflow-hidden flex items-center justify-center">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-muted-foreground font-medium">${project.title}</div>`
                    }
                  }}
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.industry}</span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.summary}</p>
                {project.impact.conversionLiftPct && (
                  <div className="flex items-center text-sm text-green-600 mb-4">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +{project.impact.conversionLiftPct}% conversion increase
                  </div>
                )}
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to={`/work/${project.slug}`}>View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link to="/work">View All Projects</Link>
        </Button>
      </div>
    </Section>
  )
}