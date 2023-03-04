import React from "react";
import { motion } from "framer-motion";
import { Experience } from "types.ds";
import { urlFor } from '../../sanity';

type Props = {
  exp: Experience;
};
export default function Card({ exp }: Props) {
  return (
    <article
      className="flex flex-col items-center  rounded-lg space-y-7 flex-shrink-0 w-[500px]
    md:w-[700px]
    xl:w-[500px]
    snap-center bg-[#292929] p-10
    opacity-40
    cursor-pointer
transition-opacity 
duration-200 
overflow-hidden
     hover:opacity-100
    "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        alt=""
        className="w-16 h-16 rounded-full md:rounded-full xl:w-[24] xl:h-[24]  object-fill object-center"
       src={urlFor(exp?.companyImage).url()}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{exp?.jobTitle}</h4>
        <p className="font-blod text-2xl mt-1">{exp?.companyName}</p>
        <div className="flex my-2 space-x-2">
          {/* Tech  USed */}

          {exp?.technologies.map((tech) => (
            <img
              key={tech?._id}
              className="h-10 w-10 rounded-full"
              alt={tech?.title}
              src={urlFor(tech?.image).url()}
              />
          ))}
        </div>
        <p className="uppercas py-5 text-gray-500">
          {new Date(exp?.dateStarted).toDateString()} -{" "}
          {exp?.isCurrentlyWorking
            ? "Present"
            : new Date(exp?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-60 max-h-60 
        scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7ab0A]
        overflow-y-scroll">
          {exp?.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
