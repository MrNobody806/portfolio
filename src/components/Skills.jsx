import { useState, useEffect, useRef, useMemo } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiLaravel,
  SiNodedotjs,
  SiFirebase,
  SiPhp,
  SiMysql,
  SiGit,
  SiDocker,
  SiFigma,
  SiGoogle,
  SiGraphql,
  SiTypescript,
  SiRedux,
  SiExpress,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { motion } from "framer-motion";

// Constants that won't change
const ITEM_WIDTH = 120;
const SCROLL_SPEED = 0.5;

const Skills = ({ darkMode }) => {
  // All skills combined (memoized to prevent unnecessary recalculations)
  const allSkills = useMemo(
    () => [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white" />,
      },
      { name: "Vue.js", icon: <SiVuedotjs className="text-green-500" /> },
      { name: "Nuxt.js", icon: <SiNuxtdotjs className="text-green-400" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400" />,
      },
      { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-500" /> },
      { name: "REST API", icon: <FaNetworkWired className="text-blue-500" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "Git", icon: <SiGit className="text-orange-600" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-600" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "SEO", icon: <SiGoogle className="text-blue-500" /> },
    ],
    []
  );

  // Duplicate items for seamless looping
  const duplicatedSkills = useMemo(
    () => [...allSkills, ...allSkills, ...allSkills],
    [allSkills]
  );

  const [scrollX, setScrollX] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationId;
    let lastTimestamp;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      lastTimestamp = timestamp;

      setScrollX((prev) => {
        const newScroll = prev + SCROLL_SPEED;
        // Reset to middle section when reaching the end for infinite loop
        if (newScroll >= allSkills.length * ITEM_WIDTH) {
          return ITEM_WIDTH;
        }
        return newScroll;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [allSkills.length]);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Skills
          </span>
        </h2>

        <div
          className={`rounded-xl p-6 ${
            darkMode ? "bg-gray-800" : "bg-white shadow-md"
          } overflow-hidden relative`}
        >
          {/* Gradient overlays for better UX */}
          <div
            className={`absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r ${
              darkMode
                ? "from-gray-800 to-transparent"
                : "from-white to-transparent"
            }`}
          />
          <div
            className={`absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l ${
              darkMode
                ? "from-gray-800 to-transparent"
                : "from-white to-transparent"
            }`}
          />

          <div ref={containerRef} className="relative h-48 w-full">
            <motion.div
              className="absolute flex items-center h-full"
              style={{
                x: -scrollX,
                width: `${duplicatedSkills.length * ITEM_WIDTH}px`,
              }}
            >
              {duplicatedSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  className={`flex flex-col items-center justify-center mx-4 w-24 h-24 rounded-xl ${
                    darkMode ? "bg-gray-700" : "bg-gray-100"
                  } cursor-pointer`}
                  style={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                    opacity:
                      hoveredIndex === null
                        ? 1
                        : hoveredIndex === index
                        ? 1
                        : 0.7,
                    zIndex: hoveredIndex === index ? 10 : 1,
                    boxShadow: darkMode
                      ? "0 4px 6px rgba(0, 0, 0, 0.1)"
                      : "0 4px 6px rgba(0, 0, 0, 0.05)",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-3xl mb-2">{skill.icon}</div>
                  <motion.span
                    className="text-sm font-medium text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div
          className={`mt-16 p-6 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-blue-50"
          } text-center max-w-4xl mx-auto`}
        >
          <h3 className="text-xl font-semibold mb-3">
            Continuously expanding my skill set
          </h3>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            I'm constantly learning new technologies to stay at the forefront of
            web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
