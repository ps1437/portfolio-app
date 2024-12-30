import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { Experience } from "types.ds";

type Props = {
  experiences: Experience[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 1.5 } },
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="flex flex-col relative overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary h-screen 
         text-left
         md:flex-row
         max-w-full
         md:px-8
         justify-evenly
         mx-auto
         items-center
        "
    >
      <h3 className="absolute header-title">
        Experience
      </h3>
      {/* Exp Cards */}
      <div className="w-full md:mt-16 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary flex md:space-x-5 overflow-x-scroll p-4 snap-x snap-mandatory">
        {experiences?.map((exp) => (
          <Card key={exp._id} exp={exp} />
        ))}
      </div>
    </motion.div>
  );
}
