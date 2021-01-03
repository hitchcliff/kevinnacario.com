import { motion } from 'framer-motion';
import { slideUpV2FrameAnim } from '../../components/animation/slide';
import Heading from '../../components/Heading/Heading';

interface ConceptProps {
  concept_description: string;
}

export default function Concept({ concept_description }: ConceptProps) {
  return (
    <motion.div className="mt-10 px-10 py-24 md:w-2/3 lg:px-56 lg:mx-auto" {...slideUpV2FrameAnim}>
      <Heading num="1">Concept</Heading>
      <p className="mt-10">{concept_description}</p>
    </motion.div>
  );
}
