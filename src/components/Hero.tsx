import { motion } from "framer-motion";
import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { loadFull } from "tsparticles";
import type { PageInfo } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};

const particlesInit = async (engine: any) => {
  await loadFull(engine);
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [

      "Building the Future with",
      "<Code />",
      "<Innovation />",
      "<Passion />",
      "<Coffee />",
    ],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 80,
  });



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden "
    >


      <section className="mt-10 p-4">
        <div className="w-full md:w-1/2 md:mx-auto flex flex-col
         md:flex-row items-center justify-center text-center">

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mb-6 cursor-pointer"
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <div className="relative w-32 h-32 mr-8 rounded-full overflow-hidden shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 border-4 border-indigo-600">
                <img
                  src={urlFor(pageInfo?.heroImage).url()}
                  alt="Praveen Soni"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </Tilt>
          </motion.div>

            <div className="md:text-justify mb-3">
              <div className="flex flex-col mb-5">
                <p className="text-indigo-900 font-bold text-xl">
                  <motion.h2
                    initial={{ y: 40, opacity: 0, scale: 0.95 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.1, delay: 0.3 }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300
               text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider font-mono animate-glow drop-shadow-md"
                  >
                    Hey👋, I&apos;m {pageInfo.name}
                    <span className="block mx-auto mt-1 w-1/2 h-0.5 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 rounded-full animate-pulse opacity-70" />
                  </motion.h2>
                </p>


              </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 mt-4 px-4 text-center">

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="uppercase text-sm sm:text-base tracking-widest font-mono text-gray-300 dark:text-blue-300"
        >
          {pageInfo?.role || "Tech Enthusiast"}
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-xl sm:text-3xl md:text-4xl font-bold font-mono px-4 text-white dark:text-pink-300"
        >
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#60A5FA" />
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:hidden"
        >
          {["about", "experience", "skills", "projects"].map((section) => (
            <Link key={section} href={`#${section}`} aria-label={`Go to ${section}`}>
              <button className="px-4 py-2 text-sm font-mono text-white dark:text-white bg-blue-500/20 border border-blue-400 rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-md backdrop-blur-md">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </Link>
          ))}
        </motion.div>
      </div>

    </motion.div>
  );
}
