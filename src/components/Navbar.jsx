import React, { useState, useEffect, useRef } from "react";
import useResizeObserver from "../hooks/useResizeObserver";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useEffect(() => {
    if (!navbarDimensions || !ref.current) return;

    // Adjust isTop based on navbar position
    const offsetTop = ref.current.offsetTop;
    setIsTop(navBottom - offsetTop >= 0);
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
            aria-current={!isTop ? "page" : undefined}
          >
            Projects
          </NavLink>
        )}
        <NavLink
          className="text-gray-800 hover:text-blue-600"
          href={about.resume}
          target="_blank"
          rel="noreferrer noopener"
          aria-current={isTop ? undefined : "page"}
        >
          Resume
        </NavLink>
        {about.show && (
          <NavLink
            className="text-gray-800 hover:text-blue-600"
            href="#aboutme"
            aria-current={!isTop ? "page" : undefined}
          >
            About
          </NavLink>
        )}
        {skills.show && (
          <NavLink
            className="text-gray-800 hover:text-blue-600"
            href="#skills"
            aria-current={!isTop ? "page" : undefined}
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
