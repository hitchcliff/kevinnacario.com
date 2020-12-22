export const slideUpFrameAnim = {
  initial: {
    marginTop: '-100px',
    opacity: 0,
  },
  animate: {
    marginTop: '0px',
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    marginTop: '-100px',
  },
};

export const slideUpV2FrameAnim = {
  initial: {
    top: 100,
    opacity: 0,
  },
  animate: {
    top: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.6,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  exit: {
    top: 100,
  },
};
