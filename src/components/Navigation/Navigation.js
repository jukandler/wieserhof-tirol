import './navigation.css';
import PinIcon from "../../assets/icons/pin.png";
import CallIcon from "../../assets/icons/call.png";
import MailIcon from "../../assets/icons/mail.png";
import WhatsappIcon from "../../assets/icons/whatsapp.png";
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
// import { useLocation } from 'react-router-dom'
import MenuToCloseIcon from '../MenuToCloseIcon/MenuToCloseIcon';
import { builder } from "@builder.io/react";

builder.init("5d7e39f94a4e4a9aa4708dc001763e25")

function Navigation() {
    // const location = useLocation();
    const menuIconColor = window.location.pathname === "/" ? "#FFFFFF" : "#6A5744";

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    const [links, setLinks] = useState([]);

    // Get the CMS data from Builder
    useEffect(() => {
        async function fetchContent() {
            const links = await builder.getAll("menu-links", {
                // You can use options for queries, sorting, and targeting here
                // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
            });
            setLinks(links);
            console.log("link", links)
        }
        fetchContent();
    }, []);


    return (
        <nav>
            <div className="navbar-icon" onClick={handleClick}>
                <MenuToCloseIcon color={menuIconColor} isOpen={isOpen}/>
            </div>
            <div className="sticky-navbar">
                <div className="action-icons grid-text_wide">
                    <a href="/anfahrt">
                        <img src={PinIcon} onClick={closeMenu} alt="Anfahrt"/>
                    </a>
                    <a href="tel:+4369910553435">
                        <img src={CallIcon} alt="Anrufen"/>
                    </a>
                    <a href="/anfrage">
                        <img src={MailIcon} onClick={closeMenu} alt="E-Mail schicken"/>
                    </a>
                    <a href="https://wa.me/4369910553435" target="_blank" rel="noopener noreferrer">
                        <img src={WhatsappIcon} alt="Whatsapp schicken"/>
                    </a>
                </div>
            </div>
            { isOpen && <div className="navigation-menu">
                <Logo onClick={closeMenu} />
                <div className="navigation-menu__links">
                    {/* 
                        <Link to="/" onClick={handleClick}>Startseite</Link>
                        <Link to="/ferienwohnung" onClick={handleClick}>Ferienwohnung</Link>
                        <Link to="/wieserhof" onClick={handleClick}>Der Wieserhof</Link>
                        <Link to="/oetztal" onClick={handleClick}>Das Ötztal</Link>
                        <Link to="/anfahrt" onClick={handleClick}>Anfahrt</Link>
                        <Link to="/preise" onClick={handleClick}>Preise</Link>
                        <Link to="/anfrage" onClick={handleClick}>Anfrage senden</Link>
                    */}
                        {links.map((link, index) => (
                            <a key={index} href={link.data.url} onClick={handleClick}>
                            {link.data.label}
                            </a>
                        ))}
                </div>
            </div>}
        </nav>
    )
}

export default Navigation;