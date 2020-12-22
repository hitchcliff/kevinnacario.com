import Large from './Large';
import Small from './Small';
import { motion } from 'framer-motion';
import { scaleFrameAnim } from '../../components/animation/scale';

export default function Header() {
  return (
    <motion.nav {...scaleFrameAnim} className="px-10 shadow-sm py-5 sticky top-0 bg-white z-20 md:px-40">
      <Large />
      <Small />
    </motion.nav>
  );
}
