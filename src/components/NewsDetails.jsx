import React from "react";
import newsImage from "../assets/news.jpg";
const NewsDetails = ({ author, title, description, src, url }) => {
  return (
    <div className="container">
      <img
        src={src ? src : newsImage}
        alt="Breaking News"
        className="card-img"
      />
      <div className="card-body">
        <h1>{author ? author : "Unknown Author"}</h1>
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsDetails;
