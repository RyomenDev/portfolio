import React from "react";

const ExperienceCard = ({ data }) => {
  return (
    <>
      <div className="lg:w-1/2 p-4">
        <a
          href={data.completionLetter}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white shadow-lg rounded-lg p-5 text-center transition-transform transform hover:scale-105"
        >
          <img
            className="w-auto h-16 mx-auto mb-3"
            src={data.companyLogo}
            alt={`${data.role} at ${data.company}`}
          />
          <p className="text-lg font-semibold">
            {data.role}
            <br />
            <span className="text-gray-500">{data.date}</span>
          </p>
        </a>
      </div>
    </>
  );
};

export default ExperienceCard;
