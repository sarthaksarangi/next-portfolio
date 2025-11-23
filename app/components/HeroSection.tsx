"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechIllustration } from "./TexhIllustration";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#0a0d14] to-[#0d1117]"
    >
      {/* Static Background Grid - removed animation */}
      <div className="absolute inset-0 grid-background opacity-[0.12] md:opacity-[0.18]" />

      {/* Static Gradient Orbs - removed animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 md:pt-36 lg:pt-44 pb-20 sm:pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1">
            {/* Name Section - simplified glow */}
            <motion.div
              variants={itemVariants}
              className="relative inline-block"
            >
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl md:blur-3xl opacity-50" />
              <h1
                className="relative font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 leading-[1.1] sm:leading-[1.15] md:leading-[1.2] px-2 sm:px-4 drop-shadow-2xl"
                style={{ fontSize: "clamp(1.5rem, 6vw, 4.2rem)" }}
              >
                Sarthak Sarangi
              </h1>
            </motion.div>

            {/* Role & Description */}
            <motion.div
              variants={itemVariants}
              className="space-y-5 sm:space-y-6 md:space-y-7 mt-5 sm:mt-7 md:mt-9"
            >
              <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-5">
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <span className="h-[2px] sm:h-[2.5px] w-12 sm:w-16 md:w-20 bg-gradient-to-r from-transparent via-blue-500 to-blue-500" />
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide font-bold text-white whitespace-nowrap drop-shadow-lg">
                    Full Stack Developer
                  </h2>
                  <span className="h-[2px] sm:h-[2.5px] w-12 sm:w-16 md:w-20 bg-gradient-to-l from-transparent via-blue-500 to-blue-500" />
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-200 sm:text-gray-300 max-w-2xl lg:max-w-none mx-auto lg:mx-0 px-4 sm:px-6 lg:px-0 leading-relaxed font-light">
                  Crafting exceptional digital experiences with modern web
                  technologies
                </p>
              </div>

              {/* Tech Stack Pills - Primary */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 px-2 sm:px-4 lg:px-0"
              >
                {[
                  {
                    name: "TypeScript",
                    className:
                      "bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border-blue-500/30 hover:border-blue-500/50 shadow-lg shadow-blue-500/10",
                  },
                  {
                    name: "React & Next.js",
                    className:
                      "bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border-purple-500/30 hover:border-purple-500/50 shadow-lg shadow-purple-500/10",
                  },
                  {
                    name: "Node.js",
                    className:
                      "bg-teal-500/15 hover:bg-teal-500/25 text-teal-300 border-teal-500/30 hover:border-teal-500/50 shadow-lg shadow-teal-500/10",
                  },
                  {
                    name: "Python",
                    className:
                      "bg-blue-500/15 hover:bg-blue-500/25 text-blue-300 border-blue-500/30 hover:border-blue-500/50 shadow-lg shadow-blue-500/10",
                  },
                  {
                    name: "AWS",
                    className:
                      "bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 border-purple-500/30 hover:border-purple-500/50 shadow-lg shadow-purple-500/10",
                  },
                ].map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold border-2 transition-all duration-300 cursor-default backdrop-blur-sm ${tech.className}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </motion.div>

              {/* Tech Stack Pills - Secondary */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 px-2 sm:px-4 lg:px-0"
              >
                {["Express", "PL/SQL", "Prisma ORM", "Mongo DB", "Java"].map(
                  (tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-[#1A1F2B]/80 hover:bg-[#252B38] rounded-full text-xs sm:text-sm md:text-base font-medium text-gray-300 sm:text-gray-200 border border-[#2D333B] hover:border-blue-500/50 transition-all duration-300 cursor-default backdrop-blur-sm shadow-md"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-5 md:gap-6 mt-10 sm:mt-12 md:mt-16 lg:mt-20 w-full px-4 sm:px-6 lg:px-0"
            >
              <motion.a
                href="#work"
                className="group relative inline-flex items-center justify-center w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1 sm:-inset-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg sm:blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <span className="relative px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[#161B22]/90 hover:bg-[#1a2028] rounded-full inline-flex items-center justify-center w-full sm:w-auto text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-gray-100 transition-colors duration-300 border border-gray-800/60 backdrop-blur-sm shadow-xl">
                  View My Work
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-[#21262D]/90 hover:bg-[#2a3139] rounded-full border-2 border-[#2D333B] hover:border-gray-500 text-center w-full sm:w-auto text-sm sm:text-base md:text-lg font-bold text-gray-100 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-5 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-14"
            >
              {[
                {
                  name: "GitHub",
                  icon: (
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  href: "https://github.com/sarthaksarangi",
                },
                {
                  name: "LinkedIn",
                  icon: (
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                  href: "https://linkedin.com/in/sarthaksarangi",
                },
                {
                  name: "Twitter",
                  icon: (
                    <svg
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "https://x.com/sarthaksarangi_",
                },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 sm:p-4 text-gray-400 hover:text-blue-400 transition-colors duration-300 rounded-xl bg-gray-900/40 hover:bg-gray-800/60 border border-gray-800/50 hover:border-blue-500/40 backdrop-blur-sm shadow-lg"
                  aria-label={social.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-pink-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative block">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - 3D Illustration */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] xl:h-[700px] min-h-[400px] flex items-center justify-center relative w-full"
          >
            <TechIllustration />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - static animation */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 md:bottom-12 inset-x-0 flex flex-col items-center gap-3"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <span className="text-gray-400 text-xs sm:text-sm font-medium">
          Scroll to explore
        </span>
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </div>
  );
};
