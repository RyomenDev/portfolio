// import React from "react";
import { motion } from "framer-motion";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import TopButton from "../../components/topButton/TopButton";
// import Educations from "../../containers/education/Educations";
// import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "./competitiveSites/CompetitiveSites.jsx";
import EducationImg from "./EducationImg";
// import { competitiveSites, certifications } from "../../portfolio";
import { competitiveSites } from "../../../editable-stuff/config.js";
import "./EducationAccord.css";

const Education = ({ theme }) => {
  return (
    <div className="education-main">
      {/* <Header theme={theme} /> */}
      <div className="basic-education">
        <motion.div
          className="heading-div"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="heading-img-div">
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Education
            </h1>
            <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Basic Qualification and Certifications
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
        </motion.div>

        {/* <Educations theme={theme} /> */}

        {/* {certifications.certifications.length > 0 && (
          <Certifications theme={theme} />
        )} */}
      </div>

      {/* <Footer theme={theme} />
      <TopButton theme={theme} /> */}
    </div>
  );
};

export default Education;

// import React, { Component } from "react";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
// import TopButton from "../../components/topButton/TopButton";
// import Educations from "../../containers/education/Educations";
// import Certifications from "../../containers/certifications/Certifications";
// import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
// import EducationImg from "./EducationImg";
// import { competitiveSites } from "../../portfolio";
// import { certifications } from "../../portfolio";
// import "./EducationComponent.css";
// import { Fade } from "react-reveal";

// class Education extends Component {
//   render() {
//     const theme = this.props.theme;
//     return (
//       <div className="education-main">
//         <Header theme={this.props.theme} />
//         <div className="basic-education">
//           <Fade bottom duration={2000} distance="40px">
//             <div className="heading-div">
//               <div className="heading-img-div">
//                 {/* <img
// 									src={require("../../assets/images/education.svg")}
// 									alt=""
// 								/> */}
//                 <EducationImg theme={theme} />
//               </div>
//               <div className="heading-text-div">
//                 <h1 className="heading-text" style={{ color: theme.text }}>
//                   Education
//                 </h1>
//                 <h3 className="heading-sub-text" style={{ color: theme.text }}>
//                   Basic Qualification and Certifcations
//                 </h3>
//                 <CompetitiveSites logos={competitiveSites.competitiveSites} />
//               </div>
//             </div>
//           </Fade>
//           <Educations theme={this.props.theme} />
//           {certifications.certifications.length > 0 ? (
//             <Certifications theme={this.props.theme} />
//           ) : null}
//         </div>
//         <Footer theme={this.props.theme} />
//         <TopButton theme={this.props.theme} />
//       </div>
//     );
//   }
// }

// export default Education;
