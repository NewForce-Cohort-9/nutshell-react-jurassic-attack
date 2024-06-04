import { useEffect, useState } from "react"
import "./articles.css"
import { getAllArticles } from "../services/articleservices"
import { Link } from "react-router-dom"

export const Articles = () => {
 const [articles, setArticles] = useState([])

 useEffect(() => {
    getAllArticles().then((articlesArray) =>{
        setArticles(articlesArray)
    })
 }, [])

    return(
        <div>
            <div className="button">
                <Link to="/newArticle"><button>Submit New Article</button></Link>
            </div>
            <div className="articles">
                {articles.map((article) => {
                    return (
                        <div className="single-article">
                            <h2>{article.title}</h2>
                            <p>{article.synopsis}</p>
                            <a>{article.url}</a>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}