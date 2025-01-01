import React from "react";
import { motion } from "framer-motion";
import { Experience } from "types.ds";
import { urlFor } from "../../sanity";

type Props = {
  exp: Experience;
};

export default function Card({ exp }: Props) {
  return (
    <article
      className="flex flex-col items-center rounded-lg flex-shrink-0 w-full md:w-[700px] xl:w-[500px] snap-center  p-4 md:opacity-40 cursor-pointer overflow-hidden hover:opacity-100 hover:scale-105 transform transition-transform duration-300 bg-gray-800"
    >
      <div className="px-0 md:px-10 w-full">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-2xl font-light">{exp?.jobTitle}</h4>
          <motion.img
            alt={exp?.companyName}
            className="w-10 h-10 rounded-full md:w-12 md:h-12 object-cover"
            src={urlFor(exp?.companyImage).url()}
          />
        </div>
        <p className="text-xl mt-1">{exp?.companyName}</p>
        <p className="uppercase py-5 text-gray-500">
          {new Date(exp?.dateStarted).toLocaleDateString("en-US")} -{" "}
          {exp?.isCurrentlyWorking
            ? "Present"
            : new Date(exp?.dateEnded).toLocaleDateString("en-US")}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-60 max-h-60 scrollbar-thin scrollbar-track-black scrollbar-thumb-secondary overflow-y-scroll">
          {exp?.points.map((point, i) => (
            <li className="text-base" key={i}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
