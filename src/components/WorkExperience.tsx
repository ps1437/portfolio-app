import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { Experience } from "types.ds";

type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary  h-screen 
         text-left
         md:flex-row
         max-w-full
         md:px-8
         justify-evenly
         mx-auto
         items-center
        "
    >
      <h3 className="absolute top-20  uppercase tracking-[20px] text-gray-500  text-2xl">
        Experience
      </h3>
      {/* Exp Cards */}
      <div className="w-full mt-16 scrollbar-thin  scrollbar-track-gray-400/20 scrollbar-thumb-secondary flex  space-x-5 overflow-x-scroll p-4 snap-x snap-mandatory">
        {experiences?.map((exp) => (
          <Card key={exp._id} exp={exp} />
        ))}
      </div>
    </motion.div>
  );
}
