import React, { useState, useEffect, useCallback } from "react";
import { Jumbotron } from "./migration";
import ProjectCardGrid from "./ProjectCardGrid"; // Importing the grid component
import { fetchSpecificRepo } from "../../API/githubApi"; // Import the function

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const Project = ({ heading, username, length, specific = [] }) => {
  const dummyProjectsArr = Array.from(
    { length: length + specific.length },
    () => dummyProject
  );
  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];

    try {
      // Fetching specific repositories
      await Promise.all(
        specific.map(async (repoName) => {
          try {
            const specificRepo = await fetchSpecificRepo(username, repoName);
            // console.log(specificRepo);
            repoList.push(specificRepo);
          } catch (error) {
            console.error(
              `Error fetching specific repo: ${repoName}`,
              error.message
            );
          }
        })
      );

      // Setting the projects array
      setProjectsArray(repoList);
    } catch (error) {
      console.error("Error fetching repositories:", error.message);
    }
  }, [username, specific]);

  useEffect(() => {
    fetchRepos(); // This will run only once when the component mounts
  }, [fetchRepos]); // Added fetchRepos to the dependency array

  return (
    <Jumbotron fluid id="projects" className="bg-gray-100 m-0 p-6">
      <h2 className="text-4xl font-bold pb-5 text-center">{heading}</h2>
      <ProjectCardGrid
        projects={projectsArray.length > 0 ? projectsArray : dummyProjectsArr}
      />
      {/* Show More button */}
      <div className="text-center mt-6">
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Show More on GitHub
        </a>
      </div>
    </Jumbotron>
  );
};

export default Project;
