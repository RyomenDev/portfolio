import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto mt-10 bg-blue-100 p-5 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>
      {bloglist.map((value, index) => (
        <BlogCard
          key={index}
          title={value.title}
          description={value.description}
          index={index}
        />
      ))}
    </div>
  );
};

const BlogCard = ({ index, title, description }) => {
  return (
    <div className="m-5 p-5 border rounded-lg shadow-md bg-white">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 mb-4 lg:mb-0">
          {/* Uncomment and set the image source if you want to include images */}
          {/* <img src={image} className="w-full h-32 object-cover rounded-lg" alt="Blog Thumbnail" /> */}
        </div>
        <div className="lg:w-2/3 lg:pl-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-700">{description}</p>
          <Link
            to={`${process.env.PUBLIC_URL}blog/${index}`}
            className="text-blue-500 hover:underline mt-2 inline-block"
          >
            Read more...
          </Link>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
    </div>
  );
};

export { Blog, BlogBuilder };
