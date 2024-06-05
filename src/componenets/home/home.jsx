import { useEffect, useState } from "react";
import "./home.css";
import { getAllArticles } from "../services/articleservices.jsx";
import { getAllImages } from "../services/imageservices.jsx";

export const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, []);

  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages().then((imagesArray) => {
      setImages(imagesArray);
    });
    
  }, []);
  return (
    <div>
      <div className="articles">
        {articles.map((article) => {
          return (
            <div className="single-article" key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.synopsis}</p>
              <a href={article.url}>Source</a>
            </div>
          );
        })}
      </div>

{/* work on the image section */}

      <div className="images">
        {images.map((image) => {
          return (
            <div className="single-image" key={image.id}>
                <img src={image.url} />
              <h2>{image.caption}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};
