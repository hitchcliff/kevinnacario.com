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
    y: 50,
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
  transition: {
    duration: 1.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};

export const slideDownFrameAnim = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
      duration: 1.8,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
  },
};

export const slideLeft = {
  initial: {
    x: 2000,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ...transition,
      duration: 1.8,
    },
  },
  exit: {
    x: 2000,
    opacity: 0,
  },
};

export const slideRight = {
  initial: {
    x: -2000,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ...transition,
      duration: 1.8,
    },
  },
  exit: {
    x: -2000,
    opacity: 0,
  },
};
