import { Link } from "react-router-dom"
import style from "./Header.module.css"

function Header() {
    return <header >
        <div className="d-flex justify-content-between align-items-center">
            <a href="/" alt="iconmoviesbutton"><img src="/imgmovie.jpg" alt="iconmovies" className={style.logo} /></a>
            <div className="d-flex gap-3">
                <Link to="/">Homepage</Link>
                <Link to="/films">Catalogo Film</Link>
            </div>
        </div>
    </header>
}

export default Header