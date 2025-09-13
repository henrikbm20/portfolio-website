import { EstimatorConfig, EstimatorFeature, Package } from '@/types'
import packagesData from '@/content/packages.json'

const packages = packagesData as Package[]

export const estimatorFeatures: EstimatorFeature[] = [
  // Content Features
  {
    id: 'cms',
    name: 'Content Management System',
    description: 'Easy-to-use admin panel for updating content',
    priceMultiplier: 1.3,
    category: 'content'
  },
  {
    id: 'blog',
    name: 'Blog/News System',
    description: 'Fully featured blog with categories and comments',
    priceMultiplier: 1.2,
    category: 'content'
  },
  {
    id: 'multilingual',
    name: 'Multi-language Support',
    description: 'Support for multiple languages with easy switching',
    priceMultiplier: 1.4,
    category: 'content'
  },
  {
    id: 'copywriting',
    name: 'Professional Copywriting',
    description: 'SEO-optimized content writing for all pages',
    priceMultiplier: 1.25,
    category: 'content'
  },

  // Functionality Features
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    description: 'Full online store with payment processing',
    priceMultiplier: 1.8,
    category: 'functionality'
  },
  {
    id: 'booking',
    name: 'Booking/Appointment System',
    description: 'Online booking with calendar integration',
    priceMultiplier: 1.5,
    category: 'functionality'
  },
  {
    id: 'user-accounts',
    name: 'User Accounts & Login',
    description: 'Customer registration and account management',
    priceMultiplier: 1.4,
    category: 'functionality'
  },
  {
    id: 'live-chat',
    name: 'Live Chat Integration',
    description: 'Real-time customer support chat',
    priceMultiplier: 1.1,
    category: 'functionality'
  },
  {
    id: 'forms',
    name: 'Advanced Forms',
    description: 'Custom forms with conditional logic',
    priceMultiplier: 1.15,
    category: 'functionality'
  },

  // Design Features
  {
    id: 'custom-design',
    name: 'Custom Design & Branding',
    description: 'Unique design tailored to your brand',
    priceMultiplier: 1.3,
    category: 'design'
  },
  {
    id: 'animations',
    name: 'Advanced Animations',
    description: 'Custom animations and micro-interactions',
    priceMultiplier: 1.2,
    category: 'design'
  },
  {
    id: 'video-bg',
    name: 'Video Backgrounds',
    description: 'Professional video backgrounds and headers',
    priceMultiplier: 1.1,
    category: 'design'
  },

  // Technical Features
  {
    id: 'api-integration',
    name: 'API Integrations',
    description: 'Connect with external services and tools',
    priceMultiplier: 1.4,
    category: 'technical'
  },
  {
    id: 'database',
    name: 'Custom Database',
    description: 'Custom database design and management',
    priceMultiplier: 1.6,
    category: 'technical'
  },
  {
    id: 'pwa',
    name: 'Progressive Web App',
    description: 'App-like experience with offline functionality',
    priceMultiplier: 1.3,
    category: 'technical'
  },
  {
    id: 'advanced-seo',
    name: 'Advanced SEO Package',
    description: 'Comprehensive SEO optimization and strategy',
    priceMultiplier: 1.2,
    category: 'technical'
  },

  // Services
  {
    id: 'maintenance',
    name: 'Extended Maintenance (12 months)',
    description: 'One year of updates, backups, and support',
    priceMultiplier: 1.15,
    category: 'services'
  },
  {
    id: 'training',
    name: 'Team Training Sessions',
    description: 'Hands-on training for your team',
    priceMultiplier: 1.1,
    category: 'services'
  },
  {
    id: 'migration',
    name: 'Data Migration',
    description: 'Transfer existing content and data',
    priceMultiplier: 1.2,
    category: 'services'
  }
]

export const pageMultipliers: { [key: number]: number } = {
  1: 0.8,
  5: 1.0,
  10: 1.2,
  15: 1.4,
  20: 1.6,
  30: 1.8,
  50: 2.2
}

export const estimatorConfig: EstimatorConfig = {
  basePackages: packages,
  features: estimatorFeatures,
  pageMultipliers
}

export const calculateEstimate = (
  packageId: string,
  selectedFeatures: string[],
  pageCount: number
): { min: number; max: number; recommended: string } => {
  const basePackage = packages.find(p => p.id === packageId)
  if (!basePackage) {
    return { min: 0, max: 0, recommended: 'starter' }
  }

  let basePrice = basePackage.basePrice

  // Apply page multiplier
  const pageMultiplier = getPageMultiplier(pageCount)
  basePrice *= pageMultiplier

  // Apply feature multipliers
  let featureMultiplier = 1
  selectedFeatures.forEach(featureId => {
    const feature = estimatorFeatures.find(f => f.id === featureId)
    if (feature) {
      featureMultiplier *= feature.priceMultiplier
    }
  })

  const estimatedPrice = basePrice * featureMultiplier

  // Add 15% variance for min/max range
  const min = Math.round(estimatedPrice * 0.85)
  const max = Math.round(estimatedPrice * 1.15)

  // Recommend package based on features
  let recommended = packageId
  if (selectedFeatures.includes('ecommerce')) {
    recommended = 'ecommerce'
  } else if (selectedFeatures.length > 5 || selectedFeatures.includes('api-integration') || selectedFeatures.includes('database')) {
    recommended = 'custom'
  } else if (selectedFeatures.length > 2) {
    recommended = 'business'
  }

  return { min, max, recommended }
}

const getPageMultiplier = (pageCount: number): number => {
  const entries = Object.entries(pageMultipliers)
    .map(([pages, multiplier]) => [parseInt(pages), multiplier])
    .sort(([a], [b]) => a - b)

  for (let i = 0; i < entries.length; i++) {
    const [pages, multiplier] = entries[i]
    if (pageCount <= pages) {
      return multiplier
    }
  }

  // If page count exceeds all defined ranges, use the highest multiplier + additional scaling
  const highestMultiplier = entries[entries.length - 1][1]
  const highestPageCount = entries[entries.length - 1][0]
  const additionalPages = pageCount - highestPageCount
  return highestMultiplier + (additionalPages * 0.02) // 2% per additional page
}