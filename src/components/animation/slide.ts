import { transition } from './stagger';

export const slideUpFrameAnim = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      delay: 0.2,
    },
  },
  transition,
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
    duration: 1.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};
