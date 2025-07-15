import { ProjectType } from "types.ds";
import { urlFor } from "../../../sanity";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

type Props = {
  projects: ProjectType[];
};

export default function Projects({ projects }: Props) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <h3 className="text-4xl font-bold font-mono text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 mb-16">
        Projects
      </h3>

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "#111827" },
          fpsLimit: 60,
          particles: {
            color: { value: "#facc15" },
            links: {
              color: "#facc15",
              distance: 100,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: { default: "bounce" },
            },
            number: { value: 50 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={project._id}
            variants={cardVariants}
            transition={{ delay: idx * 0.1 }}
            onClick={() => window.open(project?.linkToBuild, "_blank")}
            className="group rounded-xl overflow-hidden bg-[#1a1a1a] shadow-md hover:shadow-yellow-400/30 transition duration-300 shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 border-4 border-indigo-600 cursor-pointer relative"
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={urlFor(project?.image).url()}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h4 className="text-white text-lg font-semibold">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-300 mt-1 line-clamp-3">
                  {project.summary}
                </p>
              </div>
            </div>
            <div className="px-4 py-3">
              <h5 className="text-yellow-400 font-semibold text-sm truncate">
                {project.title}
              </h5>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
