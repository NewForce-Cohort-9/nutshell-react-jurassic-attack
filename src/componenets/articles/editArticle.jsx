import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArticleById, updateArticle } from "../services/articleservices";

export const EditArticle = () => {
  const [article, setArticle] = useState({});
  const { articleId } = useParams();

  useEffect(() => {
    getArticleById(articleId).then((data) => {
      const articleObj = data;
      setArticle(articleObj);
    });
  }, [articleId]);

  const handleSave = (event) => {
    event.preventDefault();
    const editedArticle = {
      title: article.title,
      synopsis: article.synopsis,
      url: article.url,
      id: article.id,
      userId: article.userId,
      timestamp: article.timestamp,
    };
    updateArticle(editedArticle).then(() => {
      navigate("/articles");
    });
  };
  const navigate = useNavigate();
  return (
    <div className="form">
      <form>
        <h2>Edit Article</h2>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={article.title}
              onChange={(event) => {
                const articleCopy = { ...article };
                articleCopy.title = event.target.value;
                setArticle(articleCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={article.synopsis}
              onChange={(event) => {
                const articleCopy = { ...article };
                articleCopy.synopsis = event.target.value;
                setArticle(articleCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-title">
            <input
              text="text"
              className="form-control"
              placeholder={article.url}
              onChange={(event) => {
                const articleCopy = { ...article };
                articleCopy.url = event.target.value;
                setArticle(articleCopy);
              }}
            ></input>
          </div>
        </fieldset>
        <fieldset className="form-group">
            <button className="form-btn" btn-info onClick={handleSave}>Save Article</button>
        </fieldset>
      </form>
    </div>
  );
};
