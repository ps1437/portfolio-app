import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "types.ds";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  const gridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const popOutVariants = {
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <motion.h3
        className="absolute header-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Skills
      </motion.h3>

      <motion.h3
        className="absolute top-28 px-4 text-center uppercase tracking-[3px] text-gray-500 text-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Hover over a skill to view the current proficiency level.
      </motion.h3>

      <motion.div
        className="grid grid-cols-3 gap-3 gap-x-5 md:gap-5 md:grid-cols-4 mt-10"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {skills?.map((skill, i) => (
          <motion.div
            key={skill._id}
            variants={skillVariants}
            whileHover="hover"
          >
            <Skill directionLeft={i % 2 === 0} skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
