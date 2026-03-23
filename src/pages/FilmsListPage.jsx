import FilmCard from "../components/FilmCard"

function FilmsListPage() {
    const fakefilm = {
        id: 1,
        title: "il fake film",
        director: "me medesimo",
        image: "/imgmovie.jpg",
        abstract: "il mio fake film preferito"

    }

    return <div>
        <div className="d-flex justify-content-center py-3">
            <h1>Benvenuto nel catalogo film</h1>
        </div>
        <div className="d-flex justify-content-center px-5">
            <p>Io sono una semplice lista di film. Il mio testo non è pomposo come quello della Homepage, per fortuna</p>
        </div>

        <FilmCard film={fakefilm} />
    </div>
}

export default FilmsListPage