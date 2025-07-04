// SIFT Website Animations JavaScript

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// Animation observer
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Add animation class based on element's data attribute or default class
            const animationClass = element.dataset.animation || 'fade-in';
            element.classList.add('animate');
            
            // Add staggered animation for children if specified
            if (element.dataset.stagger) {
                const children = element.children;
                Array.from(children).forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate');
                    }, index * 100);
                });
            }
            
            // Stop observing this element
            animationObserver.unobserve(element);
        }
    });
}, observerOptions);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    setupCounterAnimations();
    setupTypingEffects();
    setupParallaxEffects();
    setupManufacturingAnimations();
    setupFAQ();
});

// Initialize all animations
function initializeAnimations() {
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in, .slide-up');
    
    animatedElements.forEach(element => {
        animationObserver.observe(element);
    });
    
    // Set initial states for animated elements
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = getInitialTransform(element);
        element.style.transition = 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });
    
    // Initialize scroll reveal for hero video
    setupScrollReveal();
}

// Get initial transform based on animation class
function getInitialTransform(element) {
    if (element.classList.contains('slide-in-left')) {
        return 'translateX(-50px)';
    } else if (element.classList.contains('slide-in-right')) {
        return 'translateX(50px)';
    } else if (element.classList.contains('slide-up')) {
        return 'translateY(30px)';
    } else if (element.classList.contains('scale-in')) {
        return 'scale(0.9)';
    } else {
        return 'translateY(20px)';
    }
}

// Counter animations for statistics
function setupCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Animate counter numbers
function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
    const suffix = element.textContent.replace(/[\d]/g, '');
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Typing effect for hero text
function setupTypingEffects() {
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let index = 0;
        const typeInterval = setInterval(() => {
            element.textContent += text[index];
            index++;
            
            if (index >= text.length) {
                clearInterval(typeInterval);
                element.classList.add('typing-complete');
            }
        }, 50);
    });
}

// Parallax effects
function setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;
    
    let ticking = false;
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollTop * speed);
            
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
        
        ticking = false;
    }
    
    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestParallaxUpdate);
}

// Staggered animations for grid items
function setupStaggeredAnimations() {
    const grids = document.querySelectorAll('.grid, .feature-grid, .pricing-grid');
    
    grids.forEach(grid => {
        const items = grid.children;
        
        const gridObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    Array.from(items).forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 150);
                    });
                    gridObserver.unobserve(grid);
                }
            });
        }, observerOptions);
        
        gridObserver.observe(grid);
    });
}

// Scroll reveal for hero video - Morphik Style
function setupScrollReveal() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    if (scrollRevealElements.length === 0) return;
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Simple, clean entrance animation
                setTimeout(() => {
                    element.classList.add('visible');
                }, 100);
                
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    scrollRevealElements.forEach(element => {
        scrollObserver.observe(element);
    });
}

// Mouse movement parallax for hero sections
function setupMouseParallax() {
    const heroSections = document.querySelectorAll('.hero');
    
    heroSections.forEach(hero => {
        const parallaxElements = hero.querySelectorAll('.parallax-mouse');
        
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 1;
                const xOffset = (x - 0.5) * speed * 20;
                const yOffset = (y - 0.5) * speed * 20;
                
                element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
            });
        });
        
        hero.addEventListener('mouseleave', () => {
            parallaxElements.forEach(element => {
                element.style.transform = 'translate(0, 0)';
            });
        });
    });
}

// Scroll-triggered animations for progress bars
function setupProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.dataset.progress || '100%';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 300);
                
                progressObserver.unobserve(progressBar);
            }
        });
    }, observerOptions);
    
    progressBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s ease-in-out';
        progressObserver.observe(bar);
    });
}

// Manufacturing Animation System
function setupManufacturingAnimations() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    if (floatingElements.length === 0) {
        console.warn('Manufacturing animation setup failed - no floating elements found');
        return;
    }
    
    console.log('✅ Manufacturing animations initialized with', floatingElements.length, 'elements');
    
    // Ensure all elements have their CSS animations running
    floatingElements.forEach((element) => {
        element.style.animationPlayState = 'running';
    });
}

// Floating animation for feature cards
function setupFloatingAnimations() {
    const floatingElements = document.querySelectorAll('.floating');
    
    floatingElements.forEach((element, index) => {
        const delay = index * 0.5;
        const duration = 3 + (index % 3);
        
        element.style.animation = `floating ${duration}s ease-in-out ${delay}s infinite`;
    });
}

