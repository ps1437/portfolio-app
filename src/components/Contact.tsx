"use client";

import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { PageInfo } from "types.ds";

type Props = {
  pageInfo: PageInfo;
};

export default function Contact({ pageInfo }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full py-24 px-6 sm:px-10 bg-[#0b0c1a] overflow-hidden"
    >
      <h3 className="text-4xl font-mono sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 mb-16">
        Contact Me
      </h3>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto bg-[#161a2b] border border-white/10 shadow-md hover:shadow-yellow-400/20 transition rounded-2xl p-8 sm:p-12 space-y-10"
      >
        <h4 className="text-xl sm:text-2xl font-semibold text-center text-white">
          Let’s <span className="text-yellow-300 underline underline-offset-4">Connect</span>
        </h4>

        <div className="flex flex-col space-y-6 text-white">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <PhoneIcon className="h-7 w-7 text-pink-400 animate-pulse" />
            <p className="text-base">{pageInfo?.mobileNo}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center space-x-4"
          >
            <EnvelopeIcon className="h-7 w-7 text-yellow-400 animate-pulse" />
            <p className="text-base break-words">{pageInfo?.emailId}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <MapIcon className="h-7 w-7 text-blue-400 animate-pulse" />
            <p className="text-base">{pageInfo?.address}</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 blur-3xl opacity-10 rounded-full" />
    </motion.section>
  );
}
