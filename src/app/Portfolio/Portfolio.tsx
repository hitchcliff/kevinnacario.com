import React from 'react';
import AuthorImage from './assets/images/kevin.jpg';
import Item from './Item';
import ReactFullpage from '@fullpage/react-fullpage';
import { AnimatePresence, motion } from 'framer-motion';
import { TweenLite, Power3 } from 'gsap';
import { curtainFromTopToBottom } from '../../components/animation/curtain';
import { slideUpFrameAnim } from '../../components/animation/slide';
import { useSelector } from 'react-redux';
import { selectAllPortfolioSelector } from '../../features/Portfolio/portfolio.selector';
import { RoutePattern } from '../../routes/RoutePattern';
import { Loading } from '../../components';

export default function Portfolio() {
  const portfolio = useSelector(selectAllPortfolioSelector);
  const license = process.env.REACT_APP_FULLPAGE_SECRET;

  if (!portfolio.length) return <Loading />;
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <AnimatePresence initial exitBeforeEnter>
        <motion.div {...curtainFromTopToBottom} className="fixed w-full h-full z-20 bg-gray-100" />
      </AnimatePresence>
      <div className="px-10 py-0 md:px-56">
        <ReactFullpage
          licenseKey={license}
          scrollingSpeed={700}
          navigation
          navigationPosition="left"
          anchors={['1', '2', '3', '4', '5', '6']}
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
                {portfolio.map((item) => (
                  <motion.div {...slideUpFrameAnim} className="section" key={item.id}>
                    <Item
                      tags={item.tags}
                      title={item.title}
                      more={`${RoutePattern.Portfolio}/${item.slug}/${item.id}`}
                      author_image={AuthorImage}
                      author_name="Kevin Nacario"
                      author_title="Developer"
                      showcase={item.mockup}
                    />
                  </motion.div>
                ))}
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    </motion.div>
  );
}
