gsap.registerPlugin(ScrollTrigger)

const marquee = document.querySelector('.marquee')
const bgs = gsap.utils.toArray('.section-t-bg')

gsap.fromTo('.marquee-items', 12, {
    xPercent: 0,
}, {
    xPercent: -100,
    ease:Linear.easeNone,
    repeat: -1,
})


bgs.forEach((bg) => {
    gsap.fromTo(bg, .75, {
        scaleX: 0,
        transformOriginX: '0%'
    }, {
        scaleX: 1,
        scrollTrigger: {
            trigger: bg,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: 2
        }
    })
})

gsap.fromTo('.email-bg', 1, {
    scaleX: 0
}, {
    scaleX: 1,
    scrollTrigger: {
        trigger: '.email-bg',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 2
    }
})