import "./SoftwareSkill.css";
import { useState } from "react";
// import { Icon } from "@iconify/react";

const SoftwareSkill = ({ logos }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons flex flex-wrap gap-4 justify-center items-center">
        {logos?.map((logo) => (
          <li
            key={logo.skillName}
            className="relative software-skill-inline cursor-pointer"
            onMouseEnter={() => setHoveredSkill(logo.skillName)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* Icon font */}
            {logo.fontAwesomeClassname && (
              <span
                className="iconify text-3xl"
                data-icon={logo.fontAwesomeClassname}
                style={logo.style}
                data-inline="false"
                alt={logo.skillName}
                title="HTML5"
              ></span>
            )}

            {/* Tooltip */}
            {hoveredSkill === logo.skillName && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm rounded-md bg-gray-700 text-white shadow-lg z-10 whitespace-nowrap">
                {logo.skillName}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftwareSkill;

{
  /* <Icon icon="simple-icons:html5" className="text-3xl text-[#E34F26]" /> */
}

// import React from "react";
// import "./SoftwareSkill.css";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

// class SoftwareSkill extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="software-skills-main-div">
//           <ul className="dev-icons">
//             {/* {skillsSection.softwareSkills.map(skills => {
//             return (
//               <li className="software-skill-inline" name={skills.skillName}>
//                 <i className={skills.fontAwesomeClassname}></i>
//               </li>
//             );
//           })} */}
//             {this.props.logos.map((logo) => {
//               return (
//                 <OverlayTrigger
//                   key={logo.skillName}
//                   placement={"top"}
//                   overlay={
//                     <Tooltip id={`tooltip-top`}>
//                       <strong>{logo.skillName}</strong>
//                     </Tooltip>
//                   }
//                 >
//                   <li className="software-skill-inline" name={logo.skillName}>
//                     {logo.fontAwesomeClassname && (
//                       <span
//                         className="iconify"
//                         data-icon={logo.fontAwesomeClassname}
//                         style={logo.style}
//                         data-inline="false"
//                       ></span>
//                     )}
//                     {!logo.fontAwesomeClassname && logo.imageSrc && (
//                       <img
//                         className="skill-image"
//                         style={logo.style}
//                         src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
//                         alt={logo.skillName}
//                       />
//                     )}
//                   </li>
//                 </OverlayTrigger>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default SoftwareSkill;
