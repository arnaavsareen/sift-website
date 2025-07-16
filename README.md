# SIFT - AI-Powered Manufacturing Compliance Platform

A modern, responsive website for SIFT's AI-powered compliance monitoring platform designed specifically for  manufacturers. Transform reactive compliance into proactive prevention with enterprise-grade safety and compliance tools.

## 🏭 About SIFT

SIFT revolutionizes manufacturing compliance by bringing enterprise-grade AI technology to  manufacturers. Our platform uses computer vision, predictive analytics, and automated documentation to transform compliance from a cost center into a competitive advantage.

### Core Platform Features

- **Computer Vision Monitoring**: Real-time video analysis with custom object detection and compliance rule engines
- **AI-Powered Analytics**: Predictive maintenance, production optimization, and quality trend analysis
- **Automated Documentation**: Compliance reporting, audit trail generation, and regulatory requirement tracking
- **Dashboard & Insights**: Real-time KPI monitoring with mobile-responsive interface

### Industries We Serve

- **Automotive Manufacturing**: Quality control and safety compliance for parts and assembly lines
- **Electronics Assembly**: Precision monitoring for electronic component manufacturing
- **Food & Beverage Production**: Hygiene and safety compliance for processing facilities
- **Medical Device Manufacturing**: Regulatory compliance and quality assurance
- **Aerospace Components**: Critical safety monitoring for aerospace manufacturing
- **General Manufacturing**: Comprehensive compliance solutions for diverse operations

## 🚀 Platform Solutions

### OSHA Compliance Automation
- Real-time safety violation detection
- Automated incident documentation
- Regulatory reporting automation
- Compliance dashboard and analytics

### PPE Compliance Tracking  
- Computer vision PPE detection
- Instant compliance alerts
- Equipment usage analytics
- Training compliance tracking

### SOP Adherence Monitoring
- Process step verification
- Deviation detection and alerts
- Performance improvement insights
- Training effectiveness tracking

### Audit Preparation
- Automated evidence collection
- Compliance history tracking
- Regulatory report generation
- Audit-ready documentation

## 🌐 Website Overview

This website showcases SIFT's platform capabilities through a clean, modern design that emphasizes professionalism and technical sophistication. Built with performance and user experience as top priorities.

### Design Philosophy

