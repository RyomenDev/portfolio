import React, { useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SEO from "./components/SEO";

import {
  navBar,
  mainBody,
  about,
  repos,
  getInTouch,
  experiences,
  skills,
  seoData,
} from "./editable-stuff/config";

import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import GetInTouch from "./components/home/GetInTouch";
import Experience from "./components/home/Experience";
import SkillsSection from "./components/home/skillsSection";

// Home Component: Displays the main content of the homepage
const Home = React.forwardRef((props, ref) => (
  <div className="pt-16">
    {" "}
    {/* Padding for navbar height */}
    <MainBody
      gradient={mainBody.gradientColors}
      title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
      message={mainBody.message}
      icons={mainBody.icons}
      ref={ref}
    />
    {about.show && (
      <AboutMe
        heading={about.heading}
        message={about.message}
        profileImage={about.imageLink}
        imgSize={about.imageSize}
        resume={about.resume}
      />
    )}
    {/* Experience Section */}
    <Experience experiences={experiences} />
    {/* Projects Section */}
    <Project
      heading={repos.heading}
      username={repos.gitHubUsername}
      length={repos.reposLength}
      specific={repos.specificRepos}
    />
    {/* Skills Section */}
    <SkillsSection skillsSection={skills} />
  </div>
));

// Set display name for Home component
Home.displayName = "Home";

// App Component: Contains routing and layout of the website
const App = () => {
  const titleRef = useRef(); // Reference for title (Navbar scrolling functionality)

  return (
    <>
      <SEO seoData={seoData} />
      {/* Navbar */}
      <Navbar ref={titleRef} />

      <div className="content-wrapper">
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<Home ref={titleRef} />} />
          </Routes>

          {/* Footer Section */}
          <Footer>
            {getInTouch.show && <GetInTouch getInTouch={getInTouch} />}
          </Footer>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
