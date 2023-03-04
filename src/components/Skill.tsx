import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType;
};

export default function Skill({ directionLeft = false, skill }: Props) {
  return (
    <>
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -400 : 400,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="rounded-full bg-gray-500 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out  group-hover:bg-white h-16 w-16   rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="font-bold text-black opacity-100 text-2xl">
            {skill?.progress?.toString()}%
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
