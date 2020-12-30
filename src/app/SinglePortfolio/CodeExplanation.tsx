import { motion } from 'framer-motion';
import React from 'react';
import { CustomButton } from '../../components';
import { slideDownFrameAnim, slideUpV2FrameAnim } from '../../components/animation/slide';

export default function CodeExplanation() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-10 pt-0 pb-24 lg:pt-24 lg:gap-20 lg:flex-nowrap">
      <motion.div className="w-full lg:w-1/2" {...slideUpV2FrameAnim}>
        <video width="100%" height="100%" controls>
          <source src="https://www.youtube.com/watch?v=jnLSYfObARA&list=PLGmxyVGSCDKvmLInHxJ9VdiwEb82Lxd2E" />
        </video>
      </motion.div>
      <motion.div className="w-full pr-10 px-10 lg:px-0 lg:pr-56 lg:w-1/2 " {...slideDownFrameAnim}>
        <h2>Code explanation</h2>
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora veniam illo vitae, quod aspernatur. Mollitia veritatis quia, fugiat
          debitis alias voluptate magni quasi consequatur explicabo distinctio natus voluptatem expedita error velit soluta maiores sed officia quos
          quae labore culpa delectus. Tempora ipsum atque veniam at rem nobis ut esse.
        </p>
        <div className="mt-10">
          <CustomButton>Source Code</CustomButton>
        </div>
      </motion.div>
    </div>
  );
}
