import './navigation.css';
import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/close.svg";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    return (
        <nav>
            <div className="navbar-icon" onClick={handleClick}>
                <img src={isOpen ? CloseIcon : MenuIcon} alt="menü schließen"/>
            </div>
            { isOpen && <div className="navigation-menu">
                <Logo />
                <div className="navigation-menu__links">
                    <Link to="/" onClick={handleClick}>Startseite</Link>
                </div>
            </div>}
        </nav>
    )
}

export default Navigation;