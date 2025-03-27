import React from "react";
import Typewriter from "typewriter-effect";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron fluid id="home">
        <div className="text-center space-y-6 ">
          <h1 ref={ref} className="text-6xl font-bold text-black ">
            {title}
          </h1>
          <Typewriter
            options={{
              strings: [message],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 100,
              cursor: "|",
            }}
          />
          <div className="flex justify-center space-x-4">
            {icons?.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <img
                  src={icon.image}
                  alt={`Icon for ${icon.image.split("-")[1]}`}
                  className="h-8 w-8 hover:opacity-80 transition duration-300"
                />
              </a>
            ))}
          </div>
          <a
            className="inline-block px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition duration-300 rounded"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </div>
      </Jumbotron>
    );
  }
);

// Set the display name for the component
MainBody.displayName = "MainBody";

export default MainBody;
