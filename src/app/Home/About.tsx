import { useState } from "react";
import { CustomButton } from "../../components";
import PopupOngoingProjects from "./Popup";
import { motion } from "framer-motion";

export default function About() {
  const [clicked, setClicked] = useState(false);

  function handleClick(val: boolean) {
    setClicked(val);
  }

  return (
    <motion.div className="w-3/4 m-auto py-24 flex flex-row items-start justify-between gap-60">
      <div>
        <h2 className="font-medium text-lg">About</h2>
        <p className="mt-10 leading-loose">
          I am seeking a position either Frontend or Jr. Fullstack Developer in
          a reputable organization. I build websites using React, my interest is
          to build fully RTL black box tests to Fullstack applications. I was
          able to build an awesome UI, application for the web. Has 2+ years of
          experience to Coding.
        </p>
        <div className="mt-7 ">
          <CustomButton handleClick={handleClick}>
            Ongoing Projects
          </CustomButton>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-lg">Contact</h2>
        <div className="mt-10">
          <p className="leading-loose">contact@kevinnacario.com</p>
          <p className="leading-loose">+63 9268339430</p>
        </div>
      </div>
      {clicked && <PopupOngoingProjects setClicked={setClicked} />}
    </motion.div>
  );
}
