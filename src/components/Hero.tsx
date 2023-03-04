import { motion } from "framer-motion";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "types.ds";
import { urlFor } from '../../sanity';
import BackgroundCircle from "./BackgroundCircle";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, My Name is ${pageInfo.name} `,
      "An Intresting Developer",
      "<java/>",
      "</React>",
      "</One Piece>",
      "</Naruto>",
    ],
    loop: true,
    deleteSpeed: 200,
  });
  return (
    <motion.div className="h-screen flex flex-col space-y-8  items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        alt="my pic"
        className="relative rounded-full w-32 h-32 mx-auto object-contain"
        src={urlFor(pageInfo?.heroImage).url()}
      //"https://media.licdn.com/dms/image/D5603AQGoBdRzt1N2aw/profile-displayphoto-shrink_800_800/0/1675961480482?e=1683158400&v=beta&t=-bql1OnPsn-2ukh6zpMwP3694w-9SGDaNb5pkMg2RR8"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scale-px-10">
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
    </motion.div>
  );
}
