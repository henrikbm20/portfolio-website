# WebCraft Portfolio Website

A production-ready React portfolio website designed to convert visitors into leads for custom website builds. Built with modern tools and optimized for performance, SEO, and user experience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🛠 Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router v6
- **SEO**: react-helmet-async
- **Forms**: React Hook Form + Zod validation
- **Animation**: Framer Motion
- **Email**: EmailJS integration ready
- **State Management**: Built-in React hooks

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, etc.)
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── SEO.tsx         # SEO component with meta tags
├── pages/              # Route components
├── content/            # Static content files (JSON)
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config

public/
├── images/             # Static images (projects, testimonials)
├── robots.txt          # Search engine crawler instructions
└── sitemap.xml         # Site structure for SEO
```

## 🎨 Features

### Core Functionality
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with meta tags and structured data
- ✅ Fast loading with Vite and optimized assets
- ✅ Type-safe with TypeScript
- ✅ Accessible UI components
- ✅ Dark/light mode support

### Business Features
- ✅ Lead-focused homepage with clear CTAs
- ✅ Portfolio showcase with case studies
- ✅ Transparent pricing packages
- ✅ Quote form with price estimation
- ✅ Client testimonials carousel
- ✅ FAQ section
- ✅ Contact forms with validation

### Technical Features
- ✅ Component-based architecture
- ✅ Git-friendly content management
- ✅ Analytics hooks (ready for GA4/Meta Pixel)
- ✅ Email integration setup
- ✅ Performance optimized
- ✅ Production ready

## 📝 Content Management

### Adding a New Project

1. Add project images to `/public/images/projects/`:
   - `project-slug-thumb.jpg` (thumbnail, 800x450px)
   - `project-slug-1.jpg`, `project-slug-2.jpg`, etc. (gallery images)

2. Add project data to `/src/content/projects.json`:

```json
{
  "slug": "project-slug",
  "title": "Project Title",
  "subtitle": "Short description",
  "year": 2024,
  "industry": "Industry Name",
  "stack": ["React", "Tailwind CSS", "Node.js"],
  "thumbnail": "/images/projects/project-slug-thumb.jpg",
  "gallery": [
    "/images/projects/project-slug-1.jpg",
    "/images/projects/project-slug-2.jpg"
  ],
  "summary": "Brief project summary for cards",
  "problem": "What problem did this solve?",
  "solution": "How did you solve it?",
  "impact": {
    "conversionLiftPct": 45,
    "loadTimeMs": 800,
    "trafficIncrease": 60
  },
  "url": "https://example.com",
  "repo": "https://github.com/username/repo",
  "testimonials": [
    {
      "author": "Client Name",
      "quote": "Great experience!",
      "role": "Title",
      "company": "Company Name"
    }
  ],
  "featured": false,
  "complexity": "medium"
}
```

### Editing Packages and Pricing

Edit `/src/content/packages.json` to update pricing packages:

```json
{
  "id": "starter",
  "name": "Starter",
  "description": "Perfect for small businesses",
  "basePrice": 12999,
  "features": [
    "Up to 5 pages",
    "Mobile-responsive design",
    "Contact form integration"
  ],
  "popular": false,
  "deliveryTime": "2-3 weeks",
  "revisions": 2,
  "support": "1 month",
  "complexity": "simple"
}
```

### Updating Testimonials

Edit `/src/content/testimonials.json`:

```json
{
  "author": "Client Name",
  "quote": "Working with this team was exceptional...",
  "role": "CEO",
  "company": "Company Name",
  "avatar": "/images/testimonials/client.jpg",
  "rating": 5
}
```

### Managing FAQs

Edit `/src/content/faqs.json`:

```json
{
  "question": "How long does it take to build a website?",
  "answer": "Timeline depends on complexity...",
  "category": "timeline"
}
```

### Configuring the Price Estimator

The quote form price estimator is configured in `/src/content/estimatorConfig.ts`:

- **Base Packages**: Pulls from packages.json
- **Feature Multipliers**: Add/edit features that affect pricing
- **Page Multipliers**: Adjust pricing based on page count

Example feature:
```typescript
{
  id: 'ecommerce',
  name: 'E-commerce Store',
  description: 'Full online store with payment processing',
  priceMultiplier: 1.8,
  category: 'functionality'
}
```

## 🔧 Customization

### Branding and Colors

Update branding in `/src/styles/globals.css` and throughout components:

1. **Logo**: Replace the "W" placeholder in Navbar and Footer
2. **Colors**: Modify CSS variables in globals.css
3. **Company Info**: Update contact details in Footer component
4. **Domain**: Change URLs in SEO component and sitemap

### Email Integration

Set up EmailJS or replace with your preferred email service:

1. Sign up for EmailJS account
2. Add your service ID, template ID, and public key
3. Update the quote form submission handler
4. Test email delivery

### Analytics

The project includes analytics hooks ready for integration:

```typescript
// Add to your components
import { useAnalytics } from '@/hooks/useAnalytics'

const { trackEvent } = useAnalytics()

// Track events
trackEvent('quote_submitted', 'lead_generation', 'pricing_page')
```

### Payment Integration (Optional)

For Stripe integration:
1. Install Stripe SDK: `npm install @stripe/stripe-js`
2. Add Stripe components to quote/pricing pages
3. Set up webhook handlers for payment processing

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Deployment Options

**Vercel (Recommended)**:
```bash
npm install -g vercel
vercel
```

**Netlify**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Traditional Hosting**:
Upload the `dist/` folder contents to your web server.

### Environment Variables

Create `.env.local` for environment-specific settings:

```env
VITE_SITE_URL=https://yourdomain.com
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

## 🔍 SEO Optimization

The site includes comprehensive SEO features:

- **Meta Tags**: Automated title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawler instructions
- **Canonical URLs**: Prevent duplicate content issues

### SEO Checklist

- [ ] Update domain in SEO component and sitemap
- [ ] Add relevant keywords to content files
- [ ] Optimize images (alt tags, file sizes)
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Open Graph images work correctly

## 📊 Performance

The site is optimized for performance:

- **Lighthouse Score Target**: 90+ on all metrics
- **Load Time**: < 2 seconds on 3G
- **Bundle Size**: Optimized with Vite and dynamic imports
- **Images**: Lazy loading and responsive sizing
- **CSS**: Tailwind CSS purging removes unused styles

### Performance Tips

1. Optimize images before adding to `/public/images/`
2. Use WebP format for better compression
3. Implement image lazy loading for galleries
4. Monitor bundle size with build analyzer

## 🧪 Development

### Code Quality

```bash
# Type checking
npm run build

# Linting
npm run lint

# Fix linting issues
npm run lint:fix
```

### Adding New Components

Follow the established patterns:

1. **UI Components**: Add to `/src/components/ui/`
2. **Business Components**: Add to `/src/components/`
3. **Pages**: Add to `/src/pages/` and update router
4. **Types**: Add to `/src/types/index.ts`

### Git Workflow

```bash
# Feature development
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# Create pull request and merge
```

## 🐛 Troubleshooting

### Common Issues

**Build Errors**:
- Check TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure all required images exist

**Styling Issues**:
- Clear Tailwind cache
- Check for conflicting CSS classes
- Verify component imports

**Route Issues**:
- Check React Router configuration
- Verify component exports
- Test navigation links

### Getting Help

1. Check the GitHub Issues for common problems
2. Review TypeScript errors carefully
3. Use React Developer Tools for debugging
4. Test in different browsers and devices

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

**Ready to launch your web development business? Start customizing your content and deploy your new portfolio website!**