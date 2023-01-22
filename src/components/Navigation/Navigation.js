import './navigation.css';
import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/close.svg";
import CallIcon from "../../assets/icons/call.png";
import MailIcon from "../../assets/icons/mail.png";
import WhatsappIcon from "../../assets/icons/whatsapp.png";
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
            <div className="sticky-navbar">
                <div className="action-icons grid-text_wide">
                    <a href="tel:+4369910553435">
                        <img src={CallIcon} alt="Anrufen"/>
                    </a>
                    <a href="mailto:info@wieserhof-tirol.at" target="_blank" rel="noopener noreferrer">
                        <img src={MailIcon} alt="E-Mail schicken"/>
                    </a>
                    <a href="https://wa.me/4369910553435" target="_blank" rel="noopener noreferrer">
                        <img src={WhatsappIcon} alt="Whatsapp schicken"/>
                    </a>
                </div>
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