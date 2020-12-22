export const curtainFrameAnimation = {
  initial: {
    top: '-100%',
    left: 0,
  },
  animate: {
    top: 0,
    left: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

export const curtainFromLeftToRight = {
  initial: {
    left: '-100%',
    opacity: 0.4,
  },
  animate: {
    opacity: 1,
    left: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
