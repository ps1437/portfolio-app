import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "types.ds";
import { urlFor } from '../../sanity';
import BackgroundCircle from "./BackgroundCircle";
import Cube from "./3dCube"; // Import the Cube component

type Props = {
  pageInfo: PageInfo;
};

// const cubes = [
//   { size: 50, position: { top: "-100px", right: "100px" }, backgroundColor: "rgb(86, 48, 61)" },
//   { size: 40, position: { top: "-200px", right: "200px" }, backgroundColor: "rgb(96, 58, 71)" },
//   { size: 36, position: { top: "-300px", right: "300px" }, backgroundColor: "rgb(96, 58, 71)" },
//   { size: 28, position: { top: "-400px", right: "400px" }, backgroundColor: "rgb(96, 58, 71)" },
//   { size: 18, position: { top: "-500px", right: "500px" }, backgroundColor: "rgb(96, 58, 71)" },
// ];

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
    <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
  
   <div className="spider-container">
    <div className="web-line"></div>
    <img src="spider.png" className="spider -z-500" alt="Spider" />
  </div>

    <div className="spider-container">
    <div className="web-line2"></div>
    <img src="spider.png" className="spider2 -z-500" alt="Spider" />
  </div>

      <BackgroundCircle />
      <div className="relative">
        <img
          alt="my pic"
          className="relative rounded-full w-32 h-32 mx-auto object-cover cursor-pointer 
           -top-50 left-0
           hover:shadow-outline"
          src={urlFor(pageInfo?.heroImage).url()}
        />
        <img
          className="w-32 h-32 mx-auto absolute -top-16 -left-10 animate-waving-hand"
          alt="straw hat"
          src="https://png.pngtree.com/png-vector/20230120/ourmid/pngtree-straw-hat-cartoon-illustration-png-image_6562738.png"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-white pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7aboa" />
        </h1>

        <div className="py-4">
          <Link href="#about">
            <button className="hero-btn">About</button>
          </Link>
          <Link href="#exp">
            <button className="hero-btn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-btn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-btn">Projects</button>
          </Link>
        </div>
      </div>
      {/* <div className="hidden md:block absolute left-10 top-1/2 transform -translate-y-1/2">
        {cubes.map((cube, index) => (
          <Cube
            key={index}
            size={cube.size}
            position={cube.position}
            backgroundColor={cube.backgroundColor}
          />
        ))}
      </div> */}
    </motion.div>
  );
}
