import { CustomButton } from '../../components';
import AboutImage from './assets/about-hero1.png';

export default function About() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-row justify-between items-center">
        <div className="w-1/2 h-full ml-auto bg-gray-100 md:px-40">
          <h1 className="font-light text-6xl">About me</h1>
          <p className="mt-5">
            I love coding, learning new technologies <br /> and working more than 12+ hours a day.
          </p>
          <div className="mt-5">
            <CustomButton>Scout</CustomButton>
          </div>
        </div>
        <div className="w-full h-full">
          <img className="object-cover" src={AboutImage} alt="insperity.com" />
        </div>
      </div>
      <div></div>
    </div>
  );
}
