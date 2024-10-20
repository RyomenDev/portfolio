import React from "react";

// Jumbotron Component
export const Jumbotron = (props) => {
  const bgStyle = props.style ?? "bg-gray-200"; // Default Tailwind bg color
  return (
    <div id={props.id} className={`py-12 ${bgStyle} ${props.className}`}>
      <div className="container mx-auto px-4 py-5">{props.children}</div>
    </div>
  );
};

// Set display name for Jumbotron
Jumbotron.displayName = "Jumbotron";

// NavLink Component
export const NavLink = (props) => {
  return (
    <a
      href={props.href}
      target={props.target}
      rel={props.rel}
      className={`nav-item lead ${props.className}`}
    >
      {props.children}
    </a>
  );
};

// Set display name for NavLink
NavLink.displayName = "NavLink";
