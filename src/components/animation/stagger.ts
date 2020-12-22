const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const stagger = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 1.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

export const slideUpStagger = {
  initial: {
    y: 400,
    opacity: 0,
    scale: 1.2,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ...transition, duration: 1 },
  },
};
