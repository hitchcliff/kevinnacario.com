import Large from './Large';
import Small from './Small';
import { motion } from 'framer-motion';
import { slideDownFrameAnim } from '../../components/animation/slide';

export default function Header() {
  return (
    <motion.nav {...slideDownFrameAnim} className="px-10 shadow-sm py-5 sticky top-0 bg-white z-20 md:px-40">
      <Large />
      <Small />
    </motion.nav>
  );
}
