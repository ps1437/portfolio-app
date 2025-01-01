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
      className="flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute header-title">Skills</h3>
      <h3 className="absolute md:hidden top-32 md:top-20 px-4 text-center uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill to view current proficiency level
      </h3> 
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-x-2 md:gap-2 mt-10 w-full">
        {skills?.map((skill, i) => (
          <Skill key={skill._id} directionLeft={i % 2 == 0} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}
