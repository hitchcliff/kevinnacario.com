import { motion } from 'framer-motion';
import React from 'react';
import { slideRight } from '../../components/animation/slide';

export default function Description() {
  return (
    <motion.div className="flex flex-row gap-12 flex-wrap bg-gray-100 py-24 h-1/2  px-10 w-full lg:px-56" {...slideRight}>
      <div>
        <h2>Tags</h2>
        <ul className="flex flex-row flex-nowrap gap-2">
          <li>UI,</li>
          <li>UX,</li>
          <li>Mobile,</li>
          <li>Desktop</li>
        </ul>
      </div>
      <div>
        <h2>Date Finished</h2>
        <div>
          <p>Sept. 1, 2020 - Oct. 1, 2020</p>
        </div>
      </div>
      <div>
        <h2>Overview</h2>
        <div>
          <p>Project built for Technology Testing Purposes</p>
        </div>
      </div>
    </motion.div>
  );
}
