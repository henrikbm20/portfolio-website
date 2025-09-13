import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  container?: boolean
  padding?: boolean
}

export function Section({ 
  children, 
  className, 
  container = true, 
  padding = true, 
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn(
        padding && "section-padding",
        className
      )} 
      {...props}
    >
      {container ? (
        <div className="container">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  )
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({ 
  children, 
  className, 
  size = 'lg',
  ...props 
}: ContainerProps) {
  let sizeClass = 'max-w-7xl'
  if (size === 'sm') sizeClass = 'max-w-3xl'
  if (size === 'md') sizeClass = 'max-w-4xl' 
  if (size === 'lg') sizeClass = 'max-w-7xl'
  if (size === 'xl') sizeClass = 'max-w-8xl'
  if (size === 'full') sizeClass = 'max-w-none'

  return (
    <div 
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeClass,
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

interface HeroProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Hero({ 
  children, 
  className, 
  size = 'lg',
  ...props 
}: HeroProps) {
  let sizeClass = 'pt-32 pb-24'
  if (size === 'sm') sizeClass = 'pt-20 pb-16'
  if (size === 'md') sizeClass = 'pt-24 pb-20'
  if (size === 'lg') sizeClass = 'pt-32 pb-24'

  return (
    <section 
      className={cn(
        "relative overflow-hidden",
        sizeClass,
        className
      )} 
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  )
}