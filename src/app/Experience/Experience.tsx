import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '../../components';
import { slideUpV2FrameAnim } from '../../components/animation/slide';
import Heading from '../../components/Heading/Heading';

export default function Experience() {
  return (
    <motion.div className="py-28 px-10  md:px-56" {...slideUpV2FrameAnim}>
      <div className="flex flex-col flex-wrap lg:gap-40 lg:flex-nowrap lg:flex-row">
        {/* <div className="w-full shadow-xl lg:w-1/2 ">Video of me to be added</div> */}
        <div className="w-full mt-10 lg:w-1/2 lg:mt-0">
          <Heading num="2">Experience</Heading>
          <p className="mt-10">
            Software Developer
            <span>23 MAPLE ST. PEPERREL, MA (JAN. 2021 - Present)</span>
          </p>
          <div className="mt-5">
            <CustomButton>Contact</CustomButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
