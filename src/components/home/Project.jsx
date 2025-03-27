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
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron
      fluid
      id="projects"
      className="bg-gray-100 m-0 md:p-8 rounded-lg shadow-md"
    >
      <h2 className="text-5xl font-bold pb-5 text-center text-black shadow-md m-2">
        {heading}
      </h2>
      <ProjectCardGrid
        projects={projectsArray.length > 0 ? projectsArray : dummyProjectsArr}
      />
      {/* Show More button */}
      <div className="text-center mt-6">
        <a
          href={`https://github.com/${username}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-transform duration-200 transform hover:scale-105"
        >
          Show More on GitHub
        </a>
      </div>
    </Jumbotron>
  );
};

export default Project;
