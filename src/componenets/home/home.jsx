import { useEffect, useState } from "react";
import "./home.css";
import { getAllArticles } from "../services/articleservices.jsx";
import { getAllImages } from "../services/imageservices.jsx";

export const Home = ({currentUser}) => {
  const [articles, setArticles] = useState([]);

  const [myArticles, setMyArticles]= useState([])

  const [myImages, setMyImages] = useState ([])

  useEffect(() => {
    getAllArticles().then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, []);

  useEffect(() =>{
    const foundArticles = articles.filter((article) => article.userId === currentUser.id)
    setMyArticles(foundArticles)
    
  },[articles])
 
 
  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages().then((imagesArray) => {
      setImages(imagesArray);
    });
    
  }, []);
  useEffect(() =>{
    const foundImages = images.filter((image) => image.userId === currentUser.id)
    setMyImages(foundImages)
    
  },[images])
  return (
    <div>
      <div className="articles">
        {myArticles.map((article) => {
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
        {myImages.map((image) => {
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
