"use client";
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
    <header className="sticky top-0 z-50 bg-gray-900/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl  mx-auto flex items-center justify-between px-4 py-3">
        <motion.div
          initial={{ x: -200, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex space-x-3"
        >
          {socials.map((social) => (
            <div
              key={social._id}
              className="transition-transform font-mono duration-300 hover:scale-110 hover:drop-shadow-[0_0_6px_#facc15]"
            >
              <SocialIcon
                url={social.url}
                bgColor="transparent"
                fgColor="#facc15"
                className="rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          ))}
        </motion.div>

        <motion.nav
          initial={{ x: 200, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex space-x-6 font-mono text-sm uppercase tracking-wide text-yellow-300"
        >
          {["about", "experience", "skills", "projects", "contact"].map((section) => (
            <Link key={section} href={`#${section}`}>
              <span className="cursor-pointer hover:text-yellow-400 transition duration-300 hover:underline underline-offset-4">
                {section}
              </span>
            </Link>
          ))}
        </motion.nav>

        {/* Contact (Mobile & Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="md:hidden"
        >
          <Link href="#contact">
            <SocialIcon
              network="email"
              bgColor="transparent"
              fgColor="#facc15"
              className="hover:scale-110 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
