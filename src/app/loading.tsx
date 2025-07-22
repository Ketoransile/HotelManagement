"use client";

import { motion } from "framer-motion";

export default function Loading() {
  const dots = [0, 1, 2, 3];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3">
        {dots.map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"
            animate={{
              y: ["0%", "-60%", "0%"],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 0.1,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
