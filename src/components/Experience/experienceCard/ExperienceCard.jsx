import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark }) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets?.map((item, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 ${
              isDark ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <span className="text-blue-500">➤</span> {item}
          </li>
        ))
      : null;
  };

  return (
    <>
      <div className={isDark ? "experience-card-dark" : "experience-card"}>
        <div
          style={{ background: rgb(colorArrays) }}
          className="experience-banner"
        >
          <div className="experience-blurred_div"></div>
          <div className="experience-div-company">
            <h5 className="experience-text-company">{cardInfo.company}</h5>
          </div>

          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={() => getColorArrays()}
          />
        </div>
        <div className="experience-text-details">
          <h5
            className={
              isDark
                ? "experience-text-role dark-mode-text"
                : "experience-text-role"
            }
          >
            {cardInfo.role}
          </h5>
          <h5
            className={
              isDark
                ? "experience-text-date dark-mode-text"
                : "experience-text-date"
            }
          >
            {cardInfo.date}
          </h5>
          <div className="relative my-1 p-4 ">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 shadow-md"></div>
            </div>
          </div>
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
          <div className="relative my-1 p-4 ">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 shadow-md"></div>
            </div>
          </div>

          <ul>
            <GetDescBullets
              descBullets={cardInfo.descBullets}
              isDark={isDark}
            />
          </ul>
        </div>
      </div>
    </>
  );
}
