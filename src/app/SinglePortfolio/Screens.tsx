import React from 'react';
import { motion } from 'framer-motion';
import DesktopMockup from '../../assets/images/sample.png';
import MobileMockup from '../../assets/images/sample_mobile.png';
import TabletMockup from '../../assets/images/sample_tablet.png';
import { slideDownFrameAnim, slideUpV2FrameAnim } from '../../components/animation/slide';
import Concept from './Concept';

export default function Screens() {
  return (
    <div className="pb-24 pt-24">
      {/* desktop */}
      <div className="hidden flex-row flex-wrap items-center sm:px-10 lg:px-56 gap-5 lg:flex-nowrap lg:flex">
        <motion.div className="w-1/2 h-3/4 bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar" {...slideUpV2FrameAnim}>
          <img className="object-cover" src={TabletMockup} alt="sample.jpg" />
        </motion.div>
        <motion.div className="w-full h-full bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar" {...slideDownFrameAnim}>
          <img className="object-cover" src={DesktopMockup} alt="sample.jpg" />
        </motion.div>
        <motion.div
          className="w-1/4 h-5/6 bg-white z-10 overflow-hidden shadow-xl overflow-x-hidden overflow-y-scroll vertical-scrollbar"
          {...slideUpV2FrameAnim}
        >
          <img className="object-cover" src={MobileMockup} alt="sample" />
        </motion.div>
      </div>
      {/* end desktop */}
      {/* mobile */}
      <div className="flex flex-row flex-wrap items-center px-10 gap-5 lg:flex-nowrap lg:hidden">
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center sm:flex-nowrap">
          <motion.div className="w-1/2 h-3/4 bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar">
            <img className="object-cover" src={TabletMockup} alt="sample.jpg" />
          </motion.div>
          <motion.div className="w-1/4 h-1/2 bg-white z-10 overflow-hidden shadow-xl overflow-x-hidden overflow-y-scroll vertical-scrollbar">
            <img className="object-cover" src={MobileMockup} alt="sample" />
          </motion.div>
        </div>
        <motion.div className="w-full h-1/2 bg-white shadow-xl z-0 overflow-x-hidden overflow-y-scroll vertical-scrollbar">
          <img className="object-cover" src={DesktopMockup} alt="sample.jpg" />
        </motion.div>
      </div>
      {/* end mobile */}
      <Concept />
    </div>
  );
}
