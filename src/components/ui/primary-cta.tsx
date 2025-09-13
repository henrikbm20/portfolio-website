import { ButtonHTMLAttributes, forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PrimaryCTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  variant?: 'default' | 'outline' | 'secondary'
  size?: 'default' | 'sm' | 'lg' | 'xl'
  children: React.ReactNode
}

export const PrimaryCTA = forwardRef<HTMLButtonElement, PrimaryCTAProps>(
  ({ href, variant = 'default', size = 'lg', className, children, ...props }, ref) => {
    const baseClasses = cn(
      "font-semibold transition-all duration-200 transform hover:scale-105 focus:scale-105",
      className
    )

    if (href) {
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return (
          <a href={href} className={baseClasses}>
            <Button variant={variant} size={size} className="w-full">
              {children}
            </Button>
          </a>
        )
      }
      
      return (
        <Link to={href} className={baseClasses}>
          <Button variant={variant} size={size} className="w-full">
            {children}
          </Button>
        </Link>
      )
    }

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={baseClasses}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

PrimaryCTA.displayName = 'PrimaryCTA'