(function () {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            const spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Initiate the WOW.js
    new WOW().init();

    // Fixed Navbar
    const fixedTop = document.querySelector('.fixed-top');
    const topBar = document.querySelector('.top-bar');

    // Set initial top position
    if (topBar) {
        fixedTop.style.top = topBar.offsetHeight + 'px';
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            fixedTop.classList.add('bg-dark');
            fixedTop.style.top = '0';
        } else {
            fixedTop.classList.remove('bg-dark');
            fixedTop.style.top = topBar.offsetHeight + 'px';
        }
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.display = 'flex'; // Show
        } else {
            backToTop.style.display = 'none'; // Hide
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        return false;
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        loop: true,
        nav: true,
        dots: false,
        items: 1,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})();
