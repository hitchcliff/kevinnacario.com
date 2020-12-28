import React from 'react';
import { CustomButton } from '../../components';
import SampleImage from '../../assets/images/lpado.jpg';
import { motion } from 'framer-motion';
import CodeExplanation from './CodeExplanation';
import Screens from './Screens';
import Description from './Description';

interface SinglePortfolioProps {
  match: { params: { id: string } };
}

export default function SinglePortfolio({ match }: SinglePortfolioProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center gap-10 flex-col-reverse pb-10 lg:pb-0 lg:flex-row lg:px-56 lg:flex-nowrap bg-white">
        <div className="w-1/2 mr-auto px-10 lg:px-0">
          <h1 className="text-5xl font-light">Lpado</h1>
          <div className="mt-5 lg:mt-10">
            <CustomButton>Visit site</CustomButton>
          </div>
        </div>
        <div className="w-full h-full">
          <img className="h-full w-full object-cover" src={SampleImage} alt="" />
        </div>
      </div>
      <Description />
      <Screens />
      <CodeExplanation />
    </div>
  );
}
