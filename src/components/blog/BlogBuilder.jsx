import React, { Fragment } from "react";

class BlogBuilder {
  list = [];

  constructor({ title, image, description }) {
    this.title = title;
    this.image = image;
    this.description = description;
    this.addIntro(); // Add initial title and description as part of the blog
  }

  // Add introductory heading and description
  addIntro() {
    this.list.push(
      <div key={this.list.length} className="mb-6">
        {this.image && (
          <img
            src={this.image}
            alt={this.title}
            className="w-full h-auto rounded-lg mb-4"
          />
        )}
        <h1 className="text-3xl font-bold mb-2">{this.title}</h1>
        <p className="text-gray-700">{this.description}</p>
        <hr className="my-4" />
      </div>
    );
  }

  addParagraph = (content) => {
    this.list.push(
      <p key={this.list.length} className="lead mb-4 text-gray-800">
        {content}
      </p>
    );
    return this;
  };

  addHeading = (heading) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h2 className="text-2xl font-semibold mt-4 mb-2">{heading}</h2>
        <hr className="my-2" />
      </Fragment>
    );
    return this;
  };

  getBlog = () => {
    return <div className="container mx-auto p-5">{this.list}</div>;
  };
}

export { BlogBuilder };
