import React, { useState } from "react";

const ExperienceCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  const charLimit = 200; // Set your character limit here

  const toggleExpanded = (e) => {
    e.stopPropagation(); // Prevent propagation if inside any clickable area
    setExpanded(!expanded);
  };

  const shouldTruncate = data.description.length > charLimit;
  const displayedDescription =
    shouldTruncate && !expanded
      ? data.description.slice(0, charLimit) + "..."
      : data.description;

  return (
    <div className="lg:w-1/2 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
        <a
          href={data.completionLetter}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-6 py-4"
        >
          <img
            className="w-auto h-16 mx-auto mb-4"
            src={data.companyLogo}
            alt={`${data.role} at ${data.company}`}
          />
          <h3 className="text-xl font-bold text-gray-800">{data.role}</h3>
          <p className="text-sm text-gray-500 mb-2">{data.date}</p>
        </a>
        <div className="px-6 pb-4">
          <p className="text-gray-700 leading-relaxed">
            {displayedDescription}
            {shouldTruncate && (
              <span
                className="text-blue-500 font-medium cursor-pointer ml-1"
                onClick={toggleExpanded}
              >
                {expanded ? "Read less" : "Read more"}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
