import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "types.ds";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-40 p-4  bg-opacity-60 ">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center space-x-2"
      >
        {socials.map((social) => (
          <div
            key={social._id}
            className="transition-transform duration-300 hover:scale-110 hover:shadow-cyan animate-glow"
          >
            <SocialIcon
              url={social.url}
              bgColor="transparent"
              fgColor="#facc15" // Tailwind yellow-400
              className="rounded-full"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center cursor-pointer text-yellow-400 animate-pulse"
      >
        <Link href="#contact" className="flex items-center space-x-2">
          <SocialIcon
            bgColor="transparent"
            fgColor="#facc15"
            className="cursor-pointer hover:scale-110 transition-transform"
            network="email"
          />
          <p className="uppercase hidden md:inline-flex text-sm font-anime tracking-wider">
            GET IN TOUCH
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
