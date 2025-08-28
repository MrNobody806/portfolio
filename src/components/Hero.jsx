import { motion } from "framer-motion";
import { saveAs } from "file-saver";

const Hero = ({ darkMode }) => {
  const handlecvdownload = () => {
    const cvPath = "./Manuhe_wolde.pdf";
    saveAs(cvPath, "Manuhe_Wolde_CV.pdf");
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I'm{" "}
            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
              Manuhe Wolde
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Fullstack Web Developer
          </h2>
          <p
            className={`text-lg mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Creating beautiful, functional, and user-friendly web experiences.
          </p>
          <div className="flex space-x-4">
            <button
              onClick={handlecvdownload}
              className={`px-6 py-3 rounded-lg font-medium ${
                darkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white transition-colors`}
            >
              Download CV
            </button>
            <button
              onClick={scrollToContact}
              className={`px-6 py-3 rounded-lg font-medium ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition-colors`}
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div
            className={`w-64 h-64 md:w-80 md:h-80 rounded-full ${
              darkMode ? "bg-gray-700" : "bg-gray-200"
            } flex items-center justify-center overflow-hidden`}
          >
            {/* Placeholder for profile image */}
            <div className="text-4xl font-bold">
              <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
                <img
                  src="/images/manu3.jpg"
                  alt="MW"
                  className="w-full h-full object-cover"
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
