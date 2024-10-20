import React from "react";
import bloglist from "../../editable-stuff/blog";

const BlogPost = ({ match }) => {
  const { id } = match.params; // Destructure the id from the match params
  const post = bloglist[id]; // Access the post using the id

  return (
    <div className="container mx-auto p-5 mt-5">
      {post ? ( // Check if the post exists
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">{post.title}</h1>
          {post.image && (
            <img
              className="img-fluid w-full h-auto rounded-lg mb-4"
              src={post.image}
              alt={post.title}
            />
          )}
          {post.getBlog()}
        </div>
      ) : (
        <h1 className="text-3xl font-bold text-center text-red-600">
          404 - Page Not Found
        </h1> // Display error message
      )}
    </div>
  );
};

export default BlogPost;
