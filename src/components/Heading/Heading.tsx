import React from 'react';
import { motion } from 'framer-motion';
import { slideUpV2FrameAnim } from '../animation/slide';

export default function Heading({ children, num }: any) {
  return (
    <motion.div className="flex flex-row gap-2 items-baseline" {...slideUpV2FrameAnim}>
      <span className="block w-6 h-6 text-center rounded-full shadow-md border border-black">{num}</span>
      <h2>{children}</h2>
    </motion.div>
  );
}
