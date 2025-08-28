import { saveAs } from "file-saver";

const About = ({ darkMode }) => {
  const handleDownloadCV = () => {
    // Replace with the actual path to your CV file
    const cvPath = "./Manuhe_wolde.pdf";
    saveAs(cvPath, "Manuhe_Wolde_CV.pdf");
  };

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
              <div
                className={`h-96 ${
                  darkMode ? "bg-gray-700" : "bg-gray-200"
                } flex items-center justify-center`}
              >
                <img
                  src="/images/manu23.jpg"
                  alt="Manuhe Wolde - Fullstack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              Fullstack Developer | Software Engineer
            </h3>
            <div
              className={`mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } space-y-4`}
            >
              <p>
                I'm a passionate Software Engineering graduate with hands-on
                experience in building modern web applications. My journey in
                tech began with a curiosity about how things work digitally,
                which evolved into a professional pursuit of creating impactful
                digital solutions.
              </p>

              <p>
                Specializing in JavaScript ecosystems, I've worked extensively
                with{" "}
                <span className="font-medium">
                  React, Next.js, Nuxt.js, Laravel, and Tailwind CSS
                </span>{" "}
                to deliver responsive, performant, and user-friendly
                applications. My fullstack experience allows me to bridge the
                gap between frontend aesthetics and backend functionality.
              </p>

              <p>
                Currently seeking new opportunities to bring my skills to
                innovative projects and teams. Let's connect and explore how I
                can contribute to your organization's success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <p className="font-medium">Name:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Manuhe Wolde Gebreyohannis
                </p>
              </div>
              <div>
                <p className="font-medium">Date of birth:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  October 24, 2001
                </p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Addis Ababa, Ethiopia
                </p>
              </div>
              <div>
                <p className="font-medium">Education:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  B.Sc. in Software Engineering
                </p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  manuhe839@gmail.com
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
              } flex flex-col sm:flex-row items-center justify-between gap-4`}
            >
              <div className="text-center sm:text-left">
                <p className="text-3xl font-bold">3+</p>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  Projects completed
                </p>
              </div>
              <button
                onClick={handleDownloadCV}
                className={`px-6 py-3 rounded-lg font-medium ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white transition-colors whitespace-nowrap`}
                aria-label="Download CV"
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
