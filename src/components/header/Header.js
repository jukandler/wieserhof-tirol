import logo from './wieserhof_logo.jpg';

import './header.css';

function Header() {
    return (
        <header>
            <div className="hero-image"></div>
            <img className="wieserhof-logo" src={logo} alt="wieserhof logo"></img>
        </header>
    )
}

export default Header;