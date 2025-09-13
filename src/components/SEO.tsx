import { Helmet } from 'react-helmet-async'
import { SEOData } from '@/types'

interface SEOProps extends SEOData {
  children?: React.ReactNode
}

export function SEO({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  canonical,
  noindex = false,
  children
}: SEOProps) {
  const siteUrl = 'https://webcraft.dk' // Replace with your actual domain
  const defaultTitle = 'WebCraft - Custom Websites That Convert'
  const fullTitle = title ? `${title} | WebCraft` : defaultTitle
  const defaultDescription = 'Beautiful, fast, SEO-ready websites delivered on time. Turn your visitors into customers with a website that works as hard as you do.'
  const metaDescription = description || defaultDescription
  
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="WebCraft" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="WebCraft" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "WebCraft",
          "description": defaultDescription,
          "url": siteUrl,
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
      
      {children}
    </Helmet>
  )
}

// Pre-configured SEO components for common pages
export function HomeSEO() {
  return (
    <SEO
      title="Custom Websites That Convert"
      description="Beautiful, fast, SEO-ready websites delivered on time. Professional web development services in Denmark. Get a free quote today."
      keywords={['web development', 'website design', 'SEO', 'Denmark', 'Copenhagen', 'responsive design', 'e-commerce']}
      canonical="/"
    />
  )
}

export function WorkSEO() {
  return (
    <SEO
      title="Our Work - Web Development Portfolio"
      description="Explore our portfolio of successful web projects. See case studies and results from our custom website development work."
      keywords={['portfolio', 'web development', 'case studies', 'website examples']}
      canonical="/work"
    />
  )
}

export function PricingSEO() {
  return (
    <SEO
      title="Web Development Pricing - Transparent Packages"
      description="Simple, transparent pricing for web development services. Choose from starter, business, e-commerce, or custom packages. No hidden fees."
      keywords={['web development pricing', 'website cost', 'Denmark web development', 'affordable websites']}
      canonical="/pricing"
    />
  )
}

export function AboutSEO() {
  return (
    <SEO
      title="About WebCraft - Professional Web Development"
      description="Learn about our web development team based in Copenhagen, Denmark. We create websites that drive real business results."
      keywords={['about', 'web development team', 'Copenhagen', 'Denmark', 'professional web design']}
      canonical="/about"
    />
  )
}

export function ContactSEO() {
  return (
    <SEO
      title="Contact Us - Get Your Free Web Development Quote"
      description="Ready to start your web project? Contact our team for a free consultation and detailed quote. Based in Copenhagen, Denmark."
      keywords={['contact', 'web development quote', 'free consultation', 'Copenhagen web developer']}
      canonical="/contact"
    />
  )
}