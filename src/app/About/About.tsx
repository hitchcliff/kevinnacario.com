import { motion } from 'framer-motion';
import { CustomButton } from '../../components';
import { slideDownFrameAnim, slideRight } from '../../components/animation/slide';
import PROFILE_IMG from '../../assets/kevin.jpg';
import styled from 'styled-components';
import { RoutePattern } from '../../routes/RoutePattern';

const ProfileImg = styled.div`
  border-radius: 100%;
  width: 600px;
  height: 600px;
  overflow: hidden;
  margin-left: auto;
`;

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full min-h-screen relative"
    >
      <motion.div
        className="flex flex-row justify-center items-center bg-white"
        style={{ minHeight: '100vh' }}
      >
        <motion.div {...slideDownFrameAnim} className="w-full">
          <ProfileImg>
            <img src={PROFILE_IMG} alt="Kevin Nacario" className="object-cover w-full" />
          </ProfileImg>
        </motion.div>
        <motion.div className="w-full p-16 z-10">
          <motion.h1 className="font-light text-6xl" {...slideDownFrameAnim}>
            Who am I
          </motion.h1>
          <motion.p className="mt-5" {...slideDownFrameAnim}>
            {/* I love coding, learning new technologies <br /> and working more than 12+ hours a day. */}
            I am seeking a position either Frontend or Jr. Fullstack Developer in a reputable
            organization. I build websites using React, my interest is to build fully RTL black box
            tests to Fullstack applications. I was able to build an awesome UI, application for the
            web. Has 2+ years of experience to Coding.
            <br />
            <br />
            Life was so tough as a Self-taught Developer because I have no connection to rely on. I
            can't stop either, I've decided this skills will get me out of poverty and I'll take any
            dimly chances. Everything I've learned is from hardwork and experience, I thank you for
            reading this.
          </motion.p>
          <motion.div className="mt-5" {...slideDownFrameAnim}>
            <CustomButton link={RoutePattern.Skills}>
              Technologies I learned through my career
            </CustomButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
