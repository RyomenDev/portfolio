import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../../editable-stuff/config.js";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function SocialMedia({ theme }) {
  return (
    <>
      <div className="social-media-div">
        {socialMediaLinks.map((media, index) => (
          <a
            key={index}
            href={media.link}
            className="icon-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={media.name || "social media link"}
          >
            <IconWrapper backgroundColor={media.backgroundColor} theme={theme}>
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        ))}
      </div>
      {/* <i className="fab fa-github"></i>
<i className="fab fa-linkedin-in"></i>
<i className="fab fa-youtube"></i>
<i className="fab fa-instagram"></i>      */}
    </>
  );
}

// import React from "react";
// import "./SocialMedia.css";
// import { socialMediaLinks } from "../../../editable-stuff/config.js";
// import styled from "styled-components";

// const IconWrapper = styled.span`
//   i {
//     background-color: ${(props) => props.backgroundColor || "transparent"};
//     transition: 0.3s ease-in-out;
//     border-radius: 50%;
//     padding: 10px;
//   }

//   &:hover i {
//     background-color: ${({ theme }) => theme.text};
//     color: ${({ theme }) => theme.body}; /* Optional contrast */
//     transform: scale(1.1);
//   }
// `;

// export default function socialMedia(props) {
//   return (
//     <div className="social-media-div">
//       {socialMediaLinks.map((media, i) => {
//         return (
//           <a
//             key={i}
//             href={media.link}
//             className={`icon-button`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <IconWrapper {...media} {...props}>
//               <i className={`fab ${media.fontAwesomeIcon}`}></i>
//             </IconWrapper>
//             {/* <span></span> */}
//           </a>
//         );
//       })}
//     </div>
//   );
// }
