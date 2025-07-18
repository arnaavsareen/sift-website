// Google Analytics 4 Configuration
const GA_MEASUREMENT_ID = 'G-YBEGRSRMWE';

// Load Google Analytics immediately
(function() {
    // Create and load the gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    
    // Configure GA4 when script loads
    script.onload = function() {
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            send_page_view: true,
            cookie_domain: 'auto',
            cookie_flags: 'SameSite=None;Secure',
            // Enhanced measurement
            enhanced_measurement: {
                scrolls: true,
                outbound_clicks: true,
                site_search: true,
                video_engagement: true,
                file_downloads: true
            }
        });
        
        console.log('Google Analytics 4 loaded successfully');
    };
    
    script.onerror = function() {
        console.error('Failed to load Google Analytics - check for ad blockers');
    };
})();

// Enhanced tracking functions
function trackEvent(eventName, parameters = {}) {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', eventName, parameters);
        console.log(`Event tracked: ${eventName}`, parameters);
    } else {
        console.warn('Google Analytics not loaded yet');
    }
}

function trackPageView(pageTitle, pagePath) {
    if (typeof window.gtag !== 'undefined') {
        window.gtag('event', 'page_view', {
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

// Track demo button clicks and page events
function setupDemoTracking() {
    // Wait for gtag to be available
    const waitForGtag = setInterval(function() {
        if (typeof window.gtag !== 'undefined') {
            clearInterval(waitForGtag);
            
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
        }
    }, 100);
    
    // Clear interval after 10 seconds to avoid infinite checking
    setTimeout(function() {
        clearInterval(waitForGtag);
    }, 10000);
}

// Initialize tracking when page loads
document.addEventListener('DOMContentLoaded', function() {
    setupDemoTracking();
});