document.addEventListener('DOMContentLoaded', () => {
    // AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Theme Switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeSwitcher.innerHTML = '<i class="ri-moon-line"></i>';
        } else {
            themeSwitcher.innerHTML = '<i class="ri-sun-line"></i>';
        }
    });

    // Navigation active state
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            const href = item.getAttribute('href').substring(1);
            if (href === current) {
                item.classList.add('active');
            }
        });
    });

    // Smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Contact Form Handling (from old main.js)
    setupContactForm();
});

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    const notificationArea = document.getElementById('notificationArea');
    const submitBtn = document.getElementById('submitBtn');

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="btn-loader"></span> Sending...';
        
        try {
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                throw new Error('Please fill all required fields');
            }

            // Email validation
            if (!/^[^S@]+S[^S@]+S[^S@]+$/.test(formData.email)) {
                throw new Error('Please enter a valid email address');
            }

            // EmailJS integration
            (function(){
                emailjs.init({
                    publicKey: "UMj55DorNyy-sC8Tk",
                });
            })();
            
            await emailjs.send("service_p4k8tjw", "template_us9jypu", formData);
            
            showNotification('success', 'Message sent successfully! I\'ll get back to you soon.');
            
            contactForm.reset();
        } catch (error) {
            console.error('Error:', error);
            showNotification('error', error.message || 'There was an error sending your message. Please try again.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });

    function showNotification(type, message) {
        notificationArea.innerHTML = '';
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = type === 'success' ? 'ri-check-line' : 'ri-error-warning-line';
        notification.innerHTML = `<i class="${icon}"></i> ${message}`;
        
        notificationArea.appendChild(notification);
        
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
}