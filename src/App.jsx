import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SEO from "./components/SEO";
import {
  splashScreen,
  navBar,
  mainBody,
  about,
  repos,
  getInTouch,
  skills,
  //   seoData,
} from "./editable-stuff/config";

// Direct imports for components (no lazy loading)
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
// import Project from "./components/home/Project";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import GetInTouch from "./components/home/GetInTouch";
import SkillsSection from "./components/home/skillsSection";

import SplashScreen from "./components/startup/splashScreen/SplashScreen.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { StyleProvider } from "./contexts/StyleContext.js";

import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Projects";

const Home = React.forwardRef(({ theme }, ref) => (
  <div className="pt-16">
    <MainBody
      gradient={mainBody.gradientColors}
      title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
      message={mainBody.message}
      icons={mainBody.icons}
      ref={ref}
    />
    {about.show ? (
      <AboutMe
        heading={about.heading}
        message={about.message}
        profileImage={about.imageLink}
        imgSize={about.imageSize}
        resume={about.resume}
      />
    ) : null}
    <Education theme={theme} />
    <Experience theme={theme} />
    <Project theme={theme} />
    <SkillsSection skillsSection={skills} />
  </div>
));

Home.displayName = "Home";

// App Component: Contains routing and layout of the website
const App = ({ theme }) => {
  const titleRef = useRef();
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {/* <SEO seoData={seoData} /> */}
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <div className="md:px-10 bg-gray-200">
                <Navbar ref={titleRef} />

                <div className="content-wrapper">
                  <BrowserRouter basename={import.meta.env.BASE_URL}>
                    <Routes>
                      <Route
                        path="/"
                        element={<Home ref={titleRef} theme={theme} />}
                      />
                    </Routes>

                    <Footer>
                      {getInTouch.show && (
                        <GetInTouch getInTouch={getInTouch} />
                      )}
                    </Footer>
                  </BrowserRouter>
                </div>
              </div>
            </>
          )}
        </StyleProvider>
      </div>
    </>
  );
};

export default App;

// import React, { Suspense, useRef } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SEO from "./components/SEO";
// import {
//   navBar,
//   mainBody,
//   about,
//   repos,
//   getInTouch,
//   experiences,
//   skills,
//   seoData,
// } from "./editable-stuff/config";

// // Lazy load components to reduce initial bundle size
// const MainBody = React.lazy(() => import("./components/home/MainBody"));
// const AboutMe = React.lazy(() => import("./components/home/AboutMe"));
// const Project = React.lazy(() => import("./components/home/Project"));
// const Footer = React.lazy(() => import("./components/Footer"));
// const Navbar = React.lazy(() => import("./components/Navbar"));
// const GetInTouch = React.lazy(() => import("./components/home/GetInTouch"));
// const Experience = React.lazy(() => import("./components/home/Experience"));
// const SkillsSection = React.lazy(() =>
//   import("./components/home/skillsSection")
// );

// // Import Shimmer Components
// import {
//   ShimmerMainBody,
//   ShimmerNavbar,
//   ShimmerFooter,
//   ShimmerAboutMe,
//   ShimmerExperience,
//   ShimmerProject,
//   ShimmerSkillsSection,
// } from "./components/Shimmer.jsx";

// // Home Component: Displays the main content of the homepage
// const Home = React.forwardRef((props, ref) => (
//   <div className="pt-16">
//     <Suspense fallback={<ShimmerMainBody />}>
//       <MainBody
//         gradient={mainBody.gradientColors}
//         title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
//         message={mainBody.message}
//         icons={mainBody.icons}
//         ref={ref}
//       />
//       {about.show ? (
//         <Suspense fallback={<ShimmerAboutMe />}>
//           <AboutMe
//             heading={about.heading}
//             message={about.message}
//             profileImage={about.imageLink}
//             imgSize={about.imageSize}
//             resume={about.resume}
//           />
//         </Suspense>
//       ) : (
//         <ShimmerAboutMe />
//       )}
//       <Suspense fallback={<ShimmerExperience />}>
//         <Experience experiences={experiences} />
//       </Suspense>
//       <Suspense fallback={<ShimmerProject />}>
//         <Project
//           heading={repos.heading}
//           username={repos.gitHubUsername}
//           length={repos.reposLength}
//           specific={repos.specificRepos}
//         />
//       </Suspense>
//       <Suspense fallback={<ShimmerSkillsSection />}>
//           <SkillsSection skillsSection={skills} />
//       </Suspense>
//     </Suspense>
//   </div>
// ));

// Home.displayName = "Home";

// // App Component: Contains routing and layout of the website
// const App = () => {
//   const titleRef = useRef();

//   return (
//     <>
//       {/* <SEO seoData={seoData} /> */}
//       <div className="px-10 bg-gray-200">
//         <Suspense fallback={<ShimmerNavbar />}>
//           <Navbar ref={titleRef} />
//         </Suspense>

//         <div className="content-wrapper">
//           <BrowserRouter basename={import.meta.env.BASE_URL}>
//             <Suspense fallback={<ShimmerMainBody />}>
//               <Routes>
//                 <Route path="/" element={<Home ref={titleRef} />} />
//               </Routes>
//             </Suspense>

//             <Suspense fallback={<ShimmerFooter />}>
//               <Footer>
//                 {getInTouch.show && <GetInTouch getInTouch={getInTouch} />}
//               </Footer>
//             </Suspense>
//           </BrowserRouter>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
