"use strict";

document.addEventListener("DOMContentLoaded", function () {
    /* =====================================
		TESTIMONIALS SLIDER
	======================================== */
    var testimonialsSlider = new Swiper(".testimonials-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
        },
    });

    /* =====================================
		VIDEO MODAL
	======================================== */
    new ModalVideo(".js-modal-btn");

    /* =====================================
		NAVBAR BEHAVIOR
	======================================== */
    window.addEventListener("scroll", navBehavior);
    window.addEventListener("load", navBehavior);

    function navBehavior() {
        /*

        To fix the nav bar active behavior - modify the code below

         */

        //  if (window.scrollY > 1000) {
        //     document.querySelector(".navbar").classList.add("active");
        // } else {
        //     document.querySelector(".navbar").classList.remove("active");
        // }
        //
        // if (window.scrollY > 200) {
        //     document.querySelector("#scrollTop").classList.add("active");
        // } else {
        //     document.querySelector("#scrollTop").classList.remove("active");
        // }

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(event) {
                const sectionId = link.getAttribute('href'); // Get section id from link href
                document.querySelector('.active').classList.remove('active'); // Remove active class from current active section
                document.querySelector(sectionId).classList.add('active'); // Add active class to new section
                link.classList.add('active'); // Add active class to clicked link
            });
        });


    }

    /* =====================================
		MOVE TO TOP OF THE PAGE
	======================================== */
    document
        .getElementById("scrollTop")
        .addEventListener("click", function (e) {
            e.preventDefault();
            window.scrollTo(0, 0);
        });

    /* =====================================================
		BOOTSTRAP SCROLLSPY
	===================================================== */
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbar",
    });
});
