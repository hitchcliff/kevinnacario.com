import React from 'react';
import { motion } from 'framer-motion';
import { CustomButton } from '../../components';
import { slideUpV2FrameAnim } from '../../components/animation/slide';
import Heading from './Heading';

export default function Me() {
  return (
    <motion.div className="py-28 px-10 md:px-56" {...slideUpV2FrameAnim}>
      <div className="flex flex-col flex-wrap lg:gap-40 lg:flex-nowrap lg:flex-row">
        <div className="w-full shadow-xl lg:w-1/2 ">video</div>
        <div className="w-full mt-10 lg:w-1/2 lg:mt-0">
          <Heading num="2">A short introduction</Heading>
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa delectus eveniet adipisci similique dolor inventore quaerat atque a itaque,
            fuga officia voluptatum impedit. Debitis quos ducimus totam neque sequi distinctio quia quasi suscipit porro earum, omnis a saepe.
            Consequatur obcaecati iste culpa voluptate necessitatibus molestias illum exercitationem eligendi. Iste, nostrum?
          </p>
          <div className="mt-5">
            <CustomButton>Contact</CustomButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
