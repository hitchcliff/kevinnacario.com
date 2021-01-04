import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '../../components';
import { slideUpV2FrameAnim } from '../../components/animation/slide';
import Heading from '../../components/Heading/Heading';

export default function Me() {
  return (
    <motion.div className="py-28 px-10 md:px-56" {...slideUpV2FrameAnim}>
      <div className="flex flex-col flex-wrap lg:gap-40 lg:flex-nowrap lg:flex-row">
        <div className="w-full shadow-xl lg:w-1/2 ">Video of me to be added</div>
        <div className="w-full mt-10 lg:w-1/2 lg:mt-0">
          <Heading num="2">A short introduction</Heading>
          <p className="mt-10">
            Hello, my name is Kevin, I've been building websites and performed testing to different technology. Life was so tough as a Self-taught
            Developer because I have no connection to rely on. I can't stop either, I've decided this skills will get me out of poverty and I'll take
            any dimly chances. Everything I've learned is from hardwork and experience, I thank you for reading this.
          </p>
          <div className="mt-5">
            <CustomButton>Contact</CustomButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
