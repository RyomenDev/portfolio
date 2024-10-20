import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="mt-auto py-5 bg-gray-100 text-center">
        <div className="container mx-auto px-4">{props.children}</div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="https://github.com/RyomenDev"
              aria-label="My GitHub"
              className="font-bold text-gray-800 hover:text-blue-600 transition"
            >
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/akash-mishra-123456789"
              aria-label="My LinkedIn"
              className="font-bold text-gray-800 hover:text-blue-600 transition"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
          <p className="text-gray-600 mb-2">
            © {new Date().getFullYear()} Akash Mishra
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
