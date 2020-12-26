import { transition } from './stagger';

export const curtainFrameAnimation = {
  initial: {
    top: '-100%',
    left: 0,
  },
  animate: {
    top: 0,
    left: 0,
  },
  exit: {
    top: '100%',
    left: 0,
  },
  transition: {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
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

export const curtainFromTopToBottom = {
  initial: {
    top: '-100%',
    left: 0,
  },
  animate: {
    top: '100%',
    left: 0,
  },
  exit: {
    top: '-100%',
    left: 0,
  },
  transition: {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
  },
};

export const popupFrameAnimation = {
  initial: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  animate: {
    width: '50%',
    height: '50%',
    opacity: 1,
  },
  exit: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  transition: {
    ...transition,
    duration: 0.4,
  },
};
