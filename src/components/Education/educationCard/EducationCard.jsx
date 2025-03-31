import { createRef, useContext } from "react";
import { motion } from "framer-motion";
import StyleContext from "../../../contexts/StyleContext";

export default function EducationCard({ school }) {
  const imgRef = createRef();
  const { isDark } = useContext(StyleContext);

  const GetDescBullets = ({ descBullets }) => {
    return descBullets ? (
      <ul className="mt-2">
        {descBullets.map((item, i) => (
          <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
            {item}
          </li>
        ))}
      </ul>
    ) : null;
  };

  if (!school.logo)
    console.error(`Image of ${school.name} is missing in education section`);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4  dark:border-gray-700 "
      >
        {school.logo && (
          <div className="flex-shrink-0">
            <img
              crossOrigin="anonymous"
              ref={imgRef}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
              src={school.logo}
              alt={school.schoolName}
            />
          </div>
        )}
        <div className="flex-1">
          <h5 className="text-lg font-bold text-gray-800 dark:text-white">
            {school.schoolName}
          </h5>
          <h6
            className={`text-md font-semibold ${
              isDark ? "text-gray-300" : "text-gray-600"
            } mt-1`}
          >
            {school.subHeader}
          </h6>
          <p
            className={`text-sm ${
              isDark ? "text-gray-400" : "text-gray-500"
            } mt-1`}
          >
            {school.duration}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {school.desc}
          </p>
          <GetDescBullets descBullets={school.descBullets} />
        </div>
      </motion.div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 2 }}
        className="h-1 bg-gray-300 dark:bg-gray-700 mt-4 rounded"
      ></motion.div>
    </div>
  );
}

// import React, { createRef, useContext } from "react";
// import { motion } from "framer-motion";
// import "./EducationCard.scss";
// import StyleContext from "../../contexts/StyleContext";

// export default function EducationCard({ school }) {
//   const imgRef = createRef();
//   const { isDark } = useContext(StyleContext);

//   const GetDescBullets = ({ descBullets }) => {
//     return descBullets
//       ? descBullets.map((item, i) => (
//           <li key={i} className="subTitle">
//             {item}
//           </li>
//         ))
//       : null;
//   };

//   if (!school.logo)
//     console.error(`Image of ${school.name} is missing in education section`);

//   return (
//     <div>
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="education-card"
//       >
//         {school.logo && (
//           <div className="education-card-left">
//             <img
//               crossOrigin="anonymous"
//               ref={imgRef}
//               className="education-roundedimg"
//               src={school.logo}
//               alt={school.schoolName}
//             />
//           </div>
//         )}
//         <div className="education-card-right">
//           <h5 className="education-text-school">{school.schoolName}</h5>

//           <div className="education-text-details">
//             <h5
//               className={
//                 isDark
//                   ? "dark-mode education-text-subHeader"
//                   : "education-text-subHeader"
//               }
//             >
//               {school.subHeader}
//             </h5>
//             <p
//               className={`${isDark ? "dark-mode" : ""} education-text-duration`}
//             >
//               {school.duration}
//             </p>
//             <p className="education-text-desc">{school.desc}</p>
//             <div className="education-text-bullets">
//               <ul>
//                 <GetDescBullets descBullets={school.descBullets} />
//               </ul>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 2 }}
//         className="education-card-border"
//       />
//     </div>
//   );
// }

//

//

// import React, {createRef, useContext} from "react";
// import {Fade, Slide} from "react-reveal";
// import "./EducationCard.scss";
// import StyleContext from "../../contexts/StyleContext";

// export default function EducationCard({school}) {
//   const imgRef = createRef();

//   const GetDescBullets = ({descBullets}) => {
//     return descBullets
//       ? descBullets.map((item, i) => (
//           <li key={i} className="subTitle">
//             {item}
//           </li>
//         ))
//       : null;
//   };
//   const {isDark} = useContext(StyleContext);

//   if (!school.logo)
//     console.error(`Image of ${school.name} is missing in education section`);
//   return (
//     <div>
//       <Fade left duration={1000}>
//         <div className="education-card">
//           {school.logo && (
//             <div className="education-card-left">
//               <img
//                 crossOrigin={"anonymous"}
//                 ref={imgRef}
//                 className="education-roundedimg"
//                 src={school.logo}
//                 alt={school.schoolName}
//               />
//             </div>
//           )}
//           <div className="education-card-right">
//             <h5 className="education-text-school">{school.schoolName}</h5>

//             <div className="education-text-details">
//               <h5
//                 className={
//                   isDark
//                     ? "dark-mode education-text-subHeader"
//                     : "education-text-subHeader"
//                 }
//               >
//                 {school.subHeader}
//               </h5>
//               <p
//                 className={`${
//                   isDark ? "dark-mode" : ""
//                 } education-text-duration`}
//               >
//                 {school.duration}
//               </p>
//               <p className="education-text-desc">{school.desc}</p>
//               <div className="education-text-bullets">
//                 <ul>
//                   <GetDescBullets descBullets={school.descBullets} />
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Fade>
//       <Slide left duration={2000}>
//         <div className="education-card-border"></div>
//       </Slide>
//     </div>
//   );
// }
