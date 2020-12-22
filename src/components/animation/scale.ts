export const scaleFrameAnim = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 1.8,
      ease: [0.43, 0.53, 0.23, 0.96],
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
  },
};
