import React, { useState } from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ProjectType } from "types.ds";

type Props = {
  projects: ProjectType[];
};

export default function Projects({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

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
    <h3 className="absolute header-title">
      Projects
    </h3>

      <div className="relative w-[90%] flex justify-center items-center mt-20">
        <button onClick={handlePrev} className="absolute left-5 z-10">
          <FaArrowLeft className="text-3xl text-gray-500 hover:text-gray-700" />
        </button>

        <div className="relative w-full md:w-3/4">
          <img src={urlFor(projects[currentIndex]?.image).url()} alt={projects[currentIndex]?.title} />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-90">
         
            <a href={projects[currentIndex]?.linkToBuild} className="cursor-pointer" >
              <h3 className="text-xl text-white font-bold cursor-pointer">{projects[currentIndex]?.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{projects[currentIndex]?.summary}</p>
              </a>
          </div>
        </div>

        <button onClick={handleNext} className="absolute right-5 z-10">
          <FaArrowRight className="text-3xl text-gray-500 hover:text-gray-700" />
        </button>
      </div>

      <div className="w-full absolute top-[30%] bg-secondary/10 left-0 h-[500px] -skew-y-12">
      <span className="text-sm decoration-[#F7ab01]/50 mt-4">
        Project {currentIndex + 1} of {projects.length}
      </span>
      </div>
    </div>
  );
}