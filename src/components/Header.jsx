import { Link } from "react-router-dom"

function Header() {
    return <>
        <Link to="/">Homepage</Link>
        <Link to="/films">Catalogo Film</Link>
    </>
}

export default Header