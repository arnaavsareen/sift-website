/**
 * SIFT Website - Y Combinator Quality Interactions
 * Main JavaScript functionality for smooth user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeHeader();
    initializeMobileMenu();
    initializeSmoothScrolling();
    initializeScrollAnimations();
    initializeIntersectionObserver();
    initializeMicroInteractions();
    initializeSectorCycle();
    
    // Set initial active navigation state
    updateActiveNavLink();
    
    console.log('🚀 SIFT website initialized with Y Combinator quality interactions');

    const track = document.querySelector('.carousel-track');
    if (track) {
        track.innerHTML += track.innerHTML;
    }
});

/**
 * Header scroll effects and sticky behavior
 */
function initializeHeader() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        
        // Add scrolled class for styling
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollY = scrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Mobile menu toggle functionality
 */
function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;
    
    if (!mobileMenuToggle || !navMenu) return;
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        const isOpen = navMenu.classList.contains('active');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
    
    // Close menu when clicking on a link (but not dropdown triggers)
    navMenu.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link') && !e.target.classList.contains('dropdown-trigger')) {
            closeMobileMenu();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    
    function openMobileMenu() {
        navMenu.classList.add('active');
        mobileMenuToggle.classList.add('active');
        body.style.overflow = 'hidden';
        
        // Animate hamburger to X
        animateHamburgerToX();
    }
    
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        body.style.overflow = '';
        
        // Animate X back to hamburger
        animateXToHamburger();
    }
    
    function animateHamburgerToX() {
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    }
    
    function animateXToHamburger() {
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }

    // Toggle Solutions submenu on click (both mobile and desktop)
    const navDropdown = document.querySelector('.nav-dropdown');
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    let dropdownOpen = false;
    
    if (navDropdown && dropdownTrigger) {
        dropdownTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            if (!dropdownOpen) {
                navDropdown.classList.add('active');
                dropdownOpen = true;
            } else {
                navDropdown.classList.remove('active');
                dropdownOpen = false;
            }
        });
        
        // Prevent dropdown from closing when clicking inside it
        const dropdownMenu = navDropdown.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!navDropdown.contains(e.target)) {
                navDropdown.classList.remove('active');
                dropdownOpen = false;
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && dropdownOpen) {
                navDropdown.classList.remove('active');
                dropdownOpen = false;
            }
        });
    }
}

/**
 * Smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    // Handle anchor links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

/**
 * Update active navigation link based on current page
 */
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Get the link's target page
        const linkHref = link.getAttribute('href');
        let linkPage = '';
        
        if (linkHref.startsWith('#')) {
            // For anchor links, they belong to index.html
            linkPage = 'index.html';
        } else {
            // For regular page links
            linkPage = linkHref.split('/').pop();
        }
        
        // Special handling for home page
        if (linkPage === 'index.html' && link.textContent.trim() === 'Home') {
            if (currentPage === 'index.html' || currentPage === '') {
                link.classList.add('active');
            }
        } else if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

/**
 * Scroll-based animations with performance optimization
 */
function initializeScrollAnimations() {
    let ticking = false;
    
    function updateAnimations() {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.1; // Subtle parallax
        
        // Subtle parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Intersection Observer for fade-in animations
 */
function initializeIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delay for grid items
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 100); // 100ms delay between items
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.feature-card, .industry-card, .section-title, .section-subtitle, .cta-title, .cta-subtitle'
    );
    
    animatedElements.forEach(el => {
        // Only observe elements that don't already have the animation class
        if (!el.classList.contains('fade-in-up')) {
            observer.observe(el);
        }
    });
}

/**
 * Micro-interactions and hover effects
 */
