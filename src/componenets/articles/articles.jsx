import { useEffect, useState } from "react"
import "./articles.css"
import { deleteArticle, getAllArticles } from "../services/articleservices"
import { Link } from "react-router-dom"

export const Articles = ({currentUser}) => {
 const [articles, setArticles] = useState([])
 const [myArticles, setMyArticles] = useState([])

 useEffect(() => {
    getAllArticles().then((articlesArray) =>{
        setArticles(articlesArray)
    })
 }, [])

 useEffect(() => {
    const foundArticles = articles.filter((article) => article.userId === currentUser.id)
    setMyArticles(foundArticles)
 },[articles])

 const handleDelete = (article) => {
    deleteArticle(article.id).then(() =>{
        getAllArticles().then((articlesArray) =>{
            setArticles(articlesArray)
        })
    })
 }

    return(
        <div>
            <div className="button">
                <Link to="/newArticle"><button>Submit New Article</button></Link>
            </div>
            <div className="articles">
                {myArticles.map((article) => {
                    return (
                        <div className="single-article" key={article.id}>
                            <h2>{article.title}</h2>
                            <p>{article.synopsis}</p>
                            <a href={article.url}>Source</a>
                            <Link to={`/articles/${article.id}/editArticle`}>
                            <button>Edit</button>
                            </Link>
                            <button onClick={()=> handleDelete(article)}>Delete</button>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}