import React from 'react';
import { motion } from 'framer-motion';
import { curtainFrameAnimation, popupFrameAnimation } from '../animation/curtain';

interface PopupOngoingProjectsProps {
  sensor: (e: boolean) => void;
  children?: any;
}

export default function Popup({ sensor, children }: PopupOngoingProjectsProps) {
  return (
    <motion.div {...curtainFrameAnimation} className="fixed w-full h-full z-10">
      <div className="bg-white w-full h-full opacity-80 z-0" onClick={() => sensor(false)} />
      <motion.div {...popupFrameAnimation} className="bg-white fixed position-center shadow-xl z-10 p-5">
        {children}
      </motion.div>
    </motion.div>
  );
}
