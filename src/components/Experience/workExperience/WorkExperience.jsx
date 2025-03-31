import React, { useContext } from "react";
import ExperienceCard from "../experienceCard/ExperienceCard";
import { workExperiences } from "../../../editable-stuff/config.js";
import { motion } from "framer-motion";
import StyleContext from "../../../contexts/StyleContext";
import "./WorkExperience.scss";

const WorkExperience = () => {
  const { isDark } = useContext(StyleContext);

  return workExperiences.display ? (
    <div id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="experience-container" id="workExperience">
          <div>
            {/* <h1 className="experience-heading">Experiences</h1> */}
            <h1 className="text-4xl md:text-5xl font-semibold text-center mb-10">
              Experiences
            </h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  ) : null;
};

export default WorkExperience;

// export default function WorkExperience() {
//   const { isDark } = useContext(StyleContext);

//   if (!workExperiences.display) return null;

//   return (
//     <div id="experience" className="px-6 md:px-12 lg:px-20 py-10">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 className="text-4xl md:text-5xl font-semibold text-center mb-10">
//           Experiences
//         </h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {workExperiences.experience.map((card, i) => (
//             <ExperienceCard
//               key={i}
//               isDark={isDark}
//               cardInfo={{
//                 company: card.company,
//                 desc: card.desc,
//                 date: card.date,
//                 companylogo: card.companylogo,
//                 role: card.role,
//                 descBullets: card.descBullets,
//               }}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

//

//

// import React, {useContext} from "react";
// import "./WorkExperience.scss";
// import ExperienceCard from "../../components/experienceCard/ExperienceCard";
// import {workExperiences} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";

// export default function WorkExperience() {
//   const {isDark} = useContext(StyleContext);
//   if (workExperiences.display) {
//     return (
//       <div id="experience">
//         <Fade bottom duration={1000} distance="20px">
//   <div className="experience-container" id="workExperience">
//     <div>
//       <h1 className="experience-heading">Experiences</h1>
//       <div className="experience-cards-div">
//         {workExperiences.experience.map((card, i) => {
//           return (
//             <ExperienceCard
//               key={i}
//               isDark={isDark}
//               cardInfo={{
//                 company: card.company,
//                 desc: card.desc,
//                 date: card.date,
//                 companylogo: card.companylogo,
//                 role: card.role,
//                 descBullets: card.descBullets
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   </div>
//         </Fade>
//       </div>
//     );
//   }
//   return null;
// }
