export const motionConfig = {
  preset: "calm-luxury",

  global: {
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    reducedMotion: true,
  },

  hero: {
    slideshow: {
      interval: 6000,
      transitionDuration: 1500,
      scale: 1.05,
      animationDuration: 7500,
      easing: "ease-out",
    },
    parallax: {
      subtle: {
        maxImgShift: 4,
        maxGridShift: 8,
      },
      medium: {
        maxImgShift: 8,
        maxGridShift: 12,
      },
    },
  },
};
