import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "../models/Article";

export function ArticlesFetch() {
    const [data, setData] = useState([]);
    const [newArticle, setNewArticle] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchArticles() {
        try {
        setLoading(true);
        const response = await axios.get(`https://reqres.in/api/articles`);
        console.log(response);
        const responseData = response.data.data.map((r) => new Article(r.id, r.name, r.year, r.color, r.pantone_value));
        setData(responseData);
        setLoading(false);
        } catch(error) {
            setError(error.message);
            setLoading(false);
        }
    }

    async function addArticle() {
        try {
            setLoading(true);
            const response = await axios.post(`https://reqres.in/api/articles`, {
                title: { newArticle }
            });
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    function handleInputChange(event) {
        setNewArticle(event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addArticle();
    }

    useEffect(() => {
        fetchArticles();
    }, [])

    return (loading ? <p>Loading....</p> : <div className="container">
        <div className="row">
            {data.map((d) => {
                return <div className="col-4">
                    <div className="card">
                        <p className="card-tite">{d.name}</p>
                    </div>
                </div>
            })}
        </div>

        <div className="row">
            <input className="form-control" onChange={handleInputChange} value={newArticle} />
            <button onClick={handleSubmit}>Add Article</button>
        </div>
        {(error && error.length > 0) && <p>{error}</p>}
    </div> )
}