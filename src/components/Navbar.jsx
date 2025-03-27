import React, { useState, useEffect, useRef } from "react";
import useResizeObserver from "../hooks/useResizeObserver";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import logo from "/logo.png";

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const navbarMenuRef = useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useEffect(() => {
    if (!navbarDimensions || !ref.current) return;
    const offsetTop = ref.current.offsetTop;
    setIsTop(navBottom - offsetTop >= 0);
  }, [navBottom, navbarDimensions, ref]);

  return (
    <nav
      ref={navbarMenuRef}
      className={`absolute top-0 left-0 w-full flex items-center justify-between p-4 transition-all duration-300 ease-in-out ${
        !isTop ? "bg-white shadow-md z-50" : "bg-transparent"
      } md:text-2xl`}
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <a
          className="md:text-xl font-bold text-gray-900 px-2 md:px-10"
          href="#"
        >
          {`${mainBody.firstName} ${mainBody.lastName}`}
        </a>
      </div>

      <ul className="flex items-center space-x-4">
        {repos.show && (
          <li>
            <NavLink
              className="text-gray-800 hover:text-blue-600"
              href="#projects"
              aria-current={!isTop ? "page" : undefined}
            >
              Projects
            </NavLink>
          </li>
        )}
        <li>
          <NavLink
            className="text-gray-800 hover:text-blue-600"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            aria-current={isTop ? undefined : "page"}
          >
            Resume
          </NavLink>
        </li>
        {about.show && (
          <li>
            <NavLink
              className="text-gray-800 hover:text-blue-600"
              href="#aboutme"
              aria-current={!isTop ? "page" : undefined}
            >
              About
            </NavLink>
          </li>
        )}
        {skills.show && (
          <li>
            <NavLink
              className="text-gray-800 hover:text-blue-600"
              href="#skills"
              aria-current={!isTop ? "page" : undefined}
            >
              Skills
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
