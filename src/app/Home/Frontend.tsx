import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePattern } from '../../routes/RoutePattern';
import { motion } from 'framer-motion';
import { slideUpStagger, stagger } from '../../components/animation/stagger';
import { selectAllPortfolioSelector } from '../../features/Portfolio/portfolio.selector';
import { useSelector } from 'react-redux';
import { Loading } from '../../components';
import usePortfolioService from '../Hooks/usePortfolioService';
import { slideUpV2FrameAnim } from '../../components/animation/slide';

export const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const hover = {
  whileHover: { scale: 1.1 },
  transition,
};

export default function Frontend() {
  const portfolio = useSelector(selectAllPortfolioSelector);
  const { selectPortfolioId } = usePortfolioService();

  if (!portfolio) return <Loading />;

  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <div className="w-3/4 m-auto py-24">
        <motion.h2 {...slideUpV2FrameAnim} className="font-medium text-lg">
          Frontend
        </motion.h2>
        <motion.div variants={stagger} className="grid gap-5 mt-10 md:grid-cols-3">
          {portfolio.map((item) => (
            <motion.div variants={slideUpStagger} key={item.id}>
              <div className="overflow-hidden">
                <Link
                  to={`${RoutePattern.Portfolio}/${item.slug}/${item.id}`}
                  onClick={() => selectPortfolioId(item.id)}
                >
                  <motion.img
                    {...hover}
                    className="w-full h-80 object-cover"
                    src={item.mockup}
                    alt={item.title}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
