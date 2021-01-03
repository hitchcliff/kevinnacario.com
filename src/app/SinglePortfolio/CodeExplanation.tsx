import { motion } from 'framer-motion';
import React from 'react';
import { CustomButton } from '../../components';
import { slideDownFrameAnim, slideUpV2FrameAnim } from '../../components/animation/slide';
import Heading from '../../components/Heading/Heading';

interface CodeExplanationProps {
  video_description: string;
  video_url: string;
  github_url: string;
}

export default function CodeExplanation({ video_description, video_url, github_url }: CodeExplanationProps) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-10 pt-24 lg:gap-20 lg:flex-nowrap ">
      <motion.div className="w-full h-full lg:w-1/2" {...slideUpV2FrameAnim}>
        <iframe
          className="w-full h-four md:h-five"
          title="single portfolio"
          src={video_url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
      <motion.div className="w-full pr-10 px-10 lg:px-0 lg:pr-56 lg:w-1/2 " {...slideDownFrameAnim}>
        <Heading num="2">Code explanation</Heading>
        <p className="mt-10">{video_description}</p>
        <div className="mt-10">
          <CustomButton>
            <a href={github_url}>Source Code</a>
          </CustomButton>
        </div>
      </motion.div>
    </div>
  );
}
