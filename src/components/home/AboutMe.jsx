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
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {showPic && (
          <div className="lg:w-1/3 flex justify-center mb-10 lg:mb-0">
            <img
              className="border-4 border-gray-300 rounded-full shadow-lg"
              src={profilePicUrl || "fallback-image-url.jpg"}
              alt="Profile"
              width={imgSize}
              height={imgSize}
            />
          </div>
        )}
        <div
          className={`lg:w-${
            showPic ? "2/3" : "full"
          } flex flex-col justify-center text-center lg:text-left`}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-5 leading-tight">
            {heading}
          </h2>
          <p className="text-xl text-gray-600 mb-8">{message}</p>
          {resume && (
            <div className="flex justify-center lg:justify-start">
              <a
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Resume/CV"
              >
                View Resume
              </a>
            </div>
          )}
        </div>
        <div className="mt-10 flex justify-center lg:justify-start">
          <GreetingLottie animationData={codingAnimation} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

// import React from "react";
// import axios from "axios";

// const pictureLinkRegex = new RegExp(
//   /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
// );

// const AboutMe = ({ heading, message, link, imgSize, resume }) => {
//   const [profilePicUrl, setProfilePicUrl] = React.useState("");
//   const [showPic, setShowPic] = React.useState(Boolean(link));

//   React.useEffect(() => {
//     const handleRequest = async () => {
//       const instaQuery = "/?__a=1";
//       try {
//         setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
//       } catch (error) {
//         setShowPic(false);
//         console.error(error.message);
//       }
//     };

//     if (link && !pictureLinkRegex.test(link)) {
//       handleRequest();
//     } else {
//       setProfilePicUrl(link);
//     }
//   }, [link]);

//   return (
//     <section id="aboutme" className="m-0 py-10">
//       <div className="container mx-auto flex flex-col lg:flex-row">
//         {showPic && (
//           <div className="lg:w-1/3 flex justify-center mb-6 lg:mb-0">
//             <img
//               className="border border-gray-300 rounded-full"
//               src={profilePicUrl}
//               alt="Profile"
//               width={imgSize}
//               height={imgSize}
//             />
//           </div>
//         )}
//         <div className={`lg:w-${showPic ? "2/3" : "full"}`}>
//           <h2 className="text-4xl font-bold mb-5 text-center">{heading}</h2>
//           <p className="text-lg text-center">{message}</p>
//           {resume && (
//             <div className="text-center mt-4">
//               <a
//                 className="inline-block px-6 py-2 text-lg border border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition"
//                 href={resume}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 aria-label="Resume/CV"
//               >
//                 Resume
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
