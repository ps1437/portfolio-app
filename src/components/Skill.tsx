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
      <div className="group relative flex cursor-pointer flex-col items-center
       p-4 bg-gray-800 rounded-lg shadow-lg w-full sm:w-9/10 lg:w-4/5 xl:w-4/5 hover:bg-gray-700 transition duration-300 ease-in-out">
        <motion.img
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="rounded-full bg-gray-500 object-cover w-10 h-10
           filter group-hover:grayscale transition duration-300 ease-in-out hidden sm:block"
          src={urlFor(skill?.image).url()}
        />
        <div className="w-full hidden sm:block">
          <p className="font-bold text-center text-lg">{skill?.title}</p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${skill?.progress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm mt-2">{+skill?.progress}%</p>
        </div>
        <div className="block sm:hidden">
          <motion.img
            initial={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            className="rounded-full bg-gray-500 object-cover w-10 h-10
             filter group-hover:grayscale transition duration-300 ease-in-out"
            src={urlFor(skill?.image).url()}
          />
          <div className="absolute opacity-0 group-hover:opacity-80 
          transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="font-bold text-black opacity-100 text-2xl">
                {skill?.progress?.toString()}%
              </p>
            </div>
          </div>
          <p className="font-thin text-center text-sm">{skill?.title}</p>
        </div>
      </div>
    </>
  );
}
