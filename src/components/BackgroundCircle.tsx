import React from "react";
import { motion, useAnimation } from "framer-motion";

const BackgroundCircle = () => {
  const controls = useAnimation();

  const variants = {
    initial: {
      opacity: 0,
      scale: 1,
      borderRadius: "20%",
    },
    animate: {
      opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      scale: [1, 1.5, 2, 2.5, 1.5, 1],
      borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
      },
    },
  };

  const startAnimation = async () => {
    await controls.start("animate");
    controls.start("initial");
    startAnimation();
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={variants}
      className="relative flex justify-center items-center mt-16"
    >
      <div className="absolute border border-[#33333] opacity-60 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#33333] opacity-20 h-[500px] w-[500px] absolute mt-52 " />
      <div className="rounded-full border border-secondary opacity-20 h-[650px] w-[650px] absolute mt-52 animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircle;
