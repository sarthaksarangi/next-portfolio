"use client";

import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Image from "next/image";

//

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Featured Projects
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            A collection of full-stack applications showcasing modern
            development practices
          </motion.p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/60 via-gray-900/40 to-gray-900/60 backdrop-blur-sm rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800/50 hover:border-gray-700/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Content */}
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                      <div className="space-y-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 sm:text-gray-400 text-base sm:text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Links */}
                      {(project.liveUrl || project.githubUrl) && (
                        <div className="flex flex-wrap gap-3 sm:gap-4">
                          {project.liveUrl && (
                            <motion.a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium transition-all duration-300 border border-blue-500/30 hover:border-blue-500/50"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span>View Live</span>
                              <svg
                                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/link relative inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg text-gray-300 hover:text-white text-sm sm:text-base font-medium transition-all duration-300 border border-gray-700/50 hover:border-gray-600"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <span>GitHub</span>
                              <svg
                                className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                            </motion.a>
                          )}
                        </div>
                      )}

                      {/* Technology Tags */}
                      {project.technologies &&
                        project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {project.technologies.map((tech) => (
                              <motion.span
                                key={tech}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/60 hover:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-300 border border-gray-700/50 hover:border-gray-600 transition-all duration-300"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        )}

                      {/* Features Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                        {project.frontendFeatures && (
                          <div className="space-y-3">
                            <h4 className="text-sm sm:text-base font-semibold text-blue-400 flex items-center gap-2">
                              <span className="w-1 h-4 bg-blue-500 rounded-full" />
                              {project.frontendFeatures.title}
                            </h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              {project.frontendFeatures.items.map(
                                (item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-blue-400 mt-1.5">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}

                        {project.backendFeatures && (
                          <div className="space-y-3">
                            <h4 className="text-sm sm:text-base font-semibold text-purple-400 flex items-center gap-2">
                              <span className="w-1 h-4 bg-purple-500 rounded-full" />
                              {project.backendFeatures.title}
                            </h4>
                            <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                              {project.backendFeatures.items.map(
                                (item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-purple-400 mt-1.5">
                                      •
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Achievements */}
                      {project.achievements && (
                        <div className="space-y-3 p-4 sm:p-5 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-xl border border-teal-500/20">
                          <h4 className="text-sm sm:text-base font-semibold text-teal-400 flex items-center gap-2">
                            <span className="w-1 h-4 bg-teal-500 rounded-full" />
                            {project.achievements.title}
                          </h4>
                          <ul className="space-y-2 text-sm sm:text-base text-gray-300">
                            {project.achievements.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-teal-400 mt-1.5">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Visual */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="order-1 lg:order-2"
                    >
                      <div className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 border border-gray-800/50 overflow-hidden group/visual">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-teal-500/0 opacity-0 group-hover/visual:opacity-100 transition-opacity duration-500" />
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-400 mb-4 relative z-10">
                          {project.imageUrl
                            ? "Project Screenshot"
                            : "System Architecture"}
                        </h4>
                        <div className=" aspect-auto  bg-black/50 rounded-lg overflow-hidden border border-gray-800/50 relative group/image">
                          {project.imageUrl ? (
                            <Image
                              width={500}
                              height={500}
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                            />
                          ) : (
                            <></>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
