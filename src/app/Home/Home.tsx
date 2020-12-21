import About from "./About";
import Work from "./Work";
import AudioIntro from "./AudioIntro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className="flex flex-col px-56 py-10">
        <h1 className="m-auto font-light leading-snug w-1/2 text-2xl text-center">
          I'm Kevin Nacario, a Frontend Developer and Jr. Fullstack Developer
          from Philippines. I build frontend applications and has 2+ years of
          coding experience in web development.
        </h1>
        <div className="w-10 h-1 mt-10  m-auto  bg-gray-600 transform rotate-90" />
        <div className="m-auto p-10 flex flex-row items-center">
          <p className="inline-block">See my work</p>
          <AudioIntro />
        </div>
      </div>
      <Work />
      <About />
    </div>
  );
}
