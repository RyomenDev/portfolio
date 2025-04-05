import "./Greeting.css";
import SocialMedia from "./socialMedia/SocialMedia.jsx";
import Button from "./button/Button.jsx";
import { greeting } from "../../editable-stuff/config.js";
import FeelingProud from "./FeelingProud";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Greeting({ theme }) {
  return (
    <>
      <div className="greeting-typewriter my-1 mx-4 md:mx-0" style={{ color: theme.text }}>
        <Typewriter
          options={{
            strings: [greeting.message],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 100,
            cursor: "|",
          }}
        />
      </div>
      <motion.div
        className="greet-main"
        id="greeting"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {/* {greeting.nickname && (
              <h2 className="greeting-nickname" style={{ color: theme.text }}>
                ( {greeting.nickname} )
              </h2>
            )} */}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>

              <SocialMedia theme={theme} />

              <div className="portfolio-repo-btn-div flex flex-col">
                <Button
                  text="Contact me"
                  href="#contact"
                  theme={theme}
                  newTab={true}
                />

                <div className="flex flex-wrap">
                  {greeting.resumeLink && (
                    <div className="mr-2">
                      <Button
                        text="View my resume"
                        href={greeting?.resumeLink}
                        theme={theme}
                        newTab={true}
                      />
                    </div>
                  )}
                  {greeting.resumeLink && (
                    <a
                      // href="/resume.pdf"
                      href={greeting?.downloadLink}
                      download="AkashMishra-CV.pdf"
                      className="download-link-button"
                      rel="noopener noreferrer"
                    >
                      <Button text="Download my resume" theme={theme} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </motion.div>
    </>
  );
}

{
  /* <Button
                text="⭐ Star Me On Github"
                newTab={true}
                href={greeting.portfolio_repository}
                theme={theme}
                className="portfolio-repo-btn"
              /> */
}

// import React from "react";
// import "./Greeting.css";
// import SocialMedia from "./socialMedia/SocialMedia.jsx";
// import Button from "./button/Button.jsx";
// import { greeting } from "../../editable-stuff/config.js";
// import { Fade } from "react-reveal";
// import FeelingProud from "./FeelingProud";

// export default function Greeting(props) {
//   const theme = props.theme;
//   return (
//     <Fade bottom duration={2000} distance="40px">
//       <div className="greet-main" id="greeting">
//         <div className="greeting-main">
//           <div className="greeting-text-div">
//             <div>
//               <h1 className="greeting-text" style={{ color: theme.text }}>
//                 {greeting.title}
//               </h1>
//               {greeting.nickname && (
//                 <h2 className="greeting-nickname" style={{ color: theme.text }}>
//                   ( {greeting.nickname} )
//                 </h2>
//               )}
//               <p
//                 className="greeting-text-p subTitle"
//                 style={{ color: theme.secondaryText }}
//               >
//                 {greeting.subTitle}
//               </p>
//               <SocialMedia theme={theme} />
//               <div className="portfolio-repo-btn-div">
//                 <Button
//                   text="⭐ Star Me On Github"
//                   newTab={true}
//                   href={greeting.portfolio_repository}
//                   theme={theme}
//                   className="portfolio-repo-btn"
//                 />
//               </div>
//               {/* <div className="button-greeting-div">
//               <Button text="Contact me" href="#contact" />
//               <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
//             </div> */}
//             </div>
//           </div>
//           <div className="greeting-image-div">
//             {/* <img
// 							alt="saad sitting on table"
// 							src={require("../../assets/images/feelingProud.svg")}
// 						></img> */}
//             <FeelingProud theme={theme} />
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// }