- **Professional B2B Aesthetic**: Clean, minimal design focused on conversion
- **Typography-First**: Space Grotesk for headings, Inter for body text
- **Strategic Color Usage**: Professional green (#4B725E) used sparingly for maximum impact
- **Conversion Optimized**: Clear paths to demo booking throughout the experience

## 📁 Project Structure

```
sift-website/
├── index.html              # Main landing page
├── solutions.html           # Platform solutions and use cases
├── about.html              # Company mission and approach
├── contact.html            # Contact and demo booking
├── css/
│   ├── main.css           # Core styles and design system
│   └── components.css     # Component-specific styles
├── js/
│   ├── main.js            # Core functionality
│   └── animations.js      # Scroll animations and effects
├── images/                 # Logo and visual assets
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
```css
--primary-green: #4B725E      /* Strategic brand color */
--text-primary: #111827       /* Primary text */
--text-secondary: #6B7280     /* Secondary text */
--text-muted: #9CA3AF         /* Muted text */
--border-light: #E5E7EB       /* Light borders */
--bg-subtle: #F9FAFB          /* Subtle backgrounds */
```

### Typography Scale
```css
--font-family-heading: 'Space Grotesk'  /* Headers */
--font-family: 'Inter'                  /* Body text */
--text-base: 1rem           /* 16px - Base size */
--text-lg: 1.125rem         /* 18px - Large text */
--text-xl: 1.25rem          /* 20px - Extra large */
--text-2xl: 1.5rem          /* 24px - Section titles */
--text-3xl: 1.875rem        /* 30px - Page titles */
--text-4xl: 2.25rem         /* 36px - Large titles */
--text-5xl: 3rem            /* 48px - Hero titles */
```

### Spacing System
```css
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
```

## 🛠️ Getting Started

### Prerequisites
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Optional: Local server for development

### Installation & Setup

1. **Download or Clone**
   ```bash
   git clone [repository-url]
   cd sift-website
   ```

2. **Local Development Server** (Recommended)
   
   **Using Python:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2  
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js:**
   ```bash
   npm install -g http-server
   http-server
   ```
   
   **Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **View Website**
   Open `http://localhost:8000` in your browser

### Direct File Access
For quick preview, simply open `index.html` directly in your web browser.

## 📱 Features & Performance

### Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Large buttons and intuitive navigation
- **Fast Loading**: Optimized assets and minimal dependencies

### Modern Web Standards
- **Semantic HTML5**: Accessible and SEO-friendly markup
- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom Properties**: Maintainable CSS variables
- **Progressive Enhancement**: Works without JavaScript

### Interactive Elements
- **Smooth Animations**: Scroll-triggered fade-in effects
- **Hover States**: Subtle micro-interactions
- **Mobile Menu**: Responsive navigation
- **Form Integration**: Cal.com booking integration

## 🔧 Customization

### Updating Brand Colors
Edit the CSS custom properties in `css/main.css`:

```css
:root {
    --primary-green: #4B725E;
    --primary-green-light: #5A8570;
    --primary-green-dark: #3C5A49;
}
```

### Typography Changes
Modify font imports and variables:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
    --font-family: 'Inter', sans-serif;
    --font-family-heading: 'Space Grotesk', sans-serif;
}
```

### Content Updates
- **Contact Information**: Update cal.com links in HTML files
- **Company Details**: Modify text content as needed
- **Images**: Replace logo and images in `/images` directory

## 🚀 Deployment Options

### Static Hosting Platforms
- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting with Git integration
- **Cloudflare Pages**: Global CDN with Git integration

### Traditional Web Hosting
Upload all files to your web server's public directory (`public_html`, `www`, etc.)

### CDN Integration
For optimal performance, consider integrating with:
- Cloudflare for global CDN
- AWS CloudFront for enterprise deployment
- Google Cloud CDN for Google ecosystem integration

## 📊 Analytics & Tracking

### Google Analytics Setup
Add tracking code before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Lead Tracking
The website uses Cal.com for demo booking, providing:
- Automated lead capture
- Calendar integration
- Professional scheduling interface
- No form maintenance required

## 🔒 Security & Performance

### Security Features
- **No Server-Side Code**: Static site reduces attack surface
- **HTTPS Ready**: Compatible with SSL/TLS encryption
- **Content Security Policy**: Can be easily implemented
- **No Database**: Eliminates SQL injection risks

### Performance Optimizations
- **Optimized Images**: Compressed assets for faster loading
- **Minimal JavaScript**: Progressive enhancement approach
- **Font Loading**: Preconnect to Google Fonts
- **CSS Architecture**: Organized for maintainability and performance

## 📈 SEO Optimization

### Technical SEO
- **Semantic HTML**: Proper heading hierarchy and structure
- **Meta Tags**: Optimized titles and descriptions
- **Open Graph**: Social media sharing optimization
- **Responsive Design**: Mobile-friendly for search rankings
- **Fast Loading**: Performance optimization for Core Web Vitals

### Content Strategy
- **Industry Keywords**: Manufacturing compliance terminology
- **Local SEO Ready**: Easy to add location-specific content
- **Internal Linking**: Strategic navigation and content links
- **Call-to-Action Optimization**: Clear conversion paths

## 🧪 Browser Testing

### Supported Browsers
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile browsers (iOS Safari 14+, Chrome Mobile 90+) ✅

### Testing Checklist
- [ ] Navigation functionality across all pages
- [ ] Responsive design on multiple screen sizes
- [ ] Form submissions and Cal.com integration
- [ ] Animation performance
- [ ] Font loading and fallbacks

## 📞 Support & Development

### Technical Support
For technical issues or questions about implementation:
- Review browser console for any JavaScript errors
- Validate HTML using W3C Markup Validator
- Check CSS validation for any syntax issues
- Test across different browsers and devices

### Future Enhancements
Consider these improvements for ongoing development:
- A/B testing different call-to-action placements
- Advanced analytics integration
- Blog or resource section
- Customer testimonials and case studies
- Multi-language support

## 📄 License & Usage

This website template is designed specifically for SIFT's manufacturing compliance platform. The design system and code structure can serve as a foundation for similar B2B SaaS websites.

---

**SIFT** - Transforming manufacturing compliance through AI-powered technology. Making enterprise-grade safety and compliance tools accessible to manufacturers of all sizes.