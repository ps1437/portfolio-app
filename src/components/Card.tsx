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
      className="flex flex-col items-center rounded-lg flex-shrink-0 w-full md:w-[700px] xl:w-[500px] snap-center bg-[#292929] p-4 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden hover:opacity-100 hover:scale-105 transform transition-transform duration-300"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        alt={exp?.companyName}
        className="w-10 h-10 rounded-full md:w-16 md:h-16 object-cover"
        src={urlFor(exp?.companyImage).url()}
      />

      <div className="px-0 md:px-10 text-center md:text-left">
        <h4 className="text-2xl font-light">{exp?.jobTitle}</h4>
        <p className="font-bold text-xl mt-1">{exp?.companyName}</p>
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