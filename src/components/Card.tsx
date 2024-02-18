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
  className="flex flex-col items-center rounded-lg flex-shrink-0 w-full md:w-[700px] xl:w-[500px] snap-center bg-[#292929] p-4 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden hover:opacity-100 relative"
>
  <motion.img
   

    alt="Company name"
    className="w-16 h-16 rounded-full md:rounded-full xl:w-[24] xl:h-[24] object-fill object-center"
    src={urlFor(exp?.companyImage).url()}
  />

  <div className="px-0 md:px-10 flex flex-col items-center justify-between h-full">
    <div>
      <h4 className="text-2xl font-light">{exp?.jobTitle}</h4>
      <p className="font-blod text-xl mt-1">{exp?.companyName}</p>
      <div className="flex my-2 space-x-2">
        {/* Tech Used */}
        {exp?.technologies.map((tech) => (
          <img
            key={tech?._id}
            className="h-8 w-8 rounded-full"
            alt={tech?.title}
            title={tech?.title}
            src={urlFor(tech?.image).url()}
          />
        ))}
      </div>

      <p className="uppercas py-5 text-gray-500 ">
        {new Date(exp?.dateStarted).toLocaleDateString("en-US")} -{" "}
        {exp?.isCurrentlyWorking
          ? "Present"
          : new Date(exp?.dateEnded).toLocaleDateString("en-US")}
      </p>

      <ul
        className="list-disc space-y-4 ml-5 text-lg h-60 max-h-60 
        scrollbar-thin scrollbar-track-black scrollbar-thumb-secondary
        overflow-y-scroll"
      >
        {exp?.points.map((point, i) => (
          <li className="text-base" key={i}>
            {point}
          </li>
        ))}
      </ul>
    </div>

    {exp?.isCurrentlyWorking && (
              <div className="absolute top-0 right-0 mt-2 mr-2">

     <div className="rasengan">
     <div className="line line1"></div>
     <div className="line line2"></div>
     <div className="line line3"></div>
     <div className="line line4"></div>
     <div className="line line5"></div>
     <div className="line line6"></div>
     <div className="line line7"></div>
   
   </div>  </div>
      )}
  </div>
</article>


  );
}
