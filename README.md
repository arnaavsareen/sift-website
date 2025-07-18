# SIFT - AI-Powered Manufacturing Compliance Platform

A modern, responsive website for SIFT's AI-powered compliance automation platform designed specifically for small and mid-sized manufacturers. Transform reactive compliance into proactive prevention with enterprise-grade safety and compliance tools.

## About SIFT

SIFT revolutionizes manufacturing compliance by bringing enterprise-grade AI technology to small and mid-sized manufacturers. Our platform uses conversational AI, regulatory research automation, and intelligent documentation to transform compliance from a cost center into a competitive advantage.

### Platform Solutions

#### **Research** 
AI-powered regulatory research & analysis
- Instantly search OSHA, EPA, FDA, ISO, and federal regulations
- AI-powered summaries and compliance recommendations
- No broken links, outdated information, or missing requirements
- Exportable, audit-ready reports in one click

#### **JHA Generation**
Automated Job Hazard Analysis creation
- Instantly generate OSHA-compliant JHAs for any job or process
- AI-powered hazard identification and control recommendations
- Customizable templates for any industry or site
- Exportable, audit-ready JHAs in one click

#### **Incident Reporting**
Streamlined incident tracking & reporting
- Real-time incident documentation and tracking
- Automated compliance reporting and notifications
- Comprehensive analytics and trend analysis
- Integration with existing safety management systems

## Website Overview

This website showcases SIFT's platform capabilities through a clean, modern design that emphasizes professionalism and technical sophistication. Built with performance and user experience as top priorities.

### Key Features
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Modern UI/UX**: Clean, professional design with strategic color usage
- **Performance Optimized**: Fast loading times and smooth animations
- **Conversion Focused**: Clear paths to demo booking throughout
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Analytics Ready**: Google Analytics 4 integration with custom event tracking

## Project Structure

```
sift-website/
├── index.html                 # Main landing page with hero and features
├── about.html                 # Company mission and team information
├── contact.html               # Contact and demo booking page
├── blog.html                  # Blog listing page
├── research.html              # Research solution page
├── jha-generation.html        # JHA Generation solution page
├── incident-reporting.html    # Incident Reporting solution page
├── blog-post-1.html          # Blog: A New Blueprint for Safety Leadership
├── blog-post-2.html          # Blog: Essential Heat Safety Advice
├── blog-post-3.html          # Blog: Safety Leadership in Manufacturing
├── blog-post-4.html          # Blog: OSHA Amputations National Emphasis Program
├── blog-post-5.html          # Blog: MSHA's 18 Proposed Rules
├── css/
│   ├── main.css              # Core styles and design system
│   └── components.css        # Component-specific styles
├── js/
│   ├── main.js               # Core functionality and navigation
│   ├── animations.js         # Scroll animations and effects
│   ├── analytics.js          # Google Analytics 4 tracking
│   └── bulletin-board.js     # EHS bulletin board functionality
├── images/                   # Logo, backgrounds, and visual assets
├── videos/                   # Product demo videos
├── server.js                 # Node.js server for EHS bulletin board
├── package.json              # Node.js dependencies
├── .env                      # Environment variables (not in repo)
└── README.md                 # This file
```

## Design System

### Color Palette
```css
--primary-green: #4B725E      /* Strategic brand color */
--text-primary: #111827       /* Primary text */
--text-secondary: #6B7280     /* Secondary text */
--text-muted: #9CA3AF         /* Muted text */
--border-light: #E5E7EB       /* Light borders */
--bg-subtle: #F9FAFB          /* Subtle backgrounds */
--white: #FFFFFF              /* Pure white */
```

### Typography Scale
```css
--font-family-heading: 'Space Grotesk'  /* Headers */
--font-family-body: 'Inter'             /* Body text */
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
- Node.js 16+ (for EHS bulletin board server)
- Optional: Local server for development

### Installation & Setup

1. **Download or Clone**
   ```bash
   git clone [repository-url]
   cd sift-website
   ```

2. **Install Dependencies** (for EHS bulletin board)
   ```bash
   npm install
   ```
   
3. **Local Development Server**
   
   **Static Files (HTML/CSS/JS):**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npm install -g http-server
   http-server
   
   # Using PHP
   php -S localhost:8000
   ```
   
   **EHS Bulletin Board Server:**
   ```bash
   node server.js
   ```

4. **View Website**
   Open `http://localhost:8000` in your browser

### Direct File Access
For quick preview, simply open `index.html` directly in your web browser.

## 📊 Analytics & Tracking

### Google Analytics 4 Setup
The website includes comprehensive Google Analytics 4 tracking:

1. **Get Your GA4 Measurement ID**: Create account at analytics.google.com
2. **Update Configuration**: Replace `G-YBEGRSRMWE` in `/js/analytics.js` with your ID
3. **Deploy**: Upload files to your web server

