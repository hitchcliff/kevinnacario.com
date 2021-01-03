import React from 'react';
import { motion } from 'framer-motion';
import { slideDownFrameAnim, slideUpV2FrameAnim } from '../../components/animation/slide';
import Concept from './Concept';

interface ScreensProps {
  mobile: string;
  tablet: string;
  desktop: string;
}

export default function Screens({ mobile, tablet, desktop }: ScreensProps) {
  return (
    <div className="py-24">
      {/* desktop */}
      <div className="hidden flex-row flex-wrap items-end sm:px-10 h-four lg:px-56 gap-5 lg:flex-nowrap lg:flex">
        <motion.div className="w-1/2 h-3/4 bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar" {...slideUpV2FrameAnim}>
          <img className="object-cover" src={tablet} alt="sample.jpg" />
        </motion.div>
        <motion.div className="w-full h-full bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar" {...slideDownFrameAnim}>
          <img className="object-cover" src={desktop} alt="sample.jpg" />
        </motion.div>
        <motion.div
          className="w-1/4 h-5/6 bg-white z-10 overflow-hidden shadow-xl overflow-x-hidden overflow-y-scroll vertical-scrollbar"
          {...slideUpV2FrameAnim}
        >
          <img className="object-cover" src={mobile} alt="sample" />
        </motion.div>
      </div>
      {/* end desktop */}
      {/* mobile */}
      <div className="flex flex-row flex-wrap items-center px-10 gap-5 lg:flex-nowrap lg:hidden">
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center sm:flex-nowrap">
          <motion.div className="w-1/2 h-3/4 bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar">
            <img className="object-cover" src={tablet} alt="sample.jpg" />
          </motion.div>
          <motion.div className="w-1/4 h-1/2 bg-white z-10 overflow-hidden shadow-xl overflow-x-hidden overflow-y-scroll vertical-scrollbar">
            <img className="object-cover" src={mobile} alt="sample" />
          </motion.div>
        </div>
        <motion.div className="w-full h-1/2 bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar">
          <img className="object-cover" src={desktop} alt="sample.jpg" />
        </motion.div>
      </div>
      {/* end mobile */}
    </div>
  );
}
