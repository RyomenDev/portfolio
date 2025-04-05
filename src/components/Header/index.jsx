import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext.js";
import { greeting } from "../../editable-stuff/config.js";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = true; //workExperiences.display;
  const viewSkills = true; //skillsSection.display;
  const viewResume = true; //resumeSection.display;

  return (
    <Headroom>
      {/* <header className={`fixed overflow-hidden z-50 w-full border-4 border-red-500 ${isDark ? "dark-menu header" : "header"}`}> */}
      <header
        className={` top-0 left-0 right-0 z-100 w-full overflow-hidden ${
          isDark ? "dark-menu header" : "header"
        }`}
      >
        <a href="/" className="logo">
          {/* <span className="grey-color"> &lt;</span> */}
          <span className="logo-name md:text-4xl">{greeting.username}</span>
          {/* <span className="grey-color">/&gt;</span> */}
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: "white" }}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={`  ${isDark ? "dark-menu menu" : "menu"}`}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            <a>
              {/* <ToggleSwitch /> */}
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
