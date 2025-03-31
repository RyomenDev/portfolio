import React from "react";
import ProjectCard from "./ProjectCard"; // Ensure the correct path to ProjectCard

const ProjectCardGrid = ({ projects }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-center text-gray-500">
        <p>No projects available at this time.</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects?.map((project, index) => (
        <ProjectCard key={`project-${index}`} value={project} />
      ))}
    </div>
  );
};

export default ProjectCardGrid;

// import React from "react";
// import ProjectCard from "./ProjectCard"; // Ensure the correct path to ProjectCard

// const ProjectCardGrid = ({ projects }) => {
//   if (!projects || projects.length === 0) {
//     return (
//       <div className="text-center text-gray-500">
//         <p>No projects available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {projects?.map((project, index) => (
//         <ProjectCard key={`project-${index}`} value={project} />
//       ))}
//     </div>
//   );
// };

// export default ProjectCardGrid;
