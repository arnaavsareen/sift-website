// Google Analytics 4 Configuration
// Replace 'G-XXXXXXXXXX' with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-YBEGRSRMWE';

// Load Google Analytics
function loadGoogleAnalytics() {
    // Create and load the gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        // Enhanced measurement settings
        send_page_view: true,
        // Track file downloads
        enhanced_measurement: {
            scrolls: true,
            outbound_clicks: true,
            site_search: true,
            video_engagement: true,
            file_downloads: true
        }
    });
    
    // Make gtag available globally
    window.gtag = gtag;
}

// Enhanced tracking functions
function trackEvent(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
}

function trackPageView(pageTitle, pagePath) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: pageTitle,
            page_location: window.location.href,
            page_path: pagePath
        });
    }
}

function trackDemoBooking(method = 'calendar_link') {
    trackEvent('book_demo', {
        event_category: 'engagement',
        event_label: method,
        value: 1
    });
}

function trackContactForm() {
    trackEvent('contact_form_submit', {
        event_category: 'lead_generation',
        event_label: 'contact_page'
    });
}

function trackBlogRead(blogTitle, readTime) {
    trackEvent('blog_read', {
        event_category: 'content_engagement',
        event_label: blogTitle,
        value: readTime
    });
}

function trackSolutionView(solutionName) {
    trackEvent('solution_view', {
        event_category: 'product_interest',
        event_label: solutionName
    });
}

// Track demo button clicks
function setupDemoTracking() {
    document.addEventListener('DOMContentLoaded', function() {
        // Track all demo booking buttons
        const demoButtons = document.querySelectorAll('a[href*="cal.com"]');
        demoButtons.forEach(button => {
            button.addEventListener('click', function() {
                trackDemoBooking('calendar_link');
            });
        });
        
        // Track solution page visits
        const currentPath = window.location.pathname;
        if (currentPath.includes('research.html')) {
            trackSolutionView('Research');
        } else if (currentPath.includes('jha-generation.html')) {
            trackSolutionView('JHA Generation');
        } else if (currentPath.includes('incident-reporting.html')) {
            trackSolutionView('Incident Reporting');
        }
        
        // Track blog reading time
        if (currentPath.includes('blog-post-')) {
            const startTime = Date.now();
            const blogTitle = document.querySelector('h1')?.textContent || 'Unknown Blog';
            
            // Track when user leaves or closes page
            window.addEventListener('beforeunload', function() {
                const readTime = Math.round((Date.now() - startTime) / 1000);
                if (readTime > 10) { // Only track if user spent more than 10 seconds
                    trackBlogRead(blogTitle, readTime);
                }
            });
        }
    });
}

// Initialize analytics when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadGoogleAnalytics();
    setupDemoTracking();
});