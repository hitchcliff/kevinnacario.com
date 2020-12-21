import Image from "./assets/1.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const image = {
  initial: {
    y: "-10%",
    width: "25%",
    height: "25%",
  },
  animate: {
    y: 0,
    width: "100%",
    height: "100%",
    transition: { delay: 0.2, ...transition },
  },
  exit: {
    y: "-10%",
    width: "25%",
    height: "25%",
  },
};

const animate = {
  animate: {
    transition: { delay: 0.2, ...transition },
  },
};

export default function FramerTest2() {
  return (
    <motion.div initial="initial" animate="animate" exit="exit">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, quo!
      </motion.div>
      <motion.div variants={image}>
        <motion.img
          variants={animate}
          className="object-cover"
          src={Image}
          alt="Sample image"
        />
      </motion.div>
      <motion.p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        voluptatibus corrupti minima ratione, quod expedita, ea fugiat cum
        accusamus quam accusantium, voluptates veniam totam atque sunt officia
        adipisci dolor laborum eos eius asperiores. Optio soluta, sapiente eaque
        aperiam sint labore suscipit asperiores corporis laborum, obcaecati hic,
        officia consequuntur eius eveniet.
      </motion.p>
      <Link to="/framer">Go back to framer</Link>
    </motion.div>
  );
}
