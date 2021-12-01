import {
    NavLink
} from "react-router-dom";
import "./styles.css"

export const Navbar = () => {
    return (
        <nav className="navbar">
        <ul className="navbar-list">
            <li>
                <NavLink exact={true} activeClassName="nav-selected" to="/">Coffee</NavLink>
            </li>
            <li>
                <NavLink activeClassName="nav-selected" to="/cart">My Cart</NavLink>
            </li>
         </ul>
        </nav>
    )
}


