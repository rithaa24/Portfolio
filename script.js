// Navigation and Scrolling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('nav-active'));
        link.classList.add('nav-active');
    });
});

// Mobile Menu Toggle
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Dark Mode Toggle (Simple theme switcher)
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('bg-white');
    document.body.classList.toggle('text-slate-900');
    document.body.classList.toggle('bg-slate-900');
    document.body.classList.toggle('text-slate-200'); 
});

// Contact Form Handling
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('#home');
    const offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
});

// Skill Bars Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Assuming the skill bar div has a data-width attribute set in HTML
            // For example: <div class="bg-gradient-to-r from-cyan-400 to-blue-500 h-4 rounded-full" data-width="95%"></div>
            const skillBarInner = entry.target.querySelector('div'); // Select the inner div
            if (skillBarInner && skillBarInner.dataset.width) {
                skillBarInner.style.width = skillBarInner.dataset.width;
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-bar').forEach(bar => {
    observer.observe(bar);
});