import { useEffect, useState } from "react";
import "./home.css";
import { getAllArticles } from "../services/articleservices.jsx";
import { getAllImages } from "../services/imageservices.jsx";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

export const Home = ({ currentUser }) => {
  const [articles, setArticles] = useState([]);

  const [myArticles, setMyArticles] = useState([]);

  const [myImages, setMyImages] = useState([]);

  useEffect(() => {
    getAllArticles().then((articlesArray) => {
      setArticles(articlesArray);
    });
  }, []);

  useEffect(() => {
    const foundArticles = articles.filter(
      (article) => article.userId === currentUser.id
    );
    setMyArticles(foundArticles);
  }, [articles]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    getAllImages().then((imagesArray) => {
      setImages(imagesArray);
    });
  }, []);
  useEffect(() => {
    const foundImages = images.filter(
      (image) => image.userId === currentUser.id
    );
    setMyImages(foundImages);
  }, [images]);
  return (
    <div className="body">
      
        <div className="articles">
          <Row>
            {myArticles.map((article) => {
              return (
                <Col key={article.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <h2>{article.title}</h2>
                    <p>{article.synopsis}</p>
                    <a href={article.url}>Source</a>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      

      {/* work on the image section */}

      <div className="images">
        <div>
          <Row>
            {myImages.map((image) => {
              return (
                <Col key={image.id}>
                  <Card
                    style={{
                      width: "12rem",
                      padding: "1em",
                      margin: 5,
                    }}
                  >
                    <img src={image.url} alt="" />

                    <CardBody>
                      <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {image.caption}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};
