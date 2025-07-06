const Projects = ({ darkMode }) => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "MaidFinder Platform",
      description:
        "A trusted online platform connecting users with professional, verified maids for hassle-free home cleaning services.",
      tags: [
        "Nuxt.js",
        "Node.js",
        "tailwindcss",
        "Laravel",
        "Payment Integration",
        "Background Checks",
      ],
      img: "./images/maid.jpg",
    },
    {
      id: 2,
      title: "Reunite Us Platform",
      description:
        "A compassionate, secure platform to reconnect missing loved ones using community alerts.",
      tags: [
        "Nuxt",
        "Node.js",
        "tailwindcss",
        "Laravel",
        "Geolocation",
        "Privacy-First",
      ],
      img: "./images/reunite.jpg",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website for a creative professional.",
      tags: ["React", "tailwindcss", "Firebase"],
      img: "./images/portfolio.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div
                className={`h-48 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Project {project.id}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? "bg-gray-700 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
