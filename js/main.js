/**
 * Sicilia in Famiglia — v6.0
 * Nuova struttura + touch swipe testimonianze + 10 destinazioni
 */

document.addEventListener('DOMContentLoaded', function() {

    // ====================
    // INTERSECTION OBSERVER — Animazioni scroll (con fallback)
    // ====================
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

    function observeElements(selector, delay = 0, stagger = 100) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, i) => {
            if (!el.classList.contains('destination-card') && !el.classList.contains('step-card')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(24px)';
                el.style.transition = `opacity 0.7s ease ${i * stagger}ms, transform 0.7s ease ${i * stagger}ms`;
            }

            const obs = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, delay);
                        obs.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            obs.observe(el);
        });
    }

    observeElements('.guarantee-card', 0, 150);
    observeElements('.destination-card', 0, 100);
    observeElements('.step-card', 0, 200);
    observeElements('.testimonial-card', 0, 150);
    observeElements('.section-header', 0, 0);
    observeElements('.package-card', 0, 150);
    observeElements('.faq-item', 0, 80);
    observeElements('.chisiamo-content', 0, 0);

    // ====================
    // HEADER SCROLL EFFECT
    // ====================
    const navbar = document.getElementById('navbar');
    let ticking = false;

    function handleNavScroll() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(28,25,23,0.08)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(handleNavScroll);
            ticking = true;
        }
    }, { passive: true });

    // ====================
    // SMOOTH SCROLL
    // ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // ====================
    // DESTINAZIONI CLICK
    // ====================
    window.openDestination = function(dest) {
        const names = {
            'palermo': 'Palermo',
            'agrigento': 'Agrigento',
            'cefalu': 'Cefalù',
            'taormina': 'Taormina',
            'catania': 'Catania e l\'Etna',
            'siracusa': 'Siracusa',
            'isole-eolie': 'Isole Eolie',
            'san-vito': 'San Vito Lo Capo',
            'ragusa': 'Ragusa',
            'trapani': 'Trapani'
        };
        const text = `Ciao, sono interessato a ${names[dest] || dest}. Vorrei ricevere proposte per una vacanza in Sicilia con la mia famiglia.`;
        window.open(`https://wa.me/393205532756?text=${encodeURIComponent(text)}`, '_blank');
    };

    // ====================
    // TESTIMONIALS CAROUSEL — con touch swipe
    // ====================
    const track = document.querySelector('.testimonials-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;

    function getCardsPerView() {
        if (window.innerWidth <= 640) return 1;
        if (window.innerWidth <= 900) return 2;
        return 3;
    }

    function updateCarousel() {
        if (!track) return;
        const cards = track.querySelectorAll('.testimonial-card');
        const cardsPerView = getCardsPerView();
        const maxSlide = Math.max(0, cards.length - cardsPerView);
        currentSlide = Math.min(currentSlide, maxSlide);
        const cardWidth = cards[0]?.offsetWidth || 300;
        const gap = 20;
        track.style.transform = `translateX(-${currentSlide * (cardWidth + gap)}px)`;
    }

    if (prevBtn && nextBtn && track) {
        prevBtn.addEventListener('click', () => {
            currentSlide = Math.max(0, currentSlide - 1);
            updateCarousel();
        });
        nextBtn.addEventListener('click', () => {
            const cards = track.querySelectorAll('.testimonial-card');
            const maxSlide = Math.max(0, cards.length - getCardsPerView());
            currentSlide = Math.min(maxSlide, currentSlide + 1);
            updateCarousel();
        });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }

    // Touch swipe per mobile
    if (track) {
        let touchStartX = 0;
        let touchEndX = 0;

        track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                const cards = track.querySelectorAll('.testimonial-card');
                const maxSlide = Math.max(0, cards.length - getCardsPerView());
                if (diff > 0) {
                    currentSlide = Math.min(maxSlide, currentSlide + 1);
                } else {
                    currentSlide = Math.max(0, currentSlide - 1);
                }
                updateCarousel();
            }
        }, { passive: true });
    }

    // ====================
    // FAQ ACCORDION
    // ====================
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', function() {
            const item = this.parentElement;
            const wasActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
            if (!wasActive) item.classList.add('active');
        });
    });

    // ====================
    // WHATSAPP TRACKING
    // ====================
    document.querySelectorAll('a[href*="wa.me"]').forEach(btn => {
        btn.addEventListener('click', function() {
            console.log('WhatsApp CTA clicked — Sicilia in Famiglia v6.0');
        });
    });

    // ====================
    // REDUCED MOTION
    // ====================
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.guarantee-card, .destination-card, .step-card, .testimonial-card, .section-header, .package-card, .faq-item, .chisiamo-content').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.transition = 'none';
        });
    }

    console.log('%c Sicilia in Famiglia ', 'background: #BE5423; color: #fff; padding: 8px 16px; border-radius: 4px; font-weight: 500;');
    console.log('%c v6.0 — Nuova struttura ', 'background: #C9A96E; color: #1C1917; padding: 4px 12px; border-radius: 4px;');
});
