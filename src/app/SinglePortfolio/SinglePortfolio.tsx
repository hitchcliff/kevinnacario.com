import React from 'react';
import { CustomButton, Loading } from '../../components';
import { motion } from 'framer-motion';
import CodeExplanation from './CodeExplanation';
import Screens from './Screens';
import Description from './Description';
import { slideDownFrameAnim, slideUpV2FrameAnim } from '../../components/animation/slide';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { portfolioSelector } from '../../features/Portfolio/portfolio.selector';
import { PortfolioTypes } from './types';

interface SinglePortfolioProps {
  match: { params: { id: string } };
}

export default function SinglePortfolio({ match }: SinglePortfolioProps) {
  const id = match.params.id;
  const portfolio: PortfolioTypes | undefined = useSelector((state: RootState) => portfolioSelector.selectById(state, id));

  if (!portfolio) return <Loading />;

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-10 flex-col-reverse py-24 h-nine lg:flex-row lg:px-56 lg:flex-nowrap bg-white">
        <div className="w-full mr-auto px-10 md:w-1/2 lg:px-0">
          <motion.h1 className="text-5xl font-light" {...slideDownFrameAnim}>
            {portfolio.title}
          </motion.h1>
          <motion.div className="mt-5 lg:mt-10" {...slideDownFrameAnim}>
            <CustomButton>
              <a href={portfolio.website_url}>Visit website</a>
            </CustomButton>
          </motion.div>
        </div>
        <div className="w-full h-full">
          <motion.img className="h-full w-full object-cover" src={portfolio.mockup} alt="" {...slideUpV2FrameAnim} />
        </div>
      </div>
      <CodeExplanation video_url={portfolio.video_url} github_url={portfolio.github_url} concept_description={portfolio.concept_description} />
      <Screens mobile={portfolio.images[0]} tablet={portfolio.images[1]} desktop={portfolio.images[2]} />
      <Description tags={portfolio.tags} date_finished={portfolio.date_finished} overview={portfolio.overview} />
    </div>
  );
}
