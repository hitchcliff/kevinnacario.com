import { motion } from 'framer-motion';
import { slideUpStagger, stagger } from '../../components/animation/stagger';

interface TechsProps {
  data: any;
}

export default function Techs({ data }: TechsProps) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" className="mx-auto">
      <motion.ul className="flex flex-row flex-wrap gap-5" variants={stagger}>
        {data.map((item: any, idx: number) => (
          <motion.li className="flex flex-row items-center" key={idx} variants={slideUpStagger}>
            <div>
              <span className="font-semibold uppercase border rounded-full border-gray-600 py-2 px-4">{item.name}</span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