function initializeMicroInteractions() {
    // Enhanced button interactions
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Add ripple effect on click for primary buttons
        button.addEventListener('click', function(e) {
            if (this.classList.contains('btn-primary')) {
                createRippleEffect(e, this);
            }
            
            // Track button clicks
            if (this.href && this.href.includes('cal.com')) {
                trackEvent('demo_button_click', {
                    button_location: getButtonLocation(this),
                    button_text: this.textContent.trim()
                });
            }
        });
        
        // Enhanced hover effects
        button.addEventListener('mouseenter', function() {
            if (this.classList.contains('btn-primary')) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 8px 25px rgba(75, 114, 94, 0.25)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (this.classList.contains('btn-primary')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.feature-card, .industry-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Navigation link hover effects
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Logo hover effect
    const logo = document.querySelector('.nav-brand');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    }
}

/**
 * Create ripple effect for button clicks
 */
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Analytics and tracking utilities
 */
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Console log for development
    console.log('📊 Event tracked:', eventName, parameters);
}

function getButtonLocation(button) {
    if (button.closest('.hero')) return 'hero';
    if (button.closest('.cta-section')) return 'cta';
    if (button.closest('.header')) return 'header';
    if (button.closest('.footer')) return 'footer';
    return 'other';
}

/**
 * Performance optimization utilities
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Notification system for user feedback
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close" aria-label="Close notification">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
        </div>
    `;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        background: white;
        border: 1px solid var(--border-light);
        box-shadow: var(--shadow-xl);
        animation: slideInRight 0.4s ease;
        font-size: 0.9rem;
        line-height: 1.5;
    `;
    
    if (type === 'success') {
        notification.style.borderLeftColor = 'var(--primary-green)';
        notification.style.borderLeftWidth = '4px';
    }
    
    document.body.appendChild(notification);
    
    // Setup close button
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s ease;
        margin-left: 12px;
        flex-shrink: 0;
    `;
    
    closeButton.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/**
 * Error handling and fallbacks
 */
window.addEventListener('error', function(e) {
    console.log('🚨 JavaScript error caught:', e.error);
    // Graceful degradation - website still works without JS
});

/**
 * Initialize lazy loading for images (if needed)
 */
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Add CSS for animations and effects
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    
    /* Smooth transitions for all interactive elements */
    .btn, .nav-link, .nav-brand, .feature-card, .industry-card {
        transition: all 0.3s ease;
    }
    
    /* Ensure buttons maintain their styling during interactions */
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    /* Mobile menu animation improvements */
    .mobile-menu-toggle span {
        transition: all 0.3s ease;
    }
    
    /* Enhanced focus styles */
    .btn:focus,
    .nav-link:focus {
        outline: 3px solid var(--primary-green);
        outline-offset: 2px;
    }
`;

document.head.appendChild(style);

function initializeSectorCycle() {
    const sectors = [
        'Compliance',
        'Audit',
        'EHS',
        'Safety',
        'Training',
    ];
    const el = document.querySelector('.sector-cycle');
    if (!el) return;
    let idx = 0;
    let typingSpeed = 95;
    let pauseAfterType = 1200;
    let pauseAfterDelete = 400;

    function typeWord(word, cb) {
        let i = 0;
        el.classList.remove('typed-complete', 'sector-cycle-crossfade', 'cursor-blink');
        el.classList.add('cursor-solid');
        function type() {
            el.textContent = word.slice(0, i);
            if (i <= word.length) {
                i++;
                setTimeout(type, typingSpeed);
            } else {
                el.classList.remove('cursor-solid');
                el.classList.add('typed-complete', 'cursor-blink');
                setTimeout(cb, pauseAfterType);
            }
        }
        type();
    }

    function deleteWord(cb) {
        let word = el.textContent;
        let i = word.length;
        el.classList.remove('typed-complete', 'cursor-blink');
        el.classList.add('cursor-solid', 'sector-cycle-crossfade');
        function del() {
            el.textContent = word.slice(0, i);
            if (i > 0) {
                i--;
                setTimeout(del, typingSpeed);
            } else {
                el.classList.remove('cursor-solid', 'sector-cycle-crossfade');
                setTimeout(cb, pauseAfterDelete);
            }
        }
        del();
    }

    function loop() {
        typeWord(sectors[idx], () => {
            deleteWord(() => {
                idx = (idx + 1) % sectors.length;
                loop();
            });
        });
    }
    loop();
}