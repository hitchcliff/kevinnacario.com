import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import { Frontend, Backend, Principles, Others } from './Data';
import {
  slideDownFrameAnim,
  slideUpFrameAnim,
  slideUpV2FrameAnim,
} from '../../components/animation/slide';
import styled from 'styled-components';
import Techs from './Techs';

const SVGButton = styled.button`
  width: 7rem;
`;

const svg = 'w-8 h-8 m-auto font-light text-gray-500';

const technical = [
  {
    name: 'Front End',
    svg: (
      <svg
        className={svg}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    name: 'Back End',
    svg: (
      <svg
        className={svg}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    name: 'Principle',
    svg: (
      <svg
        className={svg}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    name: 'Others',
    svg: (
      <svg
        className={svg}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function Skills() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  return (
    <div className="relative bg-body min-h-screen flex">
      <div className="w-3/4 h-full m-auto">
        <div className="w-full">
          <Heading num="1">Technical Skills</Heading>
          {/* <motion.div
            className="mt-10 flex flex-row justify-start items-center gap-5"
            {...slideDownFrameAnim}
          >
            {technical.map((item, idx) => (
              <SVGButton
                className="shadow-xl text-center py-3 px-2 rounded-lg bg-white hover:bg-secondary"
                key={idx}
                onClick={() => setCurrentIdx(idx)}
              >
                <span className="block text-black">{item.svg}</span>
                <p className="tracking-wider text-sm font-medium mt-2">{item.name}</p>
              </SVGButton>
            ))}
          </motion.div> */}
          <motion.div className="lg:mb-24" {...slideUpV2FrameAnim}>
            {/* <p>
              Coding for 12+ hours a day will help my mind to think constantly, besides it takes
              more than that to be a good programmer. It's not crazy, this is how it works.
            </p> */}
            <motion.div className="relative w-full h-full" {...slideUpFrameAnim}>
              <Techs clicked={true} data={[...Frontend, ...Backend, ...Principles, ...Others]} />
              {/* <Techs clicked={true} data={Backend} />
              <Techs clicked={true} data={Principles} />
              <Techs clicked={true} data={Others} /> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
