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
                        <div className="single-article" key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.synopsis}</p>
                            <a href={article.url}>Source</a>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}