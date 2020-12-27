import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CustomButton } from '../../components';
import { RoutePattern } from '../../routes/RoutePattern';
import { motion } from 'framer-motion';
import { transition } from '../Home/Work';

const animation = {
  initial: {
    height: '0%',
    opacity: 0,
  },
  animate: {
    height: 'auto',
    opacity: 1,
  },
  exit: {
    height: '0%',
  },
  transition,
};

export default function Small() {
  const [toggle, set] = useState(false);
  return (
    <div className="relative block sm:hidden">
      <div className="flex flex-row items-center gap-2">
        <div>
          <Link to={RoutePattern.Home}>
            <p className="text-2xl font-light">
              Kev<span className="logo">iN</span>
            </p>
          </Link>
        </div>
        <div className="ml-auto">
          <CustomButton>Résumé</CustomButton>
        </div>
        <div onClick={() => set(!toggle)}>
          {toggle ? (
            <svg className="w-5 h5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </div>
      {toggle && (
        <motion.div {...animation} className="absolute bg-white z-10 w-1/2 shadow p-5 right-0 top-14">
          <motion.ul
            initial={{ transform: 'translateY(-100%)', opacity: 0 }}
            animate={{ transform: 'translateY(0%)', opacity: 1 }}
            transition={transition}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <Link to={RoutePattern.Home}>Home</Link>
            <Link to={RoutePattern.About}>About</Link>
            <Link to={RoutePattern.Portfolio}>Portfolio</Link>
          </motion.ul>
        </motion.div>
      )}
    </div>
  );
}
