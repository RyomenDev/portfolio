// components/Shimmer.jsx
import React from "react";

// Shimmer for Navbar
export const ShimmerNavbar = () => (
  <div className="animate-pulse flex justify-between items-center py-4 px-6 bg-gray-200">
    {/* Logo */}
    <div className="h-8 w-24 bg-gray-300 rounded-md"></div>
    {/* Nav items */}
    <div className="flex space-x-4">
      <div className="h-6 w-12 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-12 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-12 bg-gray-300 rounded-md"></div>
    </div>
  </div>
);

// Shimmer for Main Content (MainBody)
export const ShimmerMainBody = () => (
  <div className="text-center space-y-6">
    {/* Title Placeholder */}
    <div className="h-10 bg-gray-300 rounded-md w-3/4 animate-pulse mx-auto"></div>

    {/* Typewriter Placeholder */}
    <div className="h-6 bg-gray-300 rounded-md w-1/2 animate-pulse mx-auto"></div>

    {/* Icons Placeholder */}
    <div className="flex justify-center space-x-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"
        ></div>
      ))}
    </div>

    {/* "More about me" Button Placeholder */}
    <div className="h-10 bg-gray-300 rounded-md w-1/3 animate-pulse mx-auto"></div>
  </div>
);

export const ShimmerAboutMe = () => (
  <section id="aboutme" className="py-16 bg-gray-100">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-4">
      {/* Profile Image Placeholder */}
      <div className="lg:w-2/7 flex justify-center mb-10 lg:mb-0">
        <div className="h-32 w-32 bg-gray-300 rounded-full animate-pulse"></div>
      </div>

      {/* Message Section Placeholder */}
      <div className="lg:w-2/3 flex flex-col justify-center text-center">
        <div className="h-8 bg-gray-300 rounded-md w-3/4 animate-pulse mb-4"></div>
        <div className="h-6 bg-gray-300 rounded-md w-5/6 animate-pulse mb-4"></div>
        <div className="h-6 bg-gray-300 rounded-md w-4/6 animate-pulse mb-4"></div>
        <div className="h-10 bg-gray-300 rounded-md w-1/4 animate-pulse mx-auto"></div>
      </div>

      {/* Greeting Animation Placeholder */}
      <div className="mt-10 lg:mt-0 lg:w-1/4 flex justify-center lg:justify-start lg:ml-10">
        <div className="h-32 w-32 bg-gray-300 animate-pulse rounded-md"></div>
      </div>
    </div>
  </section>
);

// ShimmerExperience
export const ShimmerExperience = () => (
  <section className="py-10 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      {/* Shimmer heading */}
      <div className="h-10 bg-gray-300 rounded-md w-1/2 animate-pulse mx-auto mb-10"></div>

      <div className="flex justify-around">
        {/* Shimmer cards for experiences */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="lg:w-1/2 p-4 animate-pulse">
            <div className="block bg-white shadow-lg rounded-lg p-5 text-center">
              <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-3"></div>
              <div className="h-6 bg-gray-300 rounded-md mb-2 w-3/4 mx-auto"></div>
              <div className="h-4 bg-gray-300 rounded-md mb-1 w-1/2 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const ShimmerProject = () => (
  <div className="animate-pulse space-y-4 p-6 bg-gray-200 rounded-lg">
    {/* Heading */}
    <div className="h-6 bg-gray-300 rounded-md w-1/5"></div>
    {/* Project Items Placeholder */}
    <div className="space-y-2">
      <div className="h-5 bg-gray-300 rounded-md w-full"></div>
      <div className="h-5 bg-gray-300 rounded-md w-full"></div>
    </div>
  </div>
);

export const ShimmerSkillsSection = () => (
  <div className="animate-pulse space-y-4 p-6 bg-gray-200 rounded-lg">
    {/* Heading */}
    <div className="h-6 bg-gray-300 rounded-md w-1/4"></div>
    {/* Skills Placeholder */}
    <div className="flex space-x-4">
      <div className="h-8 bg-gray-300 rounded-md w-1/6"></div>
      <div className="h-8 bg-gray-300 rounded-md w-1/6"></div>
      <div className="h-8 bg-gray-300 rounded-md w-1/6"></div>
    </div>
  </div>
);

// Shimmer for Footer
export const ShimmerFooter = () => (
  <div className="animate-pulse py-6 bg-gray-200">
    <div className="h-6 bg-gray-300 rounded-md w-1/3 mx-auto"></div>
  </div>
);
