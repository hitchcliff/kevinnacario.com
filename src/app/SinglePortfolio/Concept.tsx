import { motion } from 'framer-motion';
import { slideUpV2FrameAnim } from '../../components/animation/slide';
import Heading from '../../components/Heading/Heading';

export default function Concept() {
  return (
    <motion.div className="mt-10 px-10 pt-24 md:w-2/3 lg:px-56 lg:mx-auto" {...slideUpV2FrameAnim}>
      <Heading num="1">Concept</Heading>
      <p className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis tempora veniam illo vitae, quod aspernatur. Mollitia veritatis quia, fugiat
        debitis alias voluptate magni quasi consequatur explicabo distinctio natus voluptatem expedita error velit soluta maiores sed officia quos
        quae labore culpa delectus. Tempora ipsum atque veniam at rem nobis ut esse.
      </p>
    </motion.div>
  );
}
