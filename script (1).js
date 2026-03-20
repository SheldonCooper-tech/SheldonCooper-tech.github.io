// Tailwind Configuration (Loaded before CDN)
window.tailwind = {
    config: {
        theme: {
            extend: {
                colors: {
                    brand: {
                        dark: '#0f172a',
                        primary: '#6366f1',
                        secondary: '#818cf8',
                        light: '#e0e7ff',
                        accent: '#10b981'
                    }
                },
                fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                }
            }
        }
    }
};

// Application Logic (Loaded after DOM is ready)
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileMenuBtn.querySelector('i');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        if (mobileMenu.classList.contains('hidden')) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
        } else {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-xmark');
        }
    };

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close mobile menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Form Submission Handling
    const betaForm = document.getElementById('beta-form');
    const successMessage = document.getElementById('success-message');
    const submitBtn = document.getElementById('submit-btn');

    if (betaForm) {
        betaForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Visual feedback for button
            const originalBtnHtml = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');

            // Simulate API Call / Network delay
            setTimeout(() => {
                // Show success message
                successMessage.classList.remove('hidden');

                // Reset form and button
                betaForm.reset();
                submitBtn.innerHTML = originalBtnHtml;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            }, 1000);
        });
    }
});
