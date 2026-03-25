import FilmCard from "../components/FilmCard"
import axios from "axios"
import { useEffect, useState } from "react"
const apiMoviesRouter = "http://localhost:3000/api/movies"

function FilmsListPage() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        axios.get(apiMoviesRouter).then(res => {
            console.log(res.data);
            setFilms(res.data)
        }).catch(err => console.error("Ops", err.message))
    }, []);

    return <div>
        <div className="d-flex justify-content-center py-3">
            <h1>Benvenuto nel catalogo film</h1>
        </div>
        <div className="d-flex justify-content-center px-5">
            <p>Io sono una semplice lista di film. Il mio testo non è pomposo come quello della Homepage, per fortuna</p>
        </div>
        <div className="d-flex justify-content-between px-5 gap-2 flex-wrap align-items-start">
            {films.map(film => <FilmCard key={film.id} film={film} />)}
        </div>
    </div>
}

export default FilmsListPage