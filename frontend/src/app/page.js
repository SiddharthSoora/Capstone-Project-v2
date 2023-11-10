"use client";

import Hero from "../components/HeroSection";
export default function Home() {
  const lightBlue = " min-h-screen bg-[#EFF1F8]";
  return (
    <>
      <div className={lightBlue}>
        {/* <Mainbody /> */}
        <Hero />
      </div>
    </>
  );
}
