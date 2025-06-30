// Main JavaScript for exceptional website features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initThemeToggle();
    initScrollAnimations();
    initInteractiveCards();
    initSmoothScrolling();
    initParallaxEffects();
    initTypingEffect();
    initPageTransitions();
    initMouseFollowEffect();
    initResearchSearchAndFilter();
    initPageViewCounter();
});

// Dark/Light Mode Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(icon, savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(icon, newTheme);
        
        // Add transition effect
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    });
}

function updateThemeIcon(icon, theme) {
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Scroll-triggered Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in sections
    const fadeSections = document.querySelectorAll('.fade-in-section');
    fadeSections.forEach(section => {
        observer.observe(section);
    });
}

// Interactive Research Cards
function initInteractiveCards() {
    const researchCards = document.querySelectorAll('.research-card');
    
    researchCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click functionality for future expansion
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            // Future: Open detailed modal or navigate to research page
        });
    });
    
    // Interactive publication cards
    const publicationCards = document.querySelectorAll('.publication-card');
    publicationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.01)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax Effects
function initParallaxEffects() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            heroSection.style.transform = `translateY(${rate}px)`;
        });
    }
}

// Typing Effect for Hero Title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.borderRight = '2px solid var(--secondary-color)';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                heroTitle.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Enhanced hover effects for social links
function initSocialHoverEffects() {
    const socialLinks = document.querySelectorAll('.social-links a');
    
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1) rotate(5deg)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });
}

// Performance optimization: Debounce scroll events
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

// Enhanced scroll performance
const debouncedScrollHandler = debounce(function() {
    // Any scroll-based animations can go here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Initialize social hover effects
initSocialHoverEffects();

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add particle effect to hero section (optional)
    createParticleEffect();
});

function createParticleEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s infinite ease-in-out;
            pointer-events: none;
        `;
        heroSection.appendChild(particle);
    }
}

// Page Transitions
function initPageTransitions() {
    // Fade in body on load
    document.body.style.opacity = 0;
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1)';
        document.body.style.opacity = 1;
    });
    // Fade out on link click (internal links only)
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname === window.location.hostname && link.getAttribute('href')[0] !== '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location = link.href;
                }, 400);
            });
        }
    });
}

// Mouse-following effect (subtle highlight)
function initMouseFollowEffect() {
    const highlight = document.createElement('div');
    highlight.className = 'mouse-highlight';
    document.body.appendChild(highlight);
    
    document.addEventListener('mousemove', function(e) {
        highlight.style.left = e.clientX + 'px';
        highlight.style.top = e.clientY + 'px';
    });
}

// Add CSS for floating particles and mouse highlight
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
        }
    }
    .loaded {
        opacity: 1;
    }
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    .mouse-highlight {
        position: fixed;
        left: 0; top: 0;
        width: 60px; height: 60px;
        pointer-events: none;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(52,152,219,0.15) 0%, rgba(52,152,219,0) 80%);
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: background 0.2s;
        mix-blend-mode: lighten;
    }
`;
document.head.appendChild(style);

// Research search and filter
function initResearchSearchAndFilter() {
    const searchInput = document.getElementById('research-search');
    const filterSelect = document.getElementById('research-filter');
    const cards = document.querySelectorAll('.research-card');

    function filterCards() {
        const search = searchInput.value.toLowerCase();
        const filter = filterSelect.value;
        cards.forEach(card => {
            const title = card.getAttribute('data-title') || '';
            const category = card.getAttribute('data-category') || '';
            const matchesSearch = title.includes(search);
            const matchesFilter = !filter || category === filter;
            card.style.display = (matchesSearch && matchesFilter) ? '' : 'none';
        });
    }
    if (searchInput) searchInput.addEventListener('input', filterCards);
    if (filterSelect) filterSelect.addEventListener('change', filterCards);
}

// Initialize page view counter
function initPageViewCounter() {
    const pageviewsElement = document.getElementById('pageviews');
    
    // Use a simple, privacy-respecting counter service
    // This uses a free service that doesn't collect personal data
    fetch('https://api.countapi.xyz/hit/kevinj24fr-website/visits')
        .then(response => response.json())
        .then(data => {
            if (data.value !== undefined) {
                pageviewsElement.textContent = data.value.toLocaleString();
            } else {
                pageviewsElement.textContent = '1,000+';
            }
        })
        .catch(error => {
            // Fallback to a static number if the service is unavailable
            pageviewsElement.textContent = '1,000+';
        });
} 