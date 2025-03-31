
import { Icon } from "@iconify/react";
import "./CompetitiveSites.css";

const CompetitiveSites = ({ logos }) => {
  return (
    <div className="competitive-sites-main-div">
      <ul className="dev-icons">
        {logos?.map((logo) => (
          <li
            key={logo.siteName}
            className="competitive-sites-inline relative group"
          >
            <a
              href={logo.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Icon
                icon={logo.iconifyClassname}
                style={{ ...logo.style, fontSize: "28px" }}
              />
            </a>
            {/* Tooltip on hover */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              {logo.siteName}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitiveSites;

// import React from "react";
// import "./CompetitiveSites.css";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

// class CompetitiveSites extends React.Component {
//   render() {
//     return (
//       <div className="competitive-sites-main-div">
//         <ul className="dev-icons">
//           {this.props.logos.map((logo) => {
//             return (
//               <OverlayTrigger
//                 key={logo.siteName}
//                 placement={"top"}
//                 style={{ marginBottom: "5px" }}
//                 overlay={
//                   <Tooltip id={`tooltip-top`}>
//                     <strong>{logo.siteName}</strong>
//                   </Tooltip>
//                 }
//               >
//                 <li className="competitive-sites-inline" name={logo.siteName}>
//                   <a
//                     href={logo.profileLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span
//                       className="iconify"
//                       data-icon={logo.iconifyClassname}
//                       style={logo.style}
//                       data-inline="false"
//                     ></span>
//                   </a>
//                 </li>
//               </OverlayTrigger>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default CompetitiveSites;
