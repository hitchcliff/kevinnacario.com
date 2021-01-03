import { motion } from 'framer-motion';
import React from 'react';
import { slideRight } from '../../components/animation/slide';

interface DescriptionProps {
  tags: string[];
  date_finished: Date;
  overview: string;
}

export default function Description({ tags, date_finished, overview }: DescriptionProps) {
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const today = new Date(date_finished);

  return (
    <motion.div className="mt-24 flex flex-row gap-12 flex-wrap bg-gray-100 py-24 h-1/2  px-10 w-full lg:px-56" {...slideRight}>
      <div>
        <h2>Tags</h2>
        <ul className="flex flex-row flex-nowrap gap-2">
          {tags.map((item, idx) => (
            <li key={idx}>{idx === tags.length - 1 ? item : item + ', '}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Date Finished</h2>
        <div>
          <p>{today.toLocaleDateString('en-US', options)}</p>
        </div>
      </div>
      <div>
        <h2>Overview</h2>
        <div>
          <p>{overview}</p>
        </div>
      </div>
    </motion.div>
  );
}
