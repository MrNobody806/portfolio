const Skills = ({ darkMode }) => {
  const skills = [
    { name: "PHP", percentage: 90 },
    { name: "jQuery", percentage: 85 },
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "WordPress", percentage: 70 },
    { name: "SEO", percentage: 80 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My{" "}
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Skills
          </span>
        </h2>

        <p
          className={`text-center max-w-2xl mx-auto mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          For far away, behind the word mountains, far from the countries
          Vokalia and Consonantia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  {skill.percentage}%
                </span>
              </div>
              <div
                className={`w-full h-2 rounded-full ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                }`}
              >
                <div
                  className={`h-full rounded-full ${
                    darkMode ? "bg-blue-500" : "bg-blue-600"
                  }`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
