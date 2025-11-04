import { motion } from "framer-motion";

export function TechIllustration() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      style={{ minHeight: "500px" }}
    >
      {/* Main 3D Cube - Simplified rotation */}
      <motion.div
        className="relative z-10"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 border-2 border-blue-400/40 rounded-2xl flex items-center justify-center"
            style={{ transform: "translateZ(80px)" }}
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-mono text-white font-bold">
              {"</>"}
            </div>
          </div>

          {/* Right face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/25 via-pink-500/25 to-purple-500/25 border border-purple-400/30 rounded-2xl"
            style={{ transform: "rotateY(90deg) translateZ(80px)" }}
          />

          {/* Left face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-cyan-500/25 to-blue-500/25 border border-blue-400/30 rounded-2xl"
            style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
          />

          {/* Top face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 border border-purple-400/30 rounded-2xl"
            style={{ transform: "rotateX(90deg) translateZ(80px)" }}
          />

          {/* Bottom face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-purple-500/20 border border-purple-400/20 rounded-2xl"
            style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
          />

          {/* Back face */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-pink-500/25 via-purple-500/25 to-blue-500/25 border border-pink-400/30 rounded-2xl"
            style={{ transform: "rotateY(180deg) translateZ(80px)" }}
          />
        </div>
      </motion.div>

      {/* Simplified floating particles - just 3 instead of 4 */}
      {[
        { size: 40, x: -120, y: -80, delay: 0, duration: 6 },
        { size: 35, x: 130, y: -60, delay: 2, duration: 7 },
        { size: 38, x: 0, y: 120, delay: 4, duration: 6.5 },
      ].map((particle, idx) => (
        <motion.div
          key={idx}
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            marginLeft: particle.x - particle.size / 2,
            marginTop: particle.y - particle.size / 2,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-lg border border-blue-300/30" />
        </motion.div>
      ))}

      {/* Tech icons - simplified orbit */}
      {[
        { icon: "⚛️", angle: 0 },
        { icon: "🚀", angle: 120 },
        { icon: "💻", angle: 240 },
      ].map((item, i) => {
        const radius = 140;
        const x = Math.cos((item.angle * Math.PI) / 180) * radius;
        const y = Math.sin((item.angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 pointer-events-none text-3xl md:text-4xl"
            style={{
              marginLeft: -20,
              marginTop: -20,
            }}
            animate={{
              x: [0, x, x, 0],
              y: [0, y, y, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: i * 5,
            }}
          >
            {item.icon}
          </motion.div>
        );
      })}

      {/* Subtle code snippets - fewer and simpler */}
      {[
        { text: "const code = ()", top: "20%", delay: 0 },
        { text: "export default", top: "75%", delay: 4 },
      ].map((line, idx) => (
        <motion.div
          key={idx}
          className="absolute left-0 right-0 flex justify-center pointer-events-none"
          style={{ top: line.top }}
          animate={{
            opacity: [0, 0.6, 0.6, 0],
            x: ["-100%", "0%", "0%", "100%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
        >
          <div className="px-4 py-2 bg-slate-800/50 border border-blue-400/20 rounded-lg text-blue-300 text-sm font-mono">
            {line.text}
          </div>
        </motion.div>
      ))}

      {/* Single subtle glow - replaces multiple animated glows */}
      <div
        className="absolute top-1/2 left-1/2 w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-radial from-purple-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
