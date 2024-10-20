import React from "react";
import { Carousel } from "react-responsive-carousel"; // Consider using this if you want a more customizable carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Include CSS for the carousel
import { Jumbotron } from "./migration";

const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    <Jumbotron id="leadership" className="m-0 bg-white">
      <h2 className="text-4xl font-bold pb-5 text-center">{heading}</h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 md:pr-5">
          <p className="text-lg">{message}</p>
        </div>
        <div className="md:w-2/3">
          <Carousel showThumbs={false} showStatus={false}>
            {img.map((value, index) => (
              <div key={index}>
                <img
                  className="w-full"
                  src={value.img}
                  alt={value.label} // Use the label as alt text for better accessibility
                  width={imageSize.width}
                  height={imageSize.height}
                />
                <p className="text-xl font-semibold">{value.label}</p>
                <p>{value.paragraph}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