// Add CSS animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    /* Fade in animation */
    .fade-in.animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Slide animations */
    .slide-in-left.animate {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    .slide-in-right.animate {
        opacity: 1 !important;
        transform: translateX(0) !important;
    }
    
    .slide-up.animate {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    /* Scale animation */
    .scale-in.animate {
        opacity: 1 !important;
        transform: scale(1) !important;
    }
    
    /* Floating animation */
    @keyframes floating {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
    
    .floating {
        animation: floating 3s ease-in-out infinite;
    }
    
    /* Pulse animation for buttons */
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(45, 88, 66, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(45, 88, 66, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(45, 88, 66, 0);
        }
    }
    
    .pulse {
        animation: pulse 2s infinite;
    }
    
    /* Typing effect */
    .typing-effect {
        border-right: 2px solid var(--primary-green);
        animation: blink 1s infinite;
    }
    
    .typing-effect.typing-complete {
        border-right: none;
        animation: none;
    }
    
    @keyframes blink {
        0%, 50% {
            border-color: var(--primary-green);
        }
        51%, 100% {
            border-color: transparent;
        }
    }
    
    /* Bounce animation */
    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
        }
        40%, 43% {
            transform: translate3d(0, -30px, 0);
        }
        70% {
            transform: translate3d(0, -15px, 0);
        }
        90% {
            transform: translate3d(0, -4px, 0);
        }
    }
    
    .bounce {
        animation: bounce 1s ease-in-out;
    }
    
    /* Shake animation for error states */
    @keyframes shake {
        0%, 100% {
            transform: translateX(0);
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
        }
        20%, 40%, 60%, 80% {
            transform: translateX(5px);
        }
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
    
    /* Rotate animation */
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    .rotate {
        animation: rotate 2s linear infinite;
    }
    
    /* Gradient animation for backgrounds */
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    .gradient-animation {
        background: linear-gradient(-45deg, var(--primary-green), var(--secondary-green), var(--accent-green), var(--primary-green));
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    }
    
    /* Hover animations */
    .hover-lift {
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .hover-lift:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-xl);
    }
    
    .hover-scale {
        transition: transform 0.3s ease;
    }
    
    .hover-scale:hover {
        transform: scale(1.05);
    }
    
    /* Loading animation */
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    
    .loading-spinner {
        animation: spin 1s linear infinite;
    }
    
    /* Reveal animation for text */
    @keyframes reveal {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .reveal {
        animation: reveal 0.6s ease forwards;
    }
    
    /* Progressive enhancement */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

document.head.appendChild(animationStyles);

// Initialize additional animations after DOM load
document.addEventListener('DOMContentLoaded', () => {
    setupStaggeredAnimations();
    setupMouseParallax();
    setupProgressBars();
    setupFloatingAnimations();
    
    // Add hover classes to interactive elements
    const cards = document.querySelectorAll('.card, .feature-card, .pricing-card');
    cards.forEach(card => {
        card.classList.add('hover-lift');
    });
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (!button.classList.contains('btn-secondary')) {
            button.classList.add('hover-scale');
        }
    });
});

// Utility function to trigger animation
function triggerAnimation(element, animationName, duration = 1000) {
    element.classList.add(animationName);
    setTimeout(() => {
        element.classList.remove(animationName);
    }, duration);
}

// Export functions for use in other scripts
window.SIFTAnimations = {
    triggerAnimation,
    setupCounterAnimations,
    setupTypingEffects,
    setupParallaxEffects
};

// Manufacturing Animation - Smooth Pure CSS Animations
document.addEventListener('DOMContentLoaded', function() {
    const manufacturingAnimation = document.querySelector('.manufacturing-animation');
    const floatingElements = document.querySelectorAll('.floating-element');
    const particles = document.querySelectorAll('.particle');
    
    if (!manufacturingAnimation) return;
    
    // Performance optimization: pause animations when not visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                manufacturingAnimation.style.animationPlayState = 'running';
                floatingElements.forEach(el => el.style.animationPlayState = 'running');
                particles.forEach(el => el.style.animationPlayState = 'running');
            } else {
                manufacturingAnimation.style.animationPlayState = 'paused';
                floatingElements.forEach(el => el.style.animationPlayState = 'paused');
                particles.forEach(el => el.style.animationPlayState = 'paused');
            }
        });
    }, { threshold: 0.1 });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        observer.observe(heroSection);
    }
    
    // Smooth loading sequence
    function startLoadingSequence() {
        floatingElements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'scale(0)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                element.style.opacity = '';
                element.style.transform = '';
                
                setTimeout(() => {
                    element.style.transition = '';
                }, 800);
            }, index * 100);
        });
    }
    
    // Start the loading sequence
    setTimeout(startLoadingSequence, 300);
});

// FAQ Functionality
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                // Close other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherQuestion = otherItem.querySelector('.faq-question');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-icon');
                        
                        if (otherQuestion && otherAnswer) {
                            otherQuestion.classList.remove('active');
                            otherAnswer.classList.remove('active');
                        }
                    }
                });
                
                // Toggle current FAQ item
                const isActive = question.classList.contains('active');
                
                if (isActive) {
                    question.classList.remove('active');
                    answer.classList.remove('active');
                } else {
                    question.classList.add('active');
                    answer.classList.add('active');
                }
            });
        }
    });
}