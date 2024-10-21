import React, { useState, useEffect } from "react";
import GreetingLottie from "./DisplayLottie";
import codingAnimation from "../../lottie/coding.json";

const AboutMe = ({ heading, message, profileImage, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [showPic, setShowPic] = useState(Boolean(profileImage));

  useEffect(() => {
    const handleRequest = async () => {
      try {
        setProfilePicUrl(profileImage);
        setShowPic(true);
      } catch (error) {
        setShowPic(false);
        console.error("Failed to fetch profile picture:", error.message);
      }
    };

    handleRequest();
  }, [profileImage]);

  return (
    <section id="aboutme" className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-4">
        {/* Profile Image Section */}
        {showPic && (
          <div className="lg:w-2/7 flex justify-center mb-10 lg:mb-0">
            <img
              className="border-4 border-gray-300 rounded-full shadow-lg"
              src={profilePicUrl || "fallback-image-url.jpg"}
              alt="Profile"
              width={imgSize}
              height={imgSize}
            />
          </div>
        )}

        {/* Message Section */}
        <div
          className={`lg:w-${
            showPic ? "2/3" : "full"
          } flex flex-col justify-center text-center `}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-5 leading-tight">
            {heading}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{message}</p>
          {resume && (
            <div className="flex justify-center">
              <a
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </div>
          )}
        </div>

        {/* Greeting Animation Section */}
        <div className="mt-10 lg:mt-0 lg:w-1/4 flex justify-center lg:justify-start lg:ml-10">
          <GreetingLottie animationData={codingAnimation} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
