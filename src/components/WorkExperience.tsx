import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { Experience } from "types.ds";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: 45 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col relative overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary h-screen 
         text-left
         md:flex-row
         max-w-full
         md:px-8
         justify-evenly
         mx-auto
         items-center"
    >
      <h3 className="absolute header-title">Experience</h3>
      {/* Exp Cards */}
      <motion.div
        className="w-full md:mt-16 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary flex md:space-x-5 overflow-x-scroll p-4 snap-x snap-mandatory"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences?.map((exp) => (
          <motion.div
            key={exp._id}
            variants={cardVariants}
            className="flex-shrink-0"
          >
            <Card exp={exp} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WorkExperience;
