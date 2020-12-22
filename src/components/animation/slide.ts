export const slideUpFrameAnim = {
  initial: {
    marginTop: -100,
    opacity: 0,
  },
  animate: {
    marginTop: 0,
    opacity: 1,
  },
  exit: {
    marginTop: '50px',
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  transition: {
    delay: 1,
    duration: 1.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};

export const slideUpV2FrameAnim = {
  initial: {
    top: 100,
    opacity: 0,
    scale: 1.2,
  },
  animate: {
    top: 0,
    opacity: 1,
    scale: 1,
  },
  exit: {
    bottom: 50,
    opacity: 0,
    scale: 1.2,
    transition: {
      delay: 0.2,
    },
  },
  transition: {
    delay: 1,
    duration: 1.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};
