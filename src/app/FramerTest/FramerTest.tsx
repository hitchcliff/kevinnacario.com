import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from './assets/1.jpg';

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export default function FramerTest() {
  return (
    <div>
      <Link to="/framer/2">
        <motion.img whileHover={{ scale: 1.1 }} transition={transition} className="w-1/4 h-1/4 object-cover" src={Image} alt="" />
      </Link>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={transition}>
        <div>Yasmeen Tariq</div>
        <div>28.538336 -81.379234</div>
      </motion.div>
    </div>
  );
}
