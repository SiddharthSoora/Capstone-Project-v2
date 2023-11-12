import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const white = "#FFFFFF";
  const pink = "#EC669F";
  const lightBlue = "#EFF1F8";
  const purple = "#7F5DF6";
  const black = "#010001";

  return (
    <>
      <main
        className={`bg-${lightBlue} min-h-screen flex items-center justify-center`}
      >
        <div className="bg-white rounded-[2.5rem] p-8  max-w-6xl">
          <div className="flex flex-row">
            <div
              className={` text-${black} font-bold lg:text-2xl ml-4 sm:text-lg hover:text-[#7F5DF6] transition ease-in-out duration-500 cursor-pointer`}
            >
              Quiz<span className="text-[#EC669F]">Fuse</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col justify-center">
              {" "}
              {/* Updated this line */}
              <div
                className={`text-${black} lg:text-6xl sm:text-5xl text-3xl font-bold mx-2 text-start`}
              >
                Generate <span className="text-[#7F5DF6]">Questions</span> Super Fast!
              </div>
              <div className="mt-4 ml-2 text-gray-500 text-sm">
                Generate Questions from Text and Images with the help of AI
                and NLP techniques.
              </div>
              <div className="text-center w-1/3 mx-auto">
                {" "}
                {/* Updated this line */}
                <Link href={"/ai"}>
                  <div className="bg-[#EC669F] text-white rounded-xl sm:text-lg sm:px-8 sm:py-6 mt-10 hover:bg-[#7F5DF6] transition ease-in-out duration-500 ">
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex mb-16 mt-8">
              <Image alt="HeroPic" src="/assets/HeroGirl.png" height={450} width={450} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
