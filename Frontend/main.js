document.addEventListener('DOMContentLoaded', () => {
    // AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Theme Switcher
    const themeSwitcher = document.querySelector('.theme-switcher');
    const body = document.body;

    const applyTheme = (isDark) => {
        body.classList.toggle('dark-mode', isDark);
        if (themeSwitcher) {
            themeSwitcher.innerHTML = isDark
                ? '<i class="ri-moon-line"></i>'
                : '<i class="ri-sun-line"></i>';
        }
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyTheme(true);
    } else if (savedTheme === 'light') {
        applyTheme(false);
    } else {
        applyTheme(body.classList.contains('dark-mode'));
    }

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', () => {
            const nextIsDark = !body.classList.contains('dark-mode');
            applyTheme(nextIsDark);
            localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
        });
    }

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
    const messageField = document.getElementById('message');
    const charCounter = document.getElementById('charCounter');

    // Character counter functionality
    if (messageField && charCounter) {
        messageField.addEventListener('input', () => {
            const currentLength = messageField.value.length;
            charCounter.textContent = `${currentLength}/500`;
            
            if (currentLength > 500) {
                charCounter.style.color = '#ef4444';
            } else if (currentLength < 10) {
                charCounter.style.color = '#f59e0b';
            } else {
                charCounter.style.color = 'var(--text-light-secondary)';
            }
        });
    }

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
            
            // Enhanced validation with character limits
            if (formData.name.length < 2) {
                throw new Error('Name must be at least 2 characters long');
            }
            
            if (formData.message.length < 10) {
                throw new Error('Message must be at least 10 characters long');
            }
            
            if (formData.message.length > 500) {
                throw new Error('Message must be less than 500 characters');
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