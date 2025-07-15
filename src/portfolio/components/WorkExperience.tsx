import React from "react";
import { motion } from "framer-motion";
import { Experience } from "types.ds";
import { urlFor } from "../../../sanity";

type Props = {
  experiences: Experience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <section className="relative w-full min-h-screen py-20 px-6">
      <h3 className="text-4xl  font-mono font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 mb-16">
        Experience
      </h3>

      <div className="relative border-l-[2px] border-yellow-400/30 max-w-3xl mx-auto flex flex-col gap-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp._id}
            className="relative pl-10 group"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -left-[26px] top-1 w-12 h-12 rounded-full border-2 border-yellow-400 overflow-hidden bg-white shadow-md flex items-center justify-center">
              <img
                src={urlFor(exp?.companyImage).url()}
                alt={exp.companyName}
                className="object-contain w-10 h-10"
              />
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 shadow-lg hover:shadow-yellow-400/30 transition duration-300">
              <div className="flex justify-between items-center mb-1">
                <h4 className="text-lg text-yellow-300 font-semibold">
                  {exp.jobTitle}
                </h4>
                <span className="text-xs text-gray-400 whitespace-nowrap">
                  {new Date(exp.dateStarted).toLocaleDateString("en-US")} –{" "}
                  {exp.isCurrentlyWorking
                    ? "Present"
                    : new Date(exp.dateEnded).toLocaleDateString("en-US")}
                </span>
              </div>
              <p className="text-sm text-gray-300 mb-2">
                <strong className="text-gray-400">Company:</strong>{" "}
                {exp.companyName}
              </p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
