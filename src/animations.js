import gsap from "gsap";

export const fadeIn = (el) => {
  const tl = gsap.timeline({ paused: true });
  return tl.from(el, {
    autoAlpha: 0,
    duration: 0.8,
    ease: "power4.in",
  });
};
