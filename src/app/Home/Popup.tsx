import { motion } from 'framer-motion';
import { curtainFrameAnimation } from '../../components/animation/curtain';
import { transition } from './Work';

const animationTwo = {
  initial: {
    width: 0,
    height: 0,
  },
  animate: {
    width: '50%',
    height: '50%',
  },
  transition,
};

interface PopupOngoingProjectsProps {
  setClicked: (e: boolean) => void;
}

export default function PopupOngoingProjects({ setClicked }: PopupOngoingProjectsProps) {
  return (
    <motion.div {...curtainFrameAnimation} className="fixed w-full h-full z-10">
      <div className="bg-white w-full h-full opacity-80 z-0" onClick={() => setClicked(false)} />
      <motion.div {...animationTwo} className="bg-white fixed position-center shadow-xl z-10">
        <span onClick={() => setClicked(false)}>close</span>
      </motion.div>
    </motion.div>
  );
}
