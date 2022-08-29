import React from 'react';
import { motion } from 'framer-motion';
import { testSlideUpStagger, testStagger } from '../../components/animation/stagger';

interface TechsProps {
  data: any;
  clicked: boolean;
}

export default function Techs({ data, clicked }: TechsProps) {
  return (
    <motion.div initial={false} animate={clicked ? 'visible' : 'hidden'} className="my-2">
      <motion.ul className="flex flex-row flex-wrap gap-5" variants={testStagger}>
        {data.map((item: any, idx: number) => (
          <motion.li key={idx} variants={testSlideUpStagger}>
            <div className="shadow-xl text-center py-3 px-2 rounded-lg bg-white hover:bg-secondary">
              <span className="font-semibold uppercase rounded-full py-2 px-4 inline-block">
                {item.name}
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
