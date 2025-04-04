import "./Skills.css";
import SkillSection from "./SkillSection";
import { motion } from "framer-motion";

export default function Skills({ theme }) {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div mb-14">
        <motion.h1
          className="skills-header"
          style={{ color: theme.text }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What I Do?
        </motion.h1>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}

// import React from "react";
// import "./Skills.css";
// import SkillSection from "./SkillSection";
// import { Fade } from "react-reveal";

// export default function Skills(props) {
//   const theme = props.theme;
//   return (
//     <div className="main" id="skills">
//       <div className="skills-header-div">
//         <Fade bottom duration={2000} distance="20px">
//           <h1 className="skills-header" style={{ color: theme.text }}>
//             What I Do?
//           </h1>
//         </Fade>
//       </div>
//       <SkillSection theme={theme} />
//     </div>
//   );
// }
