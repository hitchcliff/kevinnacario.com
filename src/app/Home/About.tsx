import React, { useState } from 'react';
import { CustomButton, Popup } from '../../components';
import { AnimatePresence, motion } from 'framer-motion';
import { slideDownFrameAnim, slideUpV2FrameAnim } from '../../components/animation/slide';
import { RoutePattern } from '../../routes/RoutePattern';

export default function About() {
  const [clicked, setClicked] = useState(false);

  function handleClick(val: boolean) {
    setClicked(val);
  }

  return (
    <div className="w-3/4 m-auto py-24 flex gap-10 flex-row flex-wrap items-start justify-between sm:flex-nowrap lg:gap-60">
      <motion.div {...slideUpV2FrameAnim}>
        <h2 className="font-medium text-lg">About</h2>
        <p className="mt-10 leading-loose">
          I am seeking a position either Frontend or Jr. Fullstack Developer in a reputable organization. I build websites using React, my interest is
          to build fully RTL black box tests to Fullstack applications. I was able to build an awesome UI, application for the web. Has 2+ years of
          experience to Coding.
        </p>
        <div className="mt-7 ">
          <CustomButton handleClick={handleClick}>Ongoing Projects</CustomButton>
        </div>
      </motion.div>
      <motion.div {...slideDownFrameAnim}>
        <h2 className="font-medium text-lg">Contact</h2>
        <div className="mt-10">
          <p className="leading-loose">contact@kevinnacario.com</p>
          <p className="leading-loose">+63 9268339430</p>
        </div>
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {clicked && (
          <Popup sensor={setClicked}>
            <div className="w-full h-full bg-white">
              <iframe
                title="ongoing projects"
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/vma2YnRHvNA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="mt-10 flex flex-row items-center flex-wrap gap-5">
                <CustomButton link={RoutePattern.Portfolio}>Other projects</CustomButton>
                <a className="underline text-md text-gray-600" href="https://github.com/hitchcliff/dashboard-laravel">
                  Github
                </a>
              </div>
              <p className="mt-5 italic">Try checking my other Fullstack applications as well within my Github repository.</p>
            </div>
          </Popup>
        )}
      </AnimatePresence>
    </div>
  );
}
