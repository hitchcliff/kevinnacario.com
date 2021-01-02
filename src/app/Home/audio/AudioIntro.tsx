import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { transition } from '../Work';
import Audio1 from '../assets/audio/Toto.mp3';

const svg = 'w-10 h-10 ml-5 inline-block cursor-pointer outline-none hover:text-gray-600  transition-all';

const animate = {
  whileHover: {
    scale: 1.1,
  },
  transition,
};

export default function AudioIntro() {
  const [play, set] = useState(false);
  const audio = useRef<any>(null);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (play) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [play]);

  function handleProgress(e: any) {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  }

  return (
    <div className="flex flex-row items-center flex-wrap sm:flex-nowrap">
      {play ? (
        <button className="outline-none">
          <motion.svg
            {...animate}
            onClick={() => set(false)}
            className={svg}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </motion.svg>
        </button>
      ) : (
        <button className="outline-none">
          <motion.svg
            {...animate}
            onClick={() => set(true)}
            className={svg}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </motion.svg>
        </button>
      )}
      <audio
        ref={audio}
        src={Audio1}
        onTimeUpdate={(e: any) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e: any) => setDur(e.target.duration)}
        preload="true"
      />
      {play && (
        <div className="absolute ml-20">
          <input className="bg-gray-300" type="range" onChange={handleProgress} value={dur ? (currentTime * 100) / dur : 0} name="progressBar" />
        </div>
      )}
    </div>
  );
}
