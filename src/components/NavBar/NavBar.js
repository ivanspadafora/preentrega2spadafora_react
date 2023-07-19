import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul className="navBar">
                <h2>
                    <li className="prigs-link">
                    <Link to="/">PRIGS</Link>
                    </li>
                </h2>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/mouse">Mouse</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/teclados">Teclados</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/category/auriculares">Auriculares</Link>
                </li>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default NavBar;