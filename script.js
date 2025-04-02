const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    links.forEach(li => {
        li.querySelector('a').classList.remove('active');
        if (li.querySelector('a').getAttribute('href').slice(1) === current) {
            li.querySelector('a').classList.add('active');
        }
    });
});
// Add this to your existing script.js file

document.querySelector('.download-cv').addEventListener('click', function() {
    // Replace 'your-cv.pdf' with your actual CV file path
    const cvUrl = 'your-cv.pdf';
    window.open(cvUrl, '_blank');
});

document.querySelector('.hire-me').addEventListener('click', function() {
    // Smooth scroll to contact section
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Add animation when the about section comes into view
const aboutSection = document.querySelector('#about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

observer.observe(aboutSection);
// Add after your existing code

// Skills section animation
function initSkillsAnimation() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                item.classList.add('animate');
                
                // Animate progress bar
                const progressBar = item.querySelector('.progress');
                const percentage = progressBar.getAttribute('data-percent');
                progressBar.style.width = `${percentage}%`;
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    skillItems.forEach(item => {
        skillsObserver.observe(item);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initSkillsAnimation();
});
/ Function to animate skill progress bars
function animateSkills() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(progress => {
        const percent = progress.getAttribute('data-percent');
        progress.style.width = percent;
    });
}

// Trigger animation when skills section is in view
const skillsSection = document.querySelector('.skills-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
        }
    });
}, { threshold: 0.5 });

observer.observe(skillsSection);


// Typing Animation
const typed = new Typed(".typing", {
    strings: ["Developer", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Scroll Sections
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const scroll = window.scrollY;
        
        if(scroll >= sectionTop && scroll < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});