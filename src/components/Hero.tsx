import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "types.ds";
import { urlFor } from "../../sanity";
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [
      `Hi, My Name is ${pageInfo.name}`,
      "An avid developer with interests in",
      "<java/>",
      "</React>",
      "</One Piece>",
      "</Naruto>",
    ],
    loop: true,
    deleteSpeed: 200,
  });

  return (
    <motion.div
      className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative text-white"
    >
      <div
        className="absolute inset-0 z-7 bg-cover  bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://github.com/ps1437/github-actions/blob/master/sasuke-uchiha-3840x5271-12181.jpg?raw=true')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <BackgroundCircle />

      <div className="relative flex items-center justify-center ">

        <img
          alt="Praveen Soni"
          className="relative z-10 animate-lightningGlow  rounded-full w-32 h-32 object-cover border-4 border-yellow-400 p-1 shadow-lg"
          src={urlFor(pageInfo?.heroImage).url()}
        />
      </div>


      {/* Text Section */}
      <div className="z-20">
        <h2 className="text-md uppercase text-yellow-200 pb-2 tracking-[12px] font-anime">
          {pageInfo?.role}
        </h2>

        <h1 className="text-4xl lg:text-5xl font-anime px-10 text-yellow-300 drop-shadow-lg">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#facc15" />
        </h1>

        <div className="py-4 space-x-2">
          {["about", "exp", "skills", "projects"].map((section) => (
            <Link key={section} href={`#${section}`} className="p-2">
              <button className="hero-btn hover:bg-yellow-300 hover:text-black font-manga px-8 py-2 border border-yellow-300 text-yellow-300 transition-all duration-300">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
