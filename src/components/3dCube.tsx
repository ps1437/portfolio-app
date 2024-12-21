import React from "react";
import { motion } from "framer-motion";

function Cube({ size = 60, position = {  }, backgroundColor = "black" }) {
  return (
    <div
      style={{
        perspective: "900px",
        position: "absolute",
        ...position, 
        backgroundColor: "rgb(36, 36, 40)",
      }}
    >
      <motion.div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: backgroundColor,
          transformStyle: "preserve-3d",
          position: "absolute",
        }}
        animate={{
          rotateX: 360,
          rotateY: 360,
          scale: [1, 1.1, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "rgb(30, 30, 35)",
            transform: `rotateY(0deg) translateZ(${size/2}px)`,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: `${size / 4}px`,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          P
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "rgb(40, 40, 45)",
            transform: `rotateY(90deg) translateZ(${size/2}px)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: `${size / 4}px`,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          R
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "rgb(50, 50, 55)",
            transform: `rotateY(180deg) translateZ(${size/2}px)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: `${size / 4}px`,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          A
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "rgb(60, 60, 65)",
            transform: `rotateY(-90deg) translateZ(${size/2}px)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: `${size / 4}px`,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          V
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "rgb(70, 70, 75)",
            transform: `rotateX(90deg) translateZ(${size/2}px)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: `${size / 4}px`,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          EE
        </motion.div>
        <motion.div
          style={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "rgb(80, 80, 85)",
            transform: `rotateX(-90deg) translateZ(${size/2}px)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: `${size / 4}px`,
            fontWeight: "bold",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          N
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Cube;
