import "./Contact.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { getInTouch } from "../../editable-stuff/config";
import SocialMedia from "../Greeting/socialMedia/SocialMedia.jsx";
import { motion } from "framer-motion";
import { useContext } from "react";
import StyleContext from "../../contexts/StyleContext.js";

export default function Contact() {
  const {
    heading,
    message,
    email,
    imageLink,
    subMessage,
    opportunity,
    number,
  } = getInTouch;
  const { isDark } = useContext(StyleContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`w-full px-20 py-10 md:py-14 mx-auto flex flex-wrap items-center justify-center md:justify-between ${
        isDark ? "bg-gray-900 text-white" : "bg-transparent text-gray-800"
      }`}
    >
      {/* Heading */}
      <h2 className="w-full text-5xl md:text-7xl md:text-left mb-6 order-1 contact-title">
        <h1 className="header-topic"> {heading}</h1>
      </h2>

      {/* Image */}
      <div className="w-full flex justify-center mb-6 md:mb-0 md:w-auto order-2 md:order-3">
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72">
          <div className="absolute inset-0 bg-blue-50 rounded-full animate-pulse "></div>
          <img
            src={imageLink}
            alt="Profile"
            className="relative w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-xl"
            // className="relative w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full md:flex-1 order-3 md:order-2 text-center md:text-left" // md:pl-8
      >
        <p
          // className="text-lg md:text-xl mb-3 text-gray-600 dark:text-gray-300"
          className={`text-3xl ${
            isDark ? "dark-mode contact-subtitle" : "subTitle contact-subtitle"
          }`}
        >
          {message}
        </p>
        <p className=" text-2xl  font-semibold text-gray-700 dark:text-gray-200 mb-4">
          {subMessage}
        </p>

        {/* Location */}
        <div className=" text-3xl flex items-center justify-center md:justify-start gap-2 mb-2 text-gray-700 dark:text-gray-300">
          <i className="fas fa-map-marker-alt text-blue-500"></i>
          <span>Remote</span>
        </div>

        {/* Opportunity */}
        <p className=" text-3xl text-gray-700 dark:text-gray-300 mb-4">
          Open for opportunities:{" "}
          <span className="font-semibold text-red-500">{opportunity}</span>
        </p>

        {/* Contact Links */}
        <div
          className={`mb-4 space-y-1 ${
            isDark ? "dark-mode contact-text-div" : "contact-text-div"
          }`}
        >
          {number && (
            <div>
              <a
                className="text-blue-600 hover:underline dark:text-blue-400 contact-detail"
                href={"tel:" + number}
              >
                {number}
              </a>
            </div>
          )}
          {email && (
            <div>
              <a
                className="text-blue-600 hover:underline dark:text-blue-400 contact-detail-email"
                href={"mailto:" + email}
              >
                {email}
              </a>
            </div>
          )}
        </div>

        {/* Social Media */}
        <SocialMedia />
      </motion.div>
    </motion.div>
  );
}
