$(document).ready(function () {
    $(document).mousemove(function (e) {
        $('#squareCursor').stop().animate({
            left: e.pageX - 10,
            top: e.pageY - 10
        }, 60); // Smooth follow
    });
});

const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {

        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 1200px (desktop)
        1200: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        disableonInteraction: false,
    }
});

const offcanvasElement = document.getElementById('offcanvasNavbar');
if (offcanvasElement) {
    offcanvasElement.addEventListener('show.bs.offcanvas', () => {
        document.body.classList.add('offcanvas-active');
    });

    offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
        document.body.classList.remove('offcanvas-active');
    });
}
// gsap Animation
gsap.registerPlugin(ScrollTrigger);


gsap.from(".navbar", {
    y: -90,
    duration: 1,
});

gsap.from(".content", {
    y: 90,
    duration: 1,
    stagger: 1,
});

document.querySelectorAll(".section-title").forEach((box) => {
    gsap.from(box, {
        opacity: 0,
        y: -90,
        duration: 1,
        scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "top 50%",
            scrub: 2,
            opacity: 1,
        }
    });
})



gsap.from(".inform .fs-items", {
    opacity: 0,
    y: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".inform .fs-items",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})


gsap.from(".class-item", {
    opacity: 0,
    y: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".class-item",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})


gsap.from(".register-banner", {
    opacity: 0,
    y: -90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".register-banner",
        start: "top 100%",
        end: "top 45%",
        scrub: 2,
        opacity: 1,
    }
})


  

gsap.from(".plan-box", {
    opacity: 0,
    y: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".plan-box",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".first-gym-gallary", {
    opacity: 0,
    x: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".first-gym-gallary",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".second-gym-gallary", {
    opacity: 0,
    x: -90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".second-gym-gallary",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".team-header .team-title", {
    opacity: 0,
    x: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".team-header .team-title",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".team-header a", {
    opacity: 0,
    x: -90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".team-header a",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".trainer-slider", {
    opacity: 0,
    y: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".trainer-slider",
        start: "top 80%",
        end: "top 50%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".location", {
    opacity: 0,
    x: -90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".location",
        start: "top 60%",
        end: "top 90*",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".about img", {
    opacity: 0,
    y: 90,
    duration: 1,
    scrollTrigger: {
        trigger: ".about img",
        start: "top 80%",
        end: "top 90%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".about p", {
    opacity: 0,
    y: -90,
    duration: 1,
    scrollTrigger: {
        trigger: ".about p",
        start: "top 80%",
        end: "top 90%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".about .social-icons a", {
    opacity: 0,
    x: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".about .social-icons a",
        start: "top 80%",
        end: "top 90%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".widgets h5", {
    opacity: 0,
    y: -90,
    duration: 1,
    scrollTrigger: {
        trigger: ".widgets h5",
        start: "top 80%",
        end: "top 90%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".widgets li a", {
    opacity: 0,
    y: -90,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".widgets li a",
        start: "top 80%",
        end: "top 90%",
        scrub: 2,
        opacity: 1,
    }
})

gsap.from(".footer-tips-title h6", {
    opacity: 0,
    y: 90,
    duration: 1,
    stagger: 1,
    scrollTrigger: {
        trigger: ".footer-tips-title h6",
        start: "top 80%",
        end: "top 90%",
        scrub: 2,
        opacity: 1,
    }
})


gsap.from(".copyright-text p", {
    opacity: 0,
    y: 90,
    duration: 1,
})





