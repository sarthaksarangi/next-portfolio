"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export const SkillsSection = () => {
  const [selectedStack, setSelectedStack] = useState<
    "frontend" | "backend" | "devops" | null
  >(null);

  return (
    <div>
      {/* Interactive System Architecture */}
      <div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Frontend Layer */}
            <div
              className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                selectedStack === "frontend"
                  ? "bg-blue-500/20 border-blue-500/50"
                  : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
              }`}
              onMouseEnter={() => setSelectedStack("frontend")}
              onMouseLeave={() => setSelectedStack(null)}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">
                Frontend Development
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Modern React Architectures
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  Responsive & Interactive UIs
                </li>
              </ul>
            </div>

            {/* Backend Layer */}
            <div
              className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                selectedStack === "backend"
                  ? "bg-purple-500/20 border-purple-500/50"
                  : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
              }`}
              onMouseEnter={() => setSelectedStack("backend")}
              onMouseLeave={() => setSelectedStack(null)}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">
                Backend Development
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  API Design & Development
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  Database Architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                  Real-time Systems
                </li>
              </ul>
            </div>

            {/* DevOps Layer */}
            <div
              className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
                selectedStack === "devops"
                  ? "bg-teal-500/20 border-teal-500/50"
                  : "bg-gray-800/50 hover:bg-gray-800/80 border-transparent"
              }`}
              onMouseEnter={() => setSelectedStack("devops")}
              onMouseLeave={() => setSelectedStack(null)}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">
                DevOps & Cloud
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  AWS Infrastructure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  CI/CD Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  Scalable Architecture
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
