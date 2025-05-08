import './navigation.css';
import PinIcon from "../../assets/icons/pin.png";
import CallIcon from "../../assets/icons/call.png";
import MailIcon from "../../assets/icons/mail.png";
import CalendarIcon from "../../assets/icons/calendar.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { useLocation } from 'react-router-dom'
import MenuToCloseIcon from '../MenuToCloseIcon/MenuToCloseIcon';

function Navigation() {
    const location = useLocation();
    const menuIconColor = location.pathname === "/" ? "#FFFFFF" : "#6A5744";

    const [isOpen, setIsOpen] = useState(false);
    const [activitiesExpanded, setActivitiesExpanded] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);
    
    const toggleActivities = (e) => {
        e.preventDefault();
        setActivitiesExpanded(!activitiesExpanded);
    };

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
                    <Link to="/buchung">
                        <img src={CalendarIcon} onClick={closeMenu} alt="Buchung"/>
                    </Link>
                </div>
            </div>
            { isOpen && <div className="navigation-menu">
                <Logo onClick={closeMenu} />
                <div className="navigation-menu__links">
                    <Link to="/" onClick={handleClick}>Startseite</Link>
                    <Link to="/ferienwohnung" onClick={handleClick}>Ferienwohnung</Link>
                    <Link to="/wieserhof" onClick={handleClick}>Der Wieserhof</Link>
                    <Link to="/oetztal" onClick={handleClick}>Das Ötztal</Link>
                    
                    {/* Aktivitäten Dropdown */}
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-toggle" onClick={toggleActivities}>
                            Aktivitäten
                            <svg 
                                width="16" 
                                height="16" 
                                viewBox="0 0 24 24"
                                className={activitiesExpanded ? 'rotate-icon' : ''}
                            >
                                <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                            </svg>
                        </a>
                        
                        <div className={`dropdown-content ${activitiesExpanded ? 'expanded' : ''}`}>
                            <Link to="/sommer" onClick={handleClick}>Sommer</Link>
                            <Link to="/winter" onClick={handleClick}>Winter</Link>
                            <Link to="/indoor" onClick={handleClick}>Indoor</Link>
                        </div>
                    </div>
                    
                    <Link to="/anfahrt" onClick={handleClick}>Anfahrt</Link>
                    {/* <Link to="/preise" onClick={handleClick}>Preise</Link> */}
                    <Link to="/buchung" onClick={handleClick}>Buchung</Link>
                    {/* <Link to="/anfrage" onClick={handleClick}>Anfrage senden</Link> */}
                    <Link to="/anfrage" onClick={handleClick}><button className="button button-primary">Jetzt unverbindlich anfragen</button></Link>
                </div>
            </div>}
        </nav>
    )
}

export default Navigation;
