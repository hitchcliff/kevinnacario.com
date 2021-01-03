import React from 'react';
import AuthorImage from './assets/images/kevin.jpg';
import Image1 from '../../assets/images/real-estate.jpg';
import Item from './Item';
import ReactFullpage from '@fullpage/react-fullpage';
import { AnimatePresence, motion } from 'framer-motion';
import { TweenLite, Power3 } from 'gsap';
import { curtainFromTopToBottom } from '../../components/animation/curtain';
import { slideDownFrameAnim, slideUpFrameAnim } from '../../components/animation/slide';

export default function Portfolio() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <AnimatePresence initial exitBeforeEnter>
        <motion.div {...curtainFromTopToBottom} className="fixed w-full h-full z-20 bg-gray-100" />
      </AnimatePresence>
      <div className="px-10 py-0 md:px-56">
        <ReactFullpage
          scrollingSpeed={700}
          navigation
          navigationPosition="left"
          navigationTooltips={['firstSlide', 'secondSlide']}
          navigationTooltip
          anchors={['firstPage', 'secondPage']}
          onLeave={(_: any, destination: any, __: any) => {
            const section = destination.item;
            const tags = section.querySelector('#tags');
            const title = section.querySelector('#title');
            const more = section.querySelector('#more');
            const authorInfo = section.querySelector('#author-info');
            const showcase = section.querySelector('#showcase');
            const showcaseImage = section.querySelector('#showcase-image');

            // slide to right
            TweenLite.from(tags, 0.8, {
              opacity: 0,
              x: -80,
              ease: Power3.easeOut,
              delay: 0.2,
            });
            TweenLite.from(title, 0.8, {
              opacity: 0,
              x: -80,
              ease: Power3.easeOut,
              delay: 0.4,
            });
            TweenLite.from(more, 0.8, {
              opacity: 0,
              x: -80,
              ease: Power3.easeOut,
              delay: 0.6,
            });
            TweenLite.from(authorInfo, 0.8, {
              opacity: 0,
              x: -80,
              ease: Power3.easeOut,
              delay: 0.8,
            });

            // slide up then scale
            TweenLite.from(showcase, 1.2, {
              y: 80,
              ease: Power3.easeOut,
              delay: 0.2,
            });
            TweenLite.from(showcaseImage, 1.8, {
              scale: 1.5,
              ease: Power3.easeOut,
              delay: 0.2,
            });
          }}
          render={() => {
            return (
              <ReactFullpage.Wrapper>
                <motion.div {...slideUpFrameAnim} className="section">
                  <Item
                    tags={['UI,', 'UX']}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque?"
                    more="!#"
                    author_image={AuthorImage}
                    author_name="Kevin Nacario"
                    author_title="Developer"
                    showcase={Image1}
                  />
                </motion.div>
                <motion.div {...slideDownFrameAnim} className="section">
                  <Item
                    tags={['UI,', 'UX']}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque?"
                    more="!#"
                    author_image={AuthorImage}
                    author_name="Kevin Nacario"
                    author_title="Developer"
                    showcase={Image1}
                  />
                </motion.div>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </motion.div>
  );
}
