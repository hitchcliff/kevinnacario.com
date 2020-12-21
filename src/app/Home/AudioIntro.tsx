import { motion } from "framer-motion";
import { useState } from "react";
import { transition } from "./Work";
import Audio1 from "./assets/audio/Toto.mp3";

const animate = {
  whileHover: {
    scale: 1.1,
  },
  transition,
};

export default function Audio() {
  const [play, set] = useState(false);

  return (
    <div>
      {play ? (
        <motion.svg
          {...animate}
          onClick={() => set(false)}
          className="w-10 h-10 ml-5 inline-block cursor-pointer hover:text-gray-600 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </motion.svg>
      ) : (
        <motion.svg
          {...animate}
          onClick={() => set(true)}
          className="w-10 h-10 ml-5 inline-block cursor-pointer hover:text-gray-600 transition-all"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </motion.svg>
      )}
      <div className="absolute">
        {play && (
          <audio autoPlay>
            <source src={Audio1} type="audio/mpeg" />
          </audio>
        )}
      </div>
    </div>
  );
}
