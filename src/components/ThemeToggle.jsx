import { useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-full ${
        darkMode ? "bg-gray-700 text-yellow-300" : "bg-gray-200 text-gray-700"
      }`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;
