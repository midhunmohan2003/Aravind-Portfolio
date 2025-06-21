import React from "react";
import heroImage from "../assets/herobg.jpg";
import CV from "../assets/Aravind Resume.pdf";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      className="relative h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-white pl-8 md:pl-16 lg:pl-24"
      >
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl">I'm</h1>
          <h1 className="text-5xl md:text-6xl font-bold text-[#FFD700]">
            Aravind G
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl my-8 text-gray-200">
          Data Scientist
        </h2>
        <a
          href={CV}
          download="Aravind_Resume.pdf"
          className="inline-block px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-full hover:backdrop-blur-md transition-all"
        >
          Grab my CV
        </a>
      </motion.div>
    </div>
  );
}

export default Hero;
