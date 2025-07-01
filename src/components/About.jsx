const About = ({ darkMode }) => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            About
          </span>{" "}
          Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div
              className={`rounded-lg overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white shadow-lg"
              }`}
            >
              {/* Placeholder for about image */}
              <div
                className={`h-64 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                <p
                  className={`text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  About Me Image
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              A passionate Fullstack Web Developer
            </h3>
            <p
              className={`mb-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            >
              A small river named Dudan flows by their place and supplies it
              with the necessary regeltofo.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Manuhe Wolde
                </p>
              </div>
              <div>
                <p className="font-medium">Date of birth:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  October 24, 2001
                </p>
              </div>
              <div>
                <p className="font-medium">Address:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div>
                <p className="font-medium">Zip code:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  1000
                </p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  manuye03@gmail.com
                </p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  +251-9-4311-7302
                </p>
              </div>
            </div>

            <div
              className={`p-6 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-blue-50"
              } flex items-center justify-between`}
            >
              <div>
                <p className="text-3xl font-bold">73</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Projects complete
                </p>
              </div>
              <button
                className={`px-6 py-3 rounded-lg font-medium ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white transition-colors`}
              >
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
