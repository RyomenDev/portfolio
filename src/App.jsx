import React, { Suspense, useRef } from "react";
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

// Lazy load components to reduce initial bundle size
const MainBody = React.lazy(() => import("./components/home/MainBody"));
const AboutMe = React.lazy(() => import("./components/home/AboutMe"));
const Project = React.lazy(() => import("./components/home/Project"));
const Footer = React.lazy(() => import("./components/Footer"));
const Navbar = React.lazy(() => import("./components/Navbar"));
const GetInTouch = React.lazy(() => import("./components/home/GetInTouch"));
const Experience = React.lazy(() => import("./components/home/Experience"));
const SkillsSection = React.lazy(() =>
  import("./components/home/skillsSection")
);

// Home Component: Displays the main content of the homepage
const Home = React.forwardRef((props, ref) => (
  <div className="pt-16">
    {/* Padding for navbar height */}
    <Suspense fallback={<div>Loading Main Content...</div>}>
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
      <Experience experiences={experiences} />
      <Project
        heading={repos.heading}
        username={repos.gitHubUsername}
        length={repos.reposLength}
        specific={repos.specificRepos}
      />
      <SkillsSection skillsSection={skills} />
    </Suspense>
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
      <div className="px-10 bg-gray-200 ">
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar ref={titleRef} />
        </Suspense>

        <div className="content-wrapper ">
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Suspense fallback={<div>Loading Page...</div>}>
              <Routes>
                <Route path="/" element={<Home ref={titleRef} />} />
              </Routes>
            </Suspense>

            <Suspense fallback={<div>Loading Footer...</div>}>
              <Footer>
                {getInTouch.show && <GetInTouch getInTouch={getInTouch} />}
              </Footer>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
