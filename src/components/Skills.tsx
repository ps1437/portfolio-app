import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "types.ds";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
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
      className="flex flex-col relative overflow-hidden  h-screen 
         text-left
         md:flex-row
         max-w-full
         px-10
         justify-evenly
         mx-auto
         items-center
        "
    >
      <h3 className="absolute header-title ">
        Skills
      </h3>
      <h3 className="absolute top-32 px-4 text-center   uppercase tracking-[3px] text-gray-500  text-sm">
        Hover over a skill for currency profiency
      </h3>
      <div className="grid grid-cols-3 gap-3 gap-x-5 md:gap-5 md:grid-cols-4  mt-10 ">
        {skills?.map((skill, i) => (
          <Skill key={skill._id} directionLeft={i % 2 == 0} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
