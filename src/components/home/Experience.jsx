import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ experiences }) => {
  return (
    <>
      {/* <h1>Hello</h1> */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">
            {experiences.heading}
          </h2>
          <div className="flex justify-around">
            {experiences.data.map((data, index) => (
              <ExperienceCard key={index} data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
