import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewCard from "../components/ReviewCard"
import style from "./FilmDetailPage.module.css"

function FilmDetailPage() {

    const [film, setFilm] = useState({})
    const { id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`).then(res => {
            console.log(res.data);
            setFilm(res.data);
        }).catch(err => console.error("Ops", err.message))
    }, [id]);
    const { title, director, abstract, image } = film;
    return <>
        <div className="d-flex justify-content-center py-3">
            <h1>Questa è la pagina di dettaglio</h1>
        </div>
        <div className={style.card}>
            <img src={`http://localhost:3000/static/${image}`} alt={title} />
            <h2>{title}</h2>
            <h3>{director}</h3>
            <p>{abstract}</p>
        </div>

        <div className="d-flex justify-content-between px-5 gap-2 flex-wrap align-items-start">
            {film.reviews?.map(review => <ReviewCard key={review.id} review={review} />)}
        </div>
    </>
}

export default FilmDetailPage