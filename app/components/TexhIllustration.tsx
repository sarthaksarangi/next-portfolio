import { motion } from "framer-motion";

export const TechIllustration = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ minHeight: "400px" }}
      >
        {/* Main 3D Cube - Central Focus */}
        <motion.div
          className="relative z-10"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front face */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 backdrop-blur-sm border-2 border-blue-500/50 rounded-2xl shadow-2xl flex items-center justify-center"
              style={{ transform: "translateZ(40px)" }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono text-white font-bold">
                {"</>"}
              </div>
            </div>
            {/* Right face */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/40 via-pink-500/40 to-purple-500/40 rounded-2xl"
              style={{ transform: "rotateY(90deg) translateZ(40px)" }}
            />
            {/* Left face */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-cyan-500/40 to-blue-500/40 rounded-2xl"
              style={{ transform: "rotateY(-90deg) translateZ(40px)" }}
            />
            {/* Top face */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/50 via-purple-500/50 to-pink-500/50 rounded-2xl"
              style={{ transform: "rotateX(90deg) translateZ(40px)" }}
            />
            {/* Bottom face */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-purple-500/30 rounded-2xl"
              style={{ transform: "rotateX(-90deg) translateZ(40px)" }}
            />
            {/* Back face */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/40 via-purple-500/40 to-blue-500/40 rounded-2xl"
              style={{ transform: "rotateY(180deg) translateZ(40px)" }}
            />
          </div>
        </motion.div>

        {/* Floating Smaller Cubes */}
        {[
          {
            size: 50,
            delay: 0,
            distance: 120,
            angle: 45,
            duration: 15,
          },
          {
            size: 60,
            delay: 2,
            distance: 140,
            angle: 135,
            duration: 18,
          },
          {
            size: 55,
            delay: 1,
            distance: 130,
            angle: 225,
            duration: 16,
          },
          {
            size: 58,
            delay: 3,
            distance: 135,
            angle: 315,
            duration: 17,
          },
        ].map((cube, idx) => (
          <motion.div
            key={idx}
            className="absolute"
            style={{
              width: `${cube.size}px`,
              height: `${cube.size}px`,
              transformStyle: "preserve-3d",
              left: "50%",
              top: "50%",
              marginLeft: `${
                Math.cos((cube.angle * Math.PI) / 180) * cube.distance -
                cube.size / 2
              }px`,
              marginTop: `${
                Math.sin((cube.angle * Math.PI) / 180) * cube.distance -
                cube.size / 2
              }px`,
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 15, -15, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: cube.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: cube.delay,
            }}
          >
            <div
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/40 rounded-lg"
                style={{ transform: "translateZ(15px)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-lg"
                style={{ transform: "rotateY(90deg) translateZ(15px)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-lg"
                style={{ transform: "rotateX(90deg) translateZ(15px)" }}
              />
            </div>
          </motion.div>
        ))}

        {/* Code Lines Floating */}
        {[
          { text: "const code = ()", y: "25%", delay: 0 },
          { text: "import { dev }", y: "40%", delay: 1 },
          { text: "export default", y: "55%", delay: 2 },
          { text: "function build()", y: "70%", delay: 0.5 },
        ].map((line, idx) => (
          <motion.div
            key={idx}
            className="absolute left-1/2 px-4 w-full flex justify-center pointer-events-none"
            style={{
              top: line.y,
              transform: "translateX(-50%)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: ["-150px", "0px", "0px", "150px"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: line.delay,
              ease: "easeInOut",
            }}
          >
            <div className="px-4 py-2 bg-gray-800/60 backdrop-blur-md border border-blue-500/30 rounded-lg text-blue-300 text-xs md:text-sm font-mono shadow-lg whitespace-nowrap">
              {line.text}
            </div>
          </motion.div>
        ))}

        {/* Orbiting Tech Icons */}
        {[
          { icon: "⚛️", angle: 0 },
          { icon: "🚀", angle: 120 },
          { icon: "💻", angle: 240 },
        ].map((item, i) => {
          const radius = 150;
          return (
            <motion.div
              key={i}
              className="absolute pointer-events-none"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "clamp(20px, 4vw, 48px)",
                lineHeight: 1,
              }}
              animate={{
                x: [
                  0,
                  Math.cos((item.angle * Math.PI) / 180) * radius,
                  Math.cos((item.angle * Math.PI) / 180) * radius,
                  0,
                ],
                y: [
                  0,
                  Math.sin((item.angle * Math.PI) / 180) * radius,
                  Math.sin((item.angle * Math.PI) / 180) * radius,
                  0,
                ],
                rotate: [0, 360],
              }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            >
              <span
                className="block filter drop-shadow-lg"
                style={{ fontSize: "clamp(18px, 3.2vw, 40px)", lineHeight: 1 }}
              >
                {item.icon}
              </span>
            </motion.div>
          );
        })}

        {/* Gradient Glow Effects */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-radial from-blue-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
          style={{
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 md:w-80 md:h-80 bg-gradient-radial from-purple-500/40 via-pink-500/30 to-transparent rounded-full blur-2xl -z-10 pointer-events-none"
          style={{
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </div>
  );
};
