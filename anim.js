let tl = gsap.timeline({
    scollTrigger: {
        trigger: '.dark',
        start: "center bottom"
    }
});

tl.from("img", { x: 500, opacity: 0, duration: 1.5})
    .from(".content", { y: 500, opacity: 0, duration: 1}, "-=1")