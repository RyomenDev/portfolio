import React, { useState } from "react";
// import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  //   useScrollPosition(
  //     ({ currPos }) => {
  //       if (!navbarDimensions) return;
  //       setIsTop(
  //         currPos.y + ref.current.offsetTop - navbarDimensions.bottom <= 5
  //       );
  //     },
  //     [navBottom]
  //   );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    setIsTop(navBottom - ref.current.offsetTop >= 0);
  }, [navBottom, navbarDimensions, ref]);

  return (
    <nav
      ref={navbarMenuRef}
      className={`fixed top-0 left-0 w-full flex items-center justify-between p-4 transition-all duration-300 ease-in-out ${
        !isTop ? "bg-white shadow-md z-50" : "bg-transparent"
      }`}
    >
      <a className="text-xl font-bold text-gray-900" href="#home">
        {`${mainBody.firstName} ${mainBody.lastName}`}
      </a>
      <div className="flex items-center space-x-4">
        {repos.show && (
          <NavLink
            className="text-gray-800 hover:text-blue-600"
            href="#projects"
            aria-current={isTop ? undefined : "page"} // Added for accessibility
          >
            Projects
          </NavLink>
        )}
        <NavLink
          className="text-gray-800 hover:text-blue-600"
          href={about.resume}
          target="_blank"
          rel="noreferrer noopener"
          aria-current={isTop ? undefined : "page"} // Added for accessibility
        >
          Resume
        </NavLink>
        {about.show && (
          <NavLink
            className="text-gray-800 hover:text-blue-600"
            href="#aboutme"
            aria-current={isTop ? undefined : "page"} // Added for accessibility
          >
            About
          </NavLink>
        )}
        {skills.show && (
          <NavLink
            className="text-gray-800 hover:text-blue-600"
            href="#skills"
            aria-current={isTop ? undefined : "page"} // Added for accessibility
          >
            Skills
          </NavLink>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
