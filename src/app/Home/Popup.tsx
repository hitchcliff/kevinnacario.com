import { motion } from 'framer-motion';
import { transition } from './Work';

interface PopupOngoingProjectsProps {
  setClicked: (e: boolean) => void;
}

const animationOne = {
  initial: {
    top: '-100%',
    left: 0,
  },
  animate: {
    top: 0,
    left: 0,
  },
  transition,
};

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

export default function PopupOngoingProjects({ setClicked }: PopupOngoingProjectsProps) {
  return (
    <motion.div {...animationOne} className="fixed w-full h-full z-10">
      <div className="bg-white w-full h-full opacity-80 z-0" onClick={() => setClicked(false)} />
      <motion.div {...animationTwo} className="bg-white fixed position-center shadow-xl z-10">
        <span onClick={() => setClicked(false)}>close</span>
      </motion.div>
    </motion.div>
  );
}
