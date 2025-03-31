import React, { useState, useEffect, useCallback } from "react";
import { Jumbotron } from "./migration";
import ProjectCardGrid from "./ProjectCardGrid"; // Grid component for project cards
import { fetchSpecificRepo } from "../../../API/githubApi.jsx"; // Function to fetch repo details

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const Project = ({ heading, username, length, specific = [] }) => {
  // Create a dummy array with total expected projects
  const dummyProjectsArr = Array.from(
    { length: length + specific.length },
    () => dummyProject
  );
  const [projectsArray, setProjectsArray] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch specific repositories from GitHub
  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      await Promise.all(
        specific.map(async (repoName) => {
          try {
            const specificRepo = await fetchSpecificRepo(username, repoName);
            repoList.push(specificRepo);
          } catch (error) {
            console.error(
              `Error fetching specific repo: ${repoName}`,
              error.message
            );
          }
        })
      );
      setProjectsArray(repoList);
    } catch (error) {
      console.error("Error fetching repositories:", error.message);
    } finally {
      setLoading(false);
    }
  }, [username, specific]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron
      fluid
      id="projects"
      className="bg-gray-100 m-0 md:p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-5xl font-bold pb-5 text-center text-black border-b-2 border-gray-300 mb-4">
        {heading}
      </h2>
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div>
      ) : (
        <ProjectCardGrid
          projects={projectsArray.length > 0 ? projectsArray : dummyProjectsArr}
        />
      )}
      {/* Show More Button */}
      <div className="text-center mt-6">
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          More on GitHub
        </a>
      </div>
    </Jumbotron>
  );
};

export default Project;

// import React, { useState, useEffect, useCallback } from "react";
// import { Jumbotron } from "./migration";
// import ProjectCardGrid from "./ProjectCardGrid"; // Importing the grid component
// import { fetchSpecificRepo } from "../../API/githubApi"; // Import the function

// const dummyProject = {
//   name: null,
//   description: null,
//   svn_url: null,
//   stargazers_count: null,
//   languages_url: null,
//   pushed_at: null,
// };

// const Project = ({ heading, username, length, specific = [] }) => {
//   const dummyProjectsArr = Array.from(
//     { length: length + specific.length },
//     () => dummyProject
//   );
//   const [projectsArray, setProjectsArray] = useState([]);

//   const fetchRepos = useCallback(async () => {
//     let repoList = [];

//     try {
//       // Fetching specific repositories
//       await Promise.all(
//         specific.map(async (repoName) => {
//           try {
//             const specificRepo = await fetchSpecificRepo(username, repoName);
//             repoList.push(specificRepo);
//           } catch (error) {
//             console.error(
//               `Error fetching specific repo: ${repoName}`,
//               error.message
//             );
//           }
//         })
//       );

//       // Setting the projects array
//       setProjectsArray(repoList);
//     } catch (error) {
//       console.error("Error fetching repositories:", error.message);
//     }
//   }, [username, specific]);

//   useEffect(() => {
//     fetchRepos();
//   }, [fetchRepos]);

//   return (
//     <Jumbotron
//       fluid
//       id="projects"
//       className="bg-gray-100 m-0 md:p-8 rounded-lg shadow-md"
//     >
//       <h2 className="text-5xl font-bold pb-5 text-center text-black shadow-md m-2">
//         {heading}
//       </h2>
//       <ProjectCardGrid
//         projects={projectsArray.length > 0 ? projectsArray : dummyProjectsArr}
//       />
//       {/* Show More button */}
//       <div className="text-center mt-6">
//         <a
//           href={`https://github.com/${username}?tab=repositories`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-transform duration-200 transform hover:scale-105"
//         >
//           Show More on GitHub
//         </a>
//       </div>
//     </Jumbotron>
//   );
// };

// export default Project;
