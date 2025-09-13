export interface Project {
  slug: string
  title: string
  subtitle: string
  year: number
  industry: string
  stack: string[]
  thumbnail: string
  gallery: string[]
  summary: string
  problem: string
  solution: string
  impact: {
    conversionLiftPct?: number
    loadTimeMs?: number
    trafficIncrease?: number
    revenue?: number
    [key: string]: number | undefined
  }
  url?: string
  repo?: string
  testimonials: Testimonial[]
  featured?: boolean
  complexity?: 'simple' | 'medium' | 'complex'
}

export interface Testimonial {
  author: string
  quote: string
  role?: string
  company?: string
  avatar?: string
  rating?: number
}



export interface Package {
  id: string
  name: string
  description: string
  basePrice: number
  features: string[]
  popular?: boolean
  complexity: 'simple' | 'medium' | 'complex'
  deliveryTime: string
  revisions: number
  support: string
}

export interface EstimatorFeature {
  id: string
  name: string
  description: string
  priceMultiplier: number
  category: 'content' | 'functionality' | 'design' | 'technical' | 'services'
  dependency?: string[]
}

export interface EstimatorConfig {
  basePackages: Package[]
  features: EstimatorFeature[]
  pageMultipliers: {
    [key: number]: number
  }
}

export interface QuoteFormData {
  // Business Info
  companyName: string
  contactName: string
  email: string
  phone?: string
  website?: string
  
  // Goals
  primaryGoal: string
  targetAudience: string
  timeline: string
  
  // Features
  selectedPackage?: string
  selectedFeatures: string[]
  pageCount: number
  
  // Budget
  budgetRange: string
  additionalNotes?: string
}

export interface Lead extends QuoteFormData {
  id: string
  createdAt: string
  estimatedPrice: {
    min: number
    max: number
    recommended: string
  }
  status: 'new' | 'contacted' | 'quoted' | 'converted' | 'lost'
}

export interface AnalyticsEvent {
  event: string
  category: string
  label?: string
  value?: number
}

export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  canonical?: string
  noindex?: boolean
}

export type FilterOption = {
  id: string
  label: string
  value: string | number
}