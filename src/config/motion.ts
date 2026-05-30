export const motionConfig = {
  preset: "calm-documentary",

  global: {
    easing: "cubic-bezier(0.22, 1, 0.36, 1)",
    reducedMotion: true,
  },

  brand: {
    wordmark: {
      type: "quiet-presence",
      duration: 12000,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      translateY: -0.25,
    },
  },

  hero: {
    slideshow: {
      interval: 9000,
      transitionDuration: 1800,
      scale: 1.025,
      animationDuration: 9500,
      easing: "ease-out",
    },
    parallax: {
      subtle: {
        maxImgShift: 2,
        maxGridShift: 3,
      },
      medium: {
        maxImgShift: 3,
        maxGridShift: 5,
      },
    },
  },
};
