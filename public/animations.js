// Surgical Procedure Animations and Modal Functionality

// Procedure data with animations and information
const procedureData = {
    hand: {
        title: "Hand Surgery Procedures",
        animation: `
            <div class="hand-animation">
                <div class="hand-outline">
                    <div class="finger"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                    <div class="finger"></div>
                </div>
                <div class="surgical-tool"></div>
                <div class="incision-line"></div>
            </div>
        `,
        info: {
            description: "Specialized surgical treatment for hand conditions including carpal tunnel syndrome, trigger finger, fractures, and complex reconstructive procedures.",
            steps: [
                "Initial assessment and diagnosis using advanced imaging",
                "Local or regional anesthesia administration",
                "Precise surgical incision following anatomical landmarks",
                "Careful dissection to preserve vital structures",
                "Repair or reconstruction of affected tissues",
                "Microsurgical techniques for nerve and vessel repair",
                "Closure with fine sutures for optimal healing",
                "Application of appropriate dressing and splinting"
            ],
            recovery: "Recovery typically involves 2-6 weeks of healing with progressive hand therapy. Most patients regain full function within 3-6 months depending on the complexity of the procedure."
        }
    },
    
    breast: {
        title: "Breast Surgery Procedures",
        animation: `
            <div class="breast-animation">
                <div class="chest-outline">
                    <div class="implant"></div>
                    <div class="implant" style="left: 120px;"></div>
                </div>
                <div class="surgical-guideline"></div>
                <div class="surgical-guideline" style="left: 160px;"></div>
            </div>
        `,
        info: {
            description: "Comprehensive breast surgery including reconstruction after cancer treatment, augmentation, reduction, and oncoplastic procedures combining cancer treatment with aesthetic outcomes.",
            steps: [
                "Detailed consultation and surgical planning",
                "Pre-operative marking and measurements",
                "General anesthesia and patient positioning",
                "Precise surgical incisions following planned approach",
                "Tissue dissection and preparation of pocket",
                "Implant placement or tissue rearrangement",
                "Careful hemostasis and tissue closure",
                "Drain placement and post-operative dressing"
            ],
            recovery: "Initial healing takes 1-2 weeks, with full recovery in 6-8 weeks. Patients can typically return to normal activities gradually, with full exercise clearance at 6 weeks post-surgery."
        }
    },
    
    body: {
        title: "Body Contouring Procedures",
        animation: `
            <div class="body-animation">
                <div class="body-outline">
                    <div class="fat-layer"></div>
                </div>
                <div class="liposuction-tool"></div>
            </div>
        `,
        info: {
            description: "Body contouring procedures including abdominoplasty, liposuction, body lifts, and post-weight loss reconstruction to achieve improved body proportions and contours.",
            steps: [
                "Comprehensive body analysis and surgical planning",
                "Pre-operative marking of treatment areas",
                "Tumescent anesthesia or general anesthesia",
                "Strategic incision placement for minimal scarring",
                "Liposuction using advanced techniques",
                "Excess skin and tissue removal",
                "Muscle repair and tightening when indicated",
                "Multi-layer closure and compression garment application"
            ],
            recovery: "Recovery varies by procedure complexity. Most patients need 2-4 weeks off work, with full recovery in 3-6 months. Compression garments are worn for 6-8 weeks to optimize results."
        }
    },
    
    skin: {
        title: "Skin Cancer Surgery",
        animation: `
            <div class="skin-animation">
                <div class="skin-surface">
                    <div class="lesion"></div>
                    <div class="excision-outline"></div>
                </div>
                <div class="scalpel"></div>
            </div>
        `,
        info: {
            description: "Advanced skin cancer treatment including Mohs surgery, wide local excision, and complex reconstruction. Combining oncological excellence with aesthetic outcomes.",
            steps: [
                "Lesion assessment and biopsy confirmation",
                "Surgical planning with appropriate margins",
                "Local anesthesia administration",
                "Precise lesion excision with clear margins",
                "Immediate pathological examination when needed",
                "Defect assessment and reconstruction planning",
                "Reconstruction using appropriate technique",
                "Careful closure for optimal cosmetic result"
            ],
            recovery: "Most procedures heal within 2-3 weeks. Larger reconstructions may require 4-6 weeks. Regular follow-up is essential for cancer surveillance and optimal healing assessment."
        }
    },
    
    reconstructive: {
        title: "Reconstructive Surgery",
        animation: `
            <div class="reconstructive-animation">
                <div class="tissue-flap"></div>
                <div class="defect-area"></div>
                <div class="suture-line"></div>
                <div class="blood-vessel"></div>
            </div>
        `,
        info: {
            description: "Complex reconstructive procedures following trauma, cancer treatment, or congenital conditions using advanced microsurgical techniques and tissue transfer methods.",
            steps: [
                "Comprehensive defect analysis and planning",
                "Donor site selection and preparation",
                "Recipient site preparation",
                "Microsurgical tissue transfer",
                "Vascular anastomosis under magnification",
                "Neural repair when indicated",
                "Tissue inset and contouring",
                "Multi-stage procedures when necessary"
            ],
            recovery: "Recovery is procedure-specific but typically involves 1-2 weeks hospitalization for free tissue transfers, followed by 6-12 weeks of healing. Multiple stages may be required for optimal results."
        }
    }
};

// Modal functionality
function showProcedure(procedureType) {
    const modal = document.getElementById('procedureModal');
    const modalTitle = document.getElementById('modalTitle');
    const animationContainer = document.getElementById('animationContainer');
    const procedureInfo = document.getElementById('procedureInfo');
    
    const data = procedureData[procedureType];
    
    modalTitle.textContent = data.title;
    animationContainer.innerHTML = data.animation;
    
    procedureInfo.innerHTML = `
        <h3>Procedure Overview</h3>
        <p>${data.info.description}</p>
        
        <div class="procedure-steps">
            <h4>Surgical Steps</h4>
            <ol>
                ${data.info.steps.map(step => `<li>${step}</li>`).join('')}
            </ol>
        </div>
        
        <div class="recovery-info">
            <h4>Recovery & Expectations</h4>
            <p>${data.info.recovery}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add animation restart functionality
    setTimeout(() => {
        const animationElements = animationContainer.querySelectorAll('[class*="animation"]');
        animationElements.forEach(element => {
            element.style.animationPlayState = 'running';
        });
    }, 100);
}

function closeModal() {
    const modal = document.getElementById('procedureModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('procedureModal');
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation for modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.procedure-card, .qual-section, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add loading animation to procedure cards
    document.querySelectorAll('.procedure-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
    
    // Counter animation for hero stats
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            if (typeof target === 'string') {
                element.textContent = target;
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 20);
    }
    
    // Initialize counter animations when hero section is visible
    const heroObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    if (text.includes('+')) {
                        const number = parseInt(text.replace('+', ''));
                        animateCounter(stat, number);
                    }
                });
                heroObserver.unobserve(entry.target);
            }
        });
    });
    
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Add CSS class for fade in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.6s ease forwards;
    }
    
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
`;
document.head.appendChild(style);