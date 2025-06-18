import React from "react";
import { motion } from "framer-motion";

export default function AnimeCard() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative group w-64 h-80 overflow-hidden rounded-2xl shadow-2xl border-4 border-yellow-400 bg-black spark-container"
    >
      <div className="absolute -inset-2 bg-gradient-to-br from-yellow-400 via-blue-500 to-transparent blur-xl opacity-30 animate-pulse z-0 rounded-2xl" />

      <img
        src="https://cdn.sanity.io/images/32pwszhn/production/cd10b446d3dbf7d6485bf6dfad2eb75c7824d42e-1280x960.jpg"
        alt="Anime Style"
        className="relative z-10 object-cover w-full h-full rounded-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
      />

      <div className="spark-layer pointer-events-none absolute inset-0 z-30" />

      <div className="absolute inset-0 z-20 bg-black bg-opacity-10  rounded-2xl group-hover:bg-opacity-0 transition-all duration-500" />
    </motion.div>
  );
}
