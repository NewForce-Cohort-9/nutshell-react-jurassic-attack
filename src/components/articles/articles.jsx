import { useEffect, useState } from "react";
import "./articles.css";
import { deleteArticle, getAllArticles } from "../services/articleservices";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardSubtitle, Col, Row } from "reactstrap";

export const Articles = ({ currentUser }) => {
  const [articles, setArticles] = useState([]);
  const [myArticles, setMyArticles] = useState([]);

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

  const handleDelete = (article) => {
    deleteArticle(article.id).then(() => {
      getAllArticles().then((articlesArray) => {
        setArticles(articlesArray);
      });
    });
  };

  return (
    <div>
      <div>
        <Link to="/newArticle">
          <button className="button">Submit New Article</button>
        </Link>
      </div>
      <div className="articles">
        <div>
          <Row className="flex-row-reverse">
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
                    <Link to={`/articles/${article.id}/editArticle`}>
                      <Button color="primary" size="sm" style={{ margin: 5 }}>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      color="danger"
                      size="sm"
                      style={{ margin: 5 }}
                      onClick={() => handleDelete(article)}
                    >
                      Delete
                    </Button>
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
