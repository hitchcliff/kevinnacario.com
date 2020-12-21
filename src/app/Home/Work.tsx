import { Link } from "react-router-dom";
import { RoutePattern } from "../../routes/RoutePattern";

import Image1 from "./assets/images/real-estate.jpg";
import Image2 from "./assets/images/lpado.jpg";
import Image3 from "./assets/images/onepage-studio.jpg";
import Image4 from "./assets/images/quiz-app-2.png";
import Image5 from "./assets/images/react-best-tourist.jpg";
import Image6 from "./assets/images/resort-ui.jpg";
import { motion } from "framer-motion";

const Portfolio = [Image1, Image2, Image3, Image4, Image5, Image6];
export const transition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96],
};
const animate = {
  whileHover: { scale: 1.1 },
  transition,
};

export default function Work() {
  return (
    <div className="grid grid-cols-3 gap-5 w-3/4 m-auto mt-16">
      {Portfolio.map((item, idx) => (
        <div className="" key={idx}>
          <div className="overflow-hidden">
            <Link to={`${RoutePattern.Portfolio}/${idx}`}>
              <motion.img
                {...animate}
                className="w-full h-80 object-cover"
                src={item}
                alt={item}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
