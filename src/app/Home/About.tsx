import { useState } from "react";
import { CustomButton } from "../../components";

export default function About() {
  const [clicked, setClicked] = useState(false);

  function handleClick(val: boolean) {
    setClicked(val);
  }

  return (
    <div className="w-3/4 m-auto py-24 flex flex-row items-start justify-between gap-60">
      <div>
        <h2 className="font-medium text-lg">About</h2>
        <p className="mt-10 leading-loose">
          I am seeking a position either Frontend or Jr. Fullstack Developer in
          a reputable organization. I build websites using React, my interest is
          to build fully RTL black box tests to Fullstack applications. I was
          able to build an awesome UI, application for the web. Has 2+ years of
          experience to Coding.
        </p>
        <CustomButton text="Ongoing Projects" handleClick={handleClick} />
      </div>
      <div>
        <h2 className="font-medium text-lg">Contact</h2>
        <div className="mt-10">
          <p className="leading-loose">contact@kevinnacario.com</p>
          <p className="leading-loose">+63 9268339430</p>
        </div>
      </div>
      {clicked && (
        <div className="fixed top-0 left-0 w-full h-full z-10">
          <div
            className="bg-white w-full h-full opacity-50 z-0"
            onClick={() => setClicked(false)}
          />
          <div className="bg-white w-1/2 h-1/2 fixed position-center shadow-xl z-10">
            Test
          </div>
        </div>
      )}
    </div>
  );
}
