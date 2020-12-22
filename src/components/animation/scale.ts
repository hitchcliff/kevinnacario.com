import { transition } from './stagger';

export const scaleFrameAnim = {
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
    y: -100,
    scale: 0,
    opacity: 0,
  },
};
