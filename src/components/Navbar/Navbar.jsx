import { Link } from "react-router-dom";
import './Navbar.css';
import image from './favicon.jpg';
export const Navbar = () => {
    return (
        <header className="heading d-flex grow-shrink-basis align-center">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"/>
    <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <h1 className="heading-title">
            <Link to="/" className="link cursor">Formers_Hub</Link>           
        </h1>
    </div>
    <nav className="navigation">
        <ul className="list-non-bullet">
            <li className="list-item-inline">
                <Link to="/" className="link cursor"><i class="fa fa-home" aria-hidden="true"></i>Home</Link>
            </li>
            <li className="list-item-inline">
                <Link to="/cart" className="link cursor"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Cart</Link>
            </li>
        </ul>
    </nav>
</header>
    )
}