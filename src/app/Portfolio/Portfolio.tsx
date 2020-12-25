import { CustomButton } from '../../components';
import AuthorImage from './assets/images/kevin.jpg';
import Image1 from '../../assets/images/real-estate.jpg';
import Image2 from '../../assets/images/lpado.jpg';
import Image3 from '../../assets/images/onepage-studio.jpg';
import Image4 from '../../assets/images/quiz-app-2.png';
import Image5 from '../../assets/images/react-best-tourist.jpg';
import Image6 from '../../assets/images/resort-ui.jpg';
import Item from './Item';
import ReactFullpage from '@fullpage/react-fullpage';
import { AnimatePresence } from 'framer-motion';
import { TweenLite, Power3 } from 'gsap';

export default function Portfolio() {
  return (
    <div className="px-10 py-0 md:px-56">
      <ReactFullpage
        scrollingSpeed={700}
        navigation
        navigationPosition="left"
        navigationTooltips={['firstSlide', 'secondSlide']}
        navigationTooltip
        anchors={['firstPage', 'secondPage']}
        onLeave={(origin: any, destination: any, direction: any) => {
          const section = destination.item;
          const tags = section.querySelector('#tags');
          const title = section.querySelector('#title');
          const more = section.querySelector('#more');
          const authorImage = section.querySelector('#author-image');
          const authorInfo = section.querySelector('#author-info');
          const showcase = section.querySelector('#showcase');

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
          // slide to left
        }}
        render={({ state, fullpageApi }: any) => {
          return (
            <ReactFullpage.Wrapper>
              <AnimatePresence exitBeforeEnter initial>
                <div className="section">
                  <Item
                    tags={['UI,', 'UX']}
                    title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque?"
                    more="!#"
                    author_image={AuthorImage}
                    author_name="Kevin Nacario"
                    author_title="Developer"
                    showcase={Image1}
                  />
                </div>
              </AnimatePresence>
              <div className="section">
                <Item
                  tags={['UI,', 'UX']}
                  title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cumque?"
                  more="!#"
                  author_image={AuthorImage}
                  author_name="Kevin Nacario"
                  author_title="Developer"
                  showcase={Image1}
                />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
