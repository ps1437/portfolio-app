"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Skill as SkillType } from "types.ds";
import { urlFor } from "../../../sanity";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const sortedSkills = [...skills].sort((a, b) => {
    if (a.title.toLowerCase() === "java") return -1;
    if (b.title.toLowerCase() === "java") return 1;
    return 0;
  });

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#facc15" },
            links: {
              color: "#facc15",
              distance: 120,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: "bounce",
              speed: 1.5,
            },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-mono sm:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-300  mb-12 relative z-10"
      >
        My Skills
      </motion.h3>


      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 relative z-10">
        {sortedSkills.map((skill, index) => (
          <motion.div
            key={skill._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="bg-[#1e2130] hover:bg-[#2a2e43] p-4 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-yellow-400/40 transition-all"
          >
            <img
              src={urlFor(skill.image).url()}
              alt={skill.title}
              title={skill.title}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2"
            />
            <p className="text-sm text-white font-medium">{skill.title}</p>
            <div className="w-full mt-2 bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 h-2 rounded-full"
                style={{ width: `${skill.progress}%` }}
              />
            </div>
            <span className="text-[10px] text-gray-400 mt-1">
              {+skill.progress}%
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
