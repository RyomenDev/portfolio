import React, { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { fetchLanguages } from "../../API/githubApi"; // Import the fetchLanguages function

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
  } = value;

  return (
    <div className="shadow-lg p-4 mb-5 bg-white rounded-lg transition-transform hover:scale-105 h-full">
      <div>
        <h5 className="text-xl font-semibold mb-2 line-clamp-1">
          {name || <Skeleton />}
        </h5>
        <p className="line-clamp-3 mb-4">
          {description ? description : <Skeleton count={3} />}
        </p>
        {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
        <hr className="my-4" />
        {languages_url ? (
          <Language languages_url={languages_url} repo_url={svn_url} />
        ) : (
          <Skeleton count={3} />
        )}
        <CardFooter
          star_count={stargazers_count}
          repo_url={svn_url}
          pushed_at={pushed_at}
        />
      </div>
    </div>
  );
};

const CardButtons = ({ svn_url }) => {
  return (
    <div className="flex gap-2 mb-4">
      <a
        href={`${svn_url}/archive/master.zip`}
        className="btn btn-outline-secondary flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100 transition"
      >
        <i className="fab fa-github" /> Clone Project
      </a>
      <a
        href={svn_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-secondary flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-100 transition"
      >
        <i className="fab fa-github" /> Repo
      </a>
    </div>
  );
};

const Language = ({ languages_url, repo_url }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleRequest = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchLanguages(languages_url);
      setData(response);
    } catch (error) {
      setError("Failed to fetch languages.");
    } finally {
      setLoading(false);
    }
  }, [languages_url]);

  useEffect(() => {
    handleRequest();
  }, [handleRequest]);

  const total_count = Object.values(data).reduce(
    (acc, count) => acc + count,
    0
  );
  const languagesArray = Object.keys(data);

  return (
    <div className="pb-3">
      {loading ? (
        <Skeleton count={3} />
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : languagesArray.length ? (
        <>
          Languages:{" "}
          {languagesArray.map((language) => (
            <a
              key={language}
              className="text-blue-600 hover:underline"
              href={`${repo_url}/search?l=${language}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center bg-gray-200 text-gray-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded">
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10}%
              </span>
            </a>
          ))}
        </>
      ) : (
        "Code yet to be deployed."
      )}
    </div>
  );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
  const [updated_at, setUpdated_at] = useState("0 mins");

  const handleUpdatetime = useCallback(() => {
    const date = new Date(pushed_at);
    const nowdate = new Date();
    const diff = nowdate.getTime() - date.getTime();
    const hours = Math.trunc(diff / 1000 / 60 / 60);

    if (hours < 24) {
      if (hours < 1) return setUpdated_at("just now");
      const measurement = hours === 1 ? "hour" : "hours";
      return setUpdated_at(`${hours.toString()} ${measurement} ago`);
    } else {
      const options = { day: "numeric", month: "long", year: "numeric" };
      const time = new Intl.DateTimeFormat("en-US", options).format(date);
      return setUpdated_at(`on ${time}`);
    }
  }, [pushed_at]);

  useEffect(() => {
    handleUpdatetime();
  }, [handleUpdatetime]);

  return (
    <p className="text-gray-600">
      <a
        href={`${repo_url}/stargazers`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:underline"
      >
        <span className="mr-4">
          <i className="fab fa-github" /> Stars{" "}
          <span className="bg-gray-800 text-white rounded-full px-2">
            {star_count}
          </span>
        </span>
      </a>
      <small className="text-muted">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;
