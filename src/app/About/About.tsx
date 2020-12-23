import { motion } from 'framer-motion';
import { CustomButton } from '../../components';
import { slideDownFrameAnim, slideLeft, slideRight } from '../../components/animation/slide';
import Skills from './Skills';
import AboutHero from './AboutHero';
import Me from './Me';

export default function About() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" className="w-full min-h-screen">
      <motion.div className="flex flex-row justify-between items-center bg-gray-100">
        <motion.div className="w-1/2 ml-auto md:px-40" {...slideRight}>
          <motion.h1 className="font-light text-6xl" {...slideDownFrameAnim}>
            About me
          </motion.h1>
          <motion.p className="mt-5" {...slideDownFrameAnim}>
            I love coding, learning new technologies <br /> and working more than 12+ hours a day.
          </motion.p>
          <motion.div className="mt-5" {...slideDownFrameAnim}>
            <CustomButton>Scout</CustomButton>
          </motion.div>
        </motion.div>
        <motion.div className="w-full" style={{ height: '60vh' }} {...slideLeft}>
          <AboutHero />
        </motion.div>
      </motion.div>
      <Skills />
      <Me />
    </motion.div>
  );
}
