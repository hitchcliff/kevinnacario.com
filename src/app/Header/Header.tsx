import React from 'react';
import Large from './Large';
import Small from './Small';
import { motion } from 'framer-motion';
import { slideDownFrameAnim } from '../../components/animation/slide';

export default function Header() {
  return (
    <motion.nav {...slideDownFrameAnim} className="py-5 fixed w-full top-0 z-20 px-5">
      {/* <Large /> */}
      <Small />
    </motion.nav>
  );
}
