import { motion } from 'framer-motion';
import { CustomButton } from '../../components';
import AboutImage from './assets/about-hero1.png';

import ReactImg from './assets/react.png';
import ReduxImg from './assets/redux.png';
import TsImg from './assets/ts.png';
import JestImg from './assets/jest.png';
import Skills from './Skills';
import Me from './Me';

const test = {
  exit: {
    opacity: 0,
  },
};

export default function About() {
  return (
    <motion.div {...test} className="w-full min-h-screen">
      <div className="flex flex-row justify-between items-center bg-gray-100">
        <div className="w-1/2 h-full ml-auto md:px-40">
          <h1 className="font-light text-6xl">About me</h1>
          <p className="mt-5">
            I love coding, learning new technologies <br /> and working more than 12+ hours a day.
          </p>
          <div className="mt-5">
            <CustomButton>Scout</CustomButton>
          </div>
        </div>
        <div className="w-full h-full">
          <img className="w-full object-cover" src={AboutImage} alt="insperity.com" />
        </div>
      </div>
      <Skills />
      <Me />
    </motion.div>
  );
}
