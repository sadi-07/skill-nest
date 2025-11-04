import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-md z-50">
      {/* Spinner circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="w-20 h-20 border-[6px] border-transparent border-t-indigo-500 border-r-pink-500 rounded-full shadow-[0_0_25px_rgba(147,51,234,0.4)]"
      ></motion.div>

      {/* Glowing logo text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-6 text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-wider"
      >
        Skill Nest
      </motion.h1>

      {/* Small caption */}
      <p className="text-gray-300 text-sm mt-2 animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
