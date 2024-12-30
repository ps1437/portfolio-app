import React from "react";
import { motion } from "framer-motion";

type Props = {};

const zigzagVariants = {
  initial: { x: 0 },
  animate: { x: [0, 20, -20, 20, -20, 0], transition: { duration: 2, repeat: Infinity } },
};

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.5, 2, 2.5, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.6, 0.8, 1.0],
        borderRadius: ["20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%", "20%"],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
      className="relative flex justify-center items-center mt-16"
    >
      <motion.div
        className="absolute border border-red-500 opacity-60 rounded-full h-[200px] w-[200px] mt-52"
        variants={zigzagVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="rounded-full border border-blue-500 opacity-20 h-[500px] w-[500px] absolute mt-52"
        variants={zigzagVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="rounded-full border border-green-500 opacity-20 h-[650px] w-[650px] absolute mt-52"
        variants={zigzagVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="rounded-full border border-yellow-500 opacity-30 h-[800px] w-[800px] absolute mt-52"
        variants={zigzagVariants}
        initial="initial"
        animate="animate"
      />
    </motion.div>
  );
}