### Tracked Events
- **Demo Bookings**: Conversion tracking for "Book a Demo" clicks
- **Solution Views**: Automatic tracking of Research, JHA, and Incident Reporting pages
- **Blog Reading Time**: Measures engagement with blog content
- **Contact Form Interactions**: Lead generation tracking
- **File Downloads**: PDF and document download tracking
- **Video Engagement**: Product demo video analytics

### Available Metrics
- Page views and unique visitors
- Traffic sources and geographic data
- Device and browser analytics
- Conversion rates and funnel analysis
- User engagement and session duration
- Real-time visitor tracking

## 🔧 Advanced Features

### EHS Bulletin Board
AI-powered news aggregation system:
- **Real-time EHS News**: Powered by Perplexity API
- **AI Question Answering**: GPT-4 integration for intelligent responses
- **Automatic Caching**: Efficient data management
- **Responsive Design**: Mobile-optimized interface

### Regulations Carousel
Infinite scrolling showcase of compliance standards:
- COMAH, API, OSHA, BSEE, HSE, ISO logos
- Smooth CSS animations with pause-on-hover
- Responsive design for all screen sizes

### Blog System
Comprehensive content management:
- **Consistent Design**: Uniform layout across all posts
- **Navigation Sidebar**: Easy post discovery
- **SEO Optimized**: Proper meta tags and structure
- **Mobile Responsive**: Collapsible navigation for mobile

### Solution Pages
Detailed product showcases:
- **Video Demos**: Product demonstration videos
- **Feature Highlights**: Key capability explanations
- **Statistics**: Industry-relevant metrics
- **Call-to-Action**: Clear conversion paths

## 📱 Performance & Optimization

### Technical Features
- **Mobile-First Design**: Optimized for all device sizes
- **Semantic HTML5**: Accessible and SEO-friendly markup
- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom Properties**: Maintainable CSS variables
- **Progressive Enhancement**: Works without JavaScript

### Performance Optimizations
- **Optimized Images**: Compressed assets for faster loading
- **Minimal JavaScript**: Progressive enhancement approach
- **Font Loading**: Preconnect to Google Fonts
- **CSS Architecture**: Organized for maintainability and performance
- **Lazy Loading**: Images loaded as needed

## 🚀 Deployment Options

### Static Hosting Platforms
- **GitHub Pages**: Free hosting with Git integration (requires public repo)
- **Netlify**: Drag and drop deployment with continuous integration
- **Vercel**: Git-based deployment with automatic builds
- **Cloudflare Pages**: Global CDN with Git integration

### Traditional Web Hosting
Upload all files to your web server's public directory (`public_html`, `www`, etc.)

## 🔒 Security & Best Practices

### Security Features
- **No Sensitive Data**: All public-facing information safe for public repos
- **HTTPS Ready**: Compatible with SSL/TLS encryption
- **Content Security Policy**: Can be easily implemented
- **Input Sanitization**: Proper handling of user inputs

### Privacy & Compliance
- **Analytics Disclosure**: Transparent about data collection
- **No Personal Data Storage**: All data handled by third-party services
- **GDPR Considerations**: Ready for privacy policy implementation
- **Contact Information**: Clear data collection contact methods

## 📈 SEO Optimization

### Technical SEO
- **Semantic HTML**: Proper heading hierarchy and structure
- **Meta Tags**: Optimized titles and descriptions for all pages
- **Open Graph**: Social media sharing optimization
- **Responsive Design**: Mobile-friendly for search rankings
- **Fast Loading**: Performance optimization for Core Web Vitals
- **Internal Linking**: Strategic navigation and content links

### Content Strategy
- **Industry Keywords**: Manufacturing compliance terminology
- **Blog Content**: Regular updates with valuable industry insights
- **Solution Pages**: Detailed product information
- **Local SEO Ready**: Easy to add location-specific content

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
- [ ] Analytics tracking verification
- [ ] Video playback across devices
- [ ] EHS bulletin board functionality

## 📞 Support & Development

### Technical Support
For technical issues or questions about implementation:
- Review browser console for any JavaScript errors
- Validate HTML using W3C Markup Validator
- Check CSS validation for any syntax issues
- Test across different browsers and devices
- Verify API keys are properly configured

### Future Enhancements
Consider these improvements for ongoing development:
- A/B testing different call-to-action placements
- Advanced analytics integration and custom dashboards
- Customer testimonials and case studies
- Multi-language support
- Advanced form handling and lead nurturing
- Integration with CRM systems
- Enhanced security features

## 📄 License & Usage

This website is designed specifically for SIFT's manufacturing compliance platform. The design system and code structure can serve as a foundation for similar B2B SaaS websites in the compliance and safety industry.

---

**SIFT** - Transforming manufacturing compliance through AI-powered technology. Making enterprise-grade safety and compliance tools accessible to small and mid-sized manufacturers.

**Contact**: [founders@siftai.in](mailto:founders@siftai.in) | **LinkedIn**: [linkedin.com/company/gosiftai](https://www.linkedin.com/company/gosiftai/)

**Book a Demo**: [cal.com/founders-sift-qcxymj](https://cal.com/founders-sift-qcxymj)