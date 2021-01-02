import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePattern } from '../../routes/RoutePattern';
import Image1 from '../../assets/images/real-estate.jpg';
import Image2 from '../../assets/images/lpado.jpg';
import Image3 from '../../assets/images/onepage-studio.jpg';
import Image4 from '../../assets/images/quiz-app-2.png';
import Image5 from '../../assets/images/react-best-tourist.jpg';
import Image6 from '../../assets/images/resort-ui.jpg';
import { motion } from 'framer-motion';
import { slideUpStagger, stagger } from '../../components/animation/stagger';
import usePortfolioService from '../Hooks/usePortfolioService';

const Portfolio = [Image1, Image2, Image3, Image4, Image5, Image6];

export const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const hover = {
  whileHover: { scale: 1.1 },
  transition,
};

export default function Work() {
  const { getPortfolioItems } = usePortfolioService();
  getPortfolioItems();
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <motion.div variants={stagger} className="grid gap-5 w-3/4 m-auto mt-16 md:grid-cols-3">
        {Portfolio.map((item, idx) => (
          <motion.div variants={slideUpStagger} key={idx}>
            <div className="overflow-hidden">
              <Link to={`${RoutePattern.Portfolio}/${idx}`}>
                <motion.img {...hover} className="w-full h-80 object-cover" src={item} alt={item} />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
