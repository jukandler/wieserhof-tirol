import './navigation.css';
import PinIcon from "../../assets/icons/pin.png";
import CallIcon from "../../assets/icons/call.png";
import MailIcon from "../../assets/icons/mail.png";
import WhatsappIcon from "../../assets/icons/whatsapp.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom'
import MenuToCloseIcon from '../MenuToCloseIcon/MenuToCloseIcon';

function Navigation() {
    const location = useLocation();
    const menuIconColor = location.pathname === "/" ? "#FFFFFF" : "#6A5744";

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav>
            <div className="navbar-icon" onClick={handleClick}>
                <MenuToCloseIcon color={menuIconColor} isOpen={isOpen}/>
            </div>
            <div className="sticky-navbar">
                <div className="action-icons grid-text_wide">
                    <Link to="/anfahrt">
                        <img src={PinIcon} onClick={closeMenu} alt="Anfahrt"/>
                    </Link>
                    <a href="tel:+4369910553435">
                        <img src={CallIcon} alt="Anrufen"/>
                    </a>
                    <Link to="/anfrage">
                        <img src={MailIcon} onClick={closeMenu} alt="E-Mail schicken"/>
                    </Link>
                    <a href="https://wa.me/4369910553435" target="_blank" rel="noopener noreferrer">
                        <img src={WhatsappIcon} alt="Whatsapp schicken"/>
                    </a>
                </div>
            </div>
            { isOpen && <div className="navigation-menu">
                <Logo onClick={closeMenu} />
                <div className="navigation-menu__links">
                    <Link to="/" onClick={handleClick}>Startseite</Link>
                    <Link to="/ferienwohnung" onClick={handleClick}>Ferienwohnung</Link>
                    <Link to="/wieserhof" onClick={handleClick}>Der Wieserhof</Link>
                    <Link to="/oetztal" onClick={handleClick}>Das Ötztal</Link>
                    <Link to="/anfahrt" onClick={handleClick}>Anfahrt</Link>
                    <Link to="/preise" onClick={handleClick}>Preise</Link>
                    <Link to="/buchung" onClick={handleClick}>Buchung</Link>
                    <Link to="/anfrage" onClick={handleClick}>Anfrage senden</Link>
                </div>
            </div>}
        </nav>
    )
}

export default Navigation;