import React, { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import { fetchLanguages } from "../../../API/githubApi"; // Import the fetchLanguages function

const ProjectCard = ({ value }) => {
  const {
    name,
    description,
    svn_url,
    stargazers_count,
    languages_url,
    pushed_at,
    homepage,
  } = value;

  return (
    <div className="shadow-lg py-6 px-5 md:p-6 mb-6 bg-white rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl h-full border border-gray-300">
      <div>
        {/* Project Title Section */}
        <h5 className="relative text-2xl font-bold mb-3 text-gray-900 line-clamp-1 transition-colors duration-300 group">
          <span className="absolute inset-0 bg-indigo-50 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 group-hover:text-indigo-700 transition-colors duration-300"
          >
            {name || <Skeleton />}
          </a>
        </h5>

        {/* Project Description */}
        <p className="line-clamp-3 mb-4 text-gray-700 text-base">
          {description ? description : <Skeleton count={3} />}
        </p>

        {/* Action Buttons */}
        {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
        <hr className="my-4 border-gray-300" />

        {/* Languages Section */}
        {languages_url ? (
          <Language languages_url={languages_url} repo_url={svn_url} />
        ) : (
          <Skeleton count={3} />
        )}

        {/* Card Footer */}
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
    <div className="flex gap-3 mb-4">
      <a
        href={svn_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg shadow transition-transform transform hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
      >
        <i className="fab fa-github" /> View Code
      </a>
      <a
        href={`${svn_url}/archive/master.zip`}
        className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-500 py-2 px-4 rounded-lg shadow transition-transform transform hover:scale-105 hover:from-indigo-600 hover:to-blue-600"
      >
        <i className="fab fa-github" /> Clone
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
    <div className="pb-3 text-gray-800">
      {loading ? (
        <Skeleton count={3} />
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : languagesArray.length ? (
        <div>
          Languages:{" "}
          {languagesArray.map((language) => (
            <a
              key={language}
              className="text-indigo-600 hover:underline"
              href={`${repo_url}/search?l=${language}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="inline-flex items-center bg-indigo-100 text-indigo-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded">
                {language}:{" "}
                {Math.trunc((data[language] / total_count) * 1000) / 10}%
              </span>
            </a>
          ))}
        </div>
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
      return setUpdated_at(`${hours} ${measurement} ago`);
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
    <p className="text-gray-600 mt-4">
      <a
        href={`${repo_url}/stargazers`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:underline"
      >
        <span className="mr-4 inline-flex items-center">
          <i className="fab fa-github" /> Stars{" "}
          <span className="bg-indigo-600 text-white rounded-full px-2 ml-1">
            {star_count}
          </span>
        </span>
      </a>
      <small className="text-gray-500 ">Updated {updated_at}</small>
    </p>
  );
};

export default ProjectCard;

// import React, { useState, useEffect, useCallback } from "react";
// import Skeleton from "react-loading-skeleton";
// import { fetchLanguages } from "../../API/githubApi"; // Import the fetchLanguages function

// const ProjectCard = ({ value }) => {
//   const {
//     name,
//     description,
//     svn_url,
//     stargazers_count,
//     languages_url,
//     pushed_at,
//     homepage,
//   } = value;

//   return (
//     <div className="shadow-lg py-6 px-3 md:p-6 mb-5 bg-white rounded-lg transition-transform transform hover:scale-105 h-full border border-gray-200">
//       <div>
//         {/* Styled Name Section */}
//         <h5 className="relative text-2xl font-bold mb-2 text-black line-clamp-1 transition-colors duration-300 group">
//           <span className="absolute inset-0 bg-blue-50 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
//           <a
//             href={homepage}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="relative z-10 group-hover:text-blue-800 transition-colors duration-300"
//           >
//             {name || <Skeleton />}
//           </a>
//         </h5>

//         <p className="line-clamp-3 mb-4 text-gray-700 text-base">
//           {description ? description : <Skeleton count={3} />}
//         </p>

//         {svn_url ? <CardButtons svn_url={svn_url} /> : <Skeleton count={2} />}
//         <hr className="my-4 border-gray-300" />
//         {languages_url ? (
//           <Language languages_url={languages_url} repo_url={svn_url} />
//         ) : (
//           <Skeleton count={3} />
//         )}
//         <CardFooter
//           star_count={stargazers_count}
//           repo_url={svn_url}
//           pushed_at={pushed_at}
//         />
//       </div>
//     </div>
//   );
// };

// const CardButtons = ({ svn_url }) => {
//   return (
//     <div className="flex gap-2 mb-4">
//       <a
//         href={`${svn_url}/archive/master.zip`}
//         className="flex-1 bg-gradient-to-r bg-blue-400 py-2 px-4 rounded-lg shadow transition-transform transform hover:scale-105 hover:bg-blue-700 hover:shadow-lg"
//       >
//         <i className="fab fa-github" /> Clone Project
//       </a>
//       <a
//         href={svn_url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex-1 bg-gradient-to-r from-indigo-400 to-purple-400 text-white py-2 px-4 rounded-lg shadow transition-transform transform hover:scale-105 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg"
//       >
//         <i className="fab fa-github" /> Repo
//       </a>
//     </div>
//   );
// };

// const Language = ({ languages_url, repo_url }) => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const handleRequest = useCallback(async () => {
//     try {
//       setLoading(true);
//       const response = await fetchLanguages(languages_url);
//       setData(response);
//     } catch (error) {
//       setError("Failed to fetch languages.");
//     } finally {
//       setLoading(false);
//     }
//   }, [languages_url]);

//   useEffect(() => {
//     handleRequest();
//   }, [handleRequest]);

//   const total_count = Object.values(data).reduce(
//     (acc, count) => acc + count,
//     0
//   );
//   const languagesArray = Object.keys(data);

//   return (
//     <div className="pb-3 text-gray-800">
//       {loading ? (
//         <Skeleton count={3} />
//       ) : error ? (
//         <p className="text-red-600">{error}</p>
//       ) : languagesArray.length ? (
//         <div>
//           Languages:{" "}
//           {languagesArray.map((language) => (
//             <a
//               key={language}
//               className="text-blue-600 hover:underline"
//               href={`${repo_url}/search?l=${language}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium mr-1 px-2.5 py-0.5 rounded">
//                 {language}:{" "}
//                 {Math.trunc((data[language] / total_count) * 1000) / 10}%
//               </span>
//             </a>
//           ))}
//         </div>
//       ) : (
//         "Code yet to be deployed."
//       )}
//     </div>
//   );
// };

// const CardFooter = ({ star_count, repo_url, pushed_at }) => {
//   const [updated_at, setUpdated_at] = useState("0 mins");

//   const handleUpdatetime = useCallback(() => {
//     const date = new Date(pushed_at);
//     const nowdate = new Date();
//     const diff = nowdate.getTime() - date.getTime();
//     const hours = Math.trunc(diff / 1000 / 60 / 60);

//     if (hours < 24) {
//       if (hours < 1) return setUpdated_at("just now");
//       const measurement = hours === 1 ? "hour" : "hours";
//       return setUpdated_at(`${hours.toString()} ${measurement} ago`);
//     } else {
//       const options = { day: "numeric", month: "long", year: "numeric" };
//       const time = new Intl.DateTimeFormat("en-US", options).format(date);
//       return setUpdated_at(`on ${time}`);
//     }
//   }, [pushed_at]);

//   useEffect(() => {
//     handleUpdatetime();
//   }, [handleUpdatetime]);

//   return (
//     <p className="text-gray-600 mt-4">
//       <a
//         href={`${repo_url}/stargazers`}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-gray-800 hover:underline"
//       >
//         <span className="mr-4">
//           <i className="fab fa-github" /> Stars{" "}
//           <span className="bg-blue-600 text-white rounded-full px-2">
//             {star_count}
//           </span>
//         </span>
//       </a>
//       <small className="text-gray-500">Updated {updated_at}</small>
//     </p>
//   );
// };

// export default ProjectCard;
