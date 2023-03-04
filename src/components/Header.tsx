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
    <header className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-40 p-4 xl:item-center">
      {/* social icons */}

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="  flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            bgColor="transparent"
            className="hover:bg-white rounded-full"
            fgColor="gray"
          />
        ))}
      </motion.div>

      {/* Email Info */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center cursor-pointer text-gray-400"
      >
        <Link href="#contact">
          <SocialIcon
            bgColor="transparent"
            fgColor="gray"
            className="cursor-pointer"
            network="email"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            GET IN TOUCH
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
