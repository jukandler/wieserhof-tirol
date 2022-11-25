import logo from './wieserhof_logo.jpg';
import {
  Link
} from "react-router-dom";

import './header.css';

function Header() {
    return (
        <header>
            <div className="hero-image"></div>
            <Link to="/">
                <img className="wieserhof-logo" src={logo} alt="wieserhof logo"></img>
            </Link>
        </header>
    )
}

export default Header;