"use client";

import Hero from "../components/HeroSection";
export default function Home() {
  const lightBlue = " min-h-screen bg-[#EFF1F8]";
  return (
    <>
      <div className={lightBlue}>
        {/* <Mainbody /> */}
        <Hero />
      <div className="absolute bottom-1 right-6 text-sm text-gray-400 "><span className="mx-2">AI V1.2 </span> <span className="text-purple-400">Quiz</span><span className="text-pink-400">Fuse</span> V1.0.1A </div>
      </div>
    </>
  );
}
