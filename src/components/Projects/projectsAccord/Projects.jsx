// import PublicationCard from "../../components/publicationsCard/PublicationCard";
// import Button from "../../components/button/Button";
// import TopButton from "../../components/topButton/TopButton";
import {
  //   greeting,
  projectsHeader,
  //   publicationsHeader,
  //   publications,
} from "../../portfolio.js";
import { motion } from "framer-motion";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects = ({ theme, onToggle }) => {
  return (
    <div className="projects-main">
      {/* <Header theme={theme} /> */}
      <div className="basic-projects">
        <motion.div
          className="projects-heading-div"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="projects-heading-img-div">
            <ProjectsImg theme={theme} />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text" style={{ color: theme.text }}>
              {projectsHeader.title}
            </h1>
            <p
              className="projects-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {projectsHeader.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* <TopButton theme={theme} /> */}
    </div>
  );
};

export default Projects;
