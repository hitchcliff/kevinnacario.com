import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components';
import { RoutePattern } from '../../routes/RoutePattern';
import { motion } from 'framer-motion';
import { transition } from '../Home/Fullstack';
import { curtainFrameAnimation } from '../../components/animation/curtain';
import PDF from '../../assets/resume_kevin.pdf';

const variants = {
  hidden: {
    top: '-100%',
    opacity: 0,
    transition,
  },
  animate: {
    top: '0%',
    opacity: 1,
    transition,
  },
};

export default function Small() {
  const [toggle, set] = useState(false);
  return (
    <div className="relative block">
      <motion.div
        initial="initial"
        animate={toggle ? 'animate' : 'hidden'}
        variants={variants}
        className="fixed top-0 left-0 h-screen z-10 w-full flex justify-center items-center gradient"
      >
        <button
          onClick={() => set(false)}
          className="absolute top-5 left-5 bg-body p-3 rounded-full hover:bg-main"
        >
          <svg
            className="w-5 h5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <motion.ul className="flex flex-col gap-2 items-center justify-center text-2xl font-bold">
          <Link to={RoutePattern.Home} onClick={() => set(!toggle)}>
            Home
          </Link>
          <Link to={RoutePattern.About} onClick={() => set(!toggle)}>
            About
          </Link>
          <Link to={RoutePattern.Skills} onClick={() => set(!toggle)}>
            Skills
          </Link>
          <Link to={RoutePattern.Portfolio} onClick={() => set(!toggle)}>
            Portfolio
          </Link>
        </motion.ul>
      </motion.div>

      <div className="flex flex-row gap-2 items-center">
        <button onClick={() => set(!toggle)} className="top-5 left-0 p-3 rounded-full">
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <CustomButton>
          <a href={PDF} target="_blank" rel="norefferer" download>
            Résumé
          </a>
        </CustomButton>
      </div>
    </div>
  );
}
