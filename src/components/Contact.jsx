import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_q0yr1v7", // Replace with your EmailJS service ID
        "template_7unztw3", // Replace with your EmailJS template ID
        form.current,
        "5tUl2zy8LLwR5Qs1v" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSubmitStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className={darkMode ? "text-blue-400" : "text-blue-600"}>
            Contact
          </span>{" "}
          Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-gray-800" : "bg-blue-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    +251-9-431-7302
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-gray-800" : "bg-blue-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    manuye03@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-gray-800" : "bg-blue-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 font-medium ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter subject"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-medium ${
                  darkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white transition-colors disabled:opacity-70`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div
                  className={`p-4 rounded-lg ${
                    darkMode
                      ? "bg-green-900 text-green-200"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className={`p-4 rounded-lg ${
                    darkMode
                      ? "bg-red-900 text-red-200"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  Failed to send message. Please try again later or contact me
                  directly at manuye03@gmail.com.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
