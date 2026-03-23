import { Link } from "react-router-dom";
import style from "./FilmCard.module.css"

function FilmCard({ film }) {
    const { id, title, director, abstract, image } = film;

    return <div className={style.card}>
        <img src={image} alt={title} className={style.cardimg} />
        <h2>{title}</h2>
        <h3>{director}</h3>
        <p>{abstract}</p>
        <Link to={`/films/${id}`}>Scopri di più</Link>
    </div>
}

export default FilmCard