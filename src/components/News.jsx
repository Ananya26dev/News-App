import React, { useState, useEffect } from "react";
import NewsDetails from "./NewsDetails";
const News = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=abcc252027ee4ca5a5bb8631e0c765f3`; // For India in
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, []);
  return (
    <div className="news-grid">
      {article.map((news, index) => (
        <NewsDetails
          key={index}
          author={news.author}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default News;
