// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// CTA Button scroll to products
document.querySelector('.cta-button').addEventListener('click', () => {
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});

// Product card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.querySelectorAll('.product-card, .process-step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission handler
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show success message (in a real application, you'd send this to a server)
    alert('Thank you for your message! We\'ll get back to you soon.');
    
    // Reset form
    this.reset();
});

// Product button interactions
document.querySelectorAll('.product-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.product-card');
        const productName = card.querySelector('h3').textContent;
        
        // Show product details (in a real application, this could open a modal or navigate to a product page)
        alert(`Learn more about ${productName}!\n\nContact us for availability, pricing, and planting information.`);
    });
});

// Add hover effects for better interactivity
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    setTimeout(() => {
        document.querySelector('.hero-content h1').style.animation = 'fadeInUp 1s ease forwards';
        document.querySelector('.hero-content p').style.animation = 'fadeInUp 1s ease 0.2s forwards';
        document.querySelector('.cta-button').style.animation = 'fadeInUp 1s ease 0.4s forwards';
    }, 100);
});

// Add CSS animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .hero-content h1,
    .hero-content p,
    .cta-button {
        opacity: 0;
        animation-fill-mode: forwards;
    }
    
    .loaded .hero-content h1,
    .loaded .hero-content p,
    .loaded .cta-button {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Stats counter animation
const animateStats = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stat = entry.target;
            const finalValue = parseInt(stat.textContent);
            let currentValue = 0;
            const increment = finalValue / 50;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= finalValue) {
                    stat.textContent = finalValue + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                    clearInterval(counter);
                } else {
                    stat.textContent = Math.floor(currentValue) + (stat.textContent.includes('+') ? '+' : '') + (stat.textContent.includes('%') ? '%' : '');
                }
            }, 50);
            
            observer.unobserve(stat);
        }
    });
};

const statsObserver = new IntersectionObserver(animateStats, {
    threshold: 0.5
});

document.querySelectorAll('.stat h3').forEach(stat => {
    statsObserver.observe(stat);
});

// Add seasonal messaging
const addSeasonalMessage = () => {
    const month = new Date().getMonth();
    const seasonalMessage = document.createElement('div');
    seasonalMessage.className = 'seasonal-message';
    
    let message = '';
    if (month >= 9 && month <= 11) { // Fall planting season
        message = '🍂 Fall Planting Season! Perfect time to plant garlic for next year\'s harvest.';
    } else if (month >= 6 && month <= 8) { // Summer harvest season
        message = '🌞 Fresh Harvest Season! Our garlic is now ready for harvest.';
    } else if (month >= 0 && month <= 2) { // Winter growing season
        message = '❄️ Winter Growing Season! Our garlic is developing underground.';
    } else { // Spring growing season
        message = '🌱 Spring Growing Season! Watch our garlic scapes emerge.';
    }
    
    seasonalMessage.innerHTML = `
        <div class="seasonal-content">
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.style.display='none'">×</button>
        </div>
    `;
    
    // Add CSS for seasonal message
    const seasonalStyle = document.createElement('style');
    seasonalStyle.textContent = `
        .seasonal-message {
            position: fixed;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            background: #2d5016;
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            z-index: 999;
            animation: slideDown 0.5s ease;
        }
        
        .seasonal-content {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .seasonal-content button {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @keyframes slideDown {
            from {
                transform: translateX(-50%) translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateX(-50%) translateY(0);
                opacity: 1;
            }
        }
        
        @media (max-width: 768px) {
            .seasonal-message {
                left: 20px;
                right: 20px;
                transform: none;
            }
        }
    `;
    
    document.head.appendChild(seasonalStyle);
    document.body.appendChild(seasonalMessage);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (seasonalMessage.parentElement) {
            seasonalMessage.style.animation = 'slideUp 0.5s ease forwards';
            setTimeout(() => {
                seasonalMessage.remove();
            }, 500);
        }
    }, 10000);
};

// Add slideUp animation
const slideUpStyle = document.createElement('style');
slideUpStyle.textContent = `
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(slideUpStyle);

// Show seasonal message after page load
setTimeout(addSeasonalMessage, 2000);
