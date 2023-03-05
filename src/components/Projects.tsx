import React from "react";
import { motion } from "framer-motion";
import { Project } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <div
      className="h-screen  flex flex-col relative overflow-hidden  
         text-left
         md:flex-row
         max-w-full
         justify-evenly
         mx-auto
         items-center
        "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500  text-2xl">
        Projects
      </h3>

      <div className="relative scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7ab0A] flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={project?._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col md:space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              viewport={{
                once: true,
              }}
              alt=""
              className=" h-36 w-36  md:h-40 md:w-40 flex items-center justify-center"
              src={urlFor(project?.image).url()}
            />
            <div className="space-y-6 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl text-center font-semibold">
              <span className=" text-sm decoration-[#F7ab01]/50">
                  Project {index + 1} of {projects.length} 
                </span>
              
                <div className="underline">{project?.title} </div> 
              </h4>
              <div className="flex items-center  justify-center">
                {project.technologies.map((tech, index) => (
                  <img
                    key={index}
                    src={urlFor(tech?.image).url()}
                    className="h-8 w-8 cursor-pointer rounded-full "
                    title={tech?.title}
                    alt="skills"
                  />
                ))}
              </div>
              <p className="text-center text-lg md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#F7ab0a]/10 left-0 h-[500px] 
      -skew-y-12
      "
      ></div>
    </div>
  );
}
