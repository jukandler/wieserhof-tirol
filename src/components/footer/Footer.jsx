import {
  Link
} from "react-router-dom";
import Logo from "../Logo/Logo";
import IconFacebook from "../../assets/icons/facebook.png";
import IconInstagram from "../../assets/icons/instagram.png";
import OetztalLogo from "../../assets/images/logo-oetztal.jpg"
import TirolLogo from "../../assets/images/logo-tirol.jpg"
import UABLogo from "../../assets/images/urlaub-am-bauernhof.png"

import './footer.css';
import BookingEmbed from "../booking/BookingEmbed";

function Footer() {
    return (
        <footer>
            <Logo />
            <div className="contact">
                <p>Wies 130, 6433 Oetz, Tirol</p>
                <p>Telefon: <a href="tel:+4369910553435">+43 699 1055 3435</a></p>
                <p>E-Mail: <a href="mailto:info@wieserhof-tirol.at" target="_blank" rel="noopener noreferrer">info@wieserhof-tirol.at</a></p>
            </div>
            <div className="social-icons">
                <a 
                    href="https://www.facebook.com/people/Wieserhof-Tirol/100088885545237/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="facebook-logo" src={IconFacebook} alt="facebook logo" loading="lazy"/>
                </a>
                <a 
                    href="https://www.instagram.com/wieserhof_tirol/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="instagram-logo" src={IconInstagram} alt="instagram logo" loading="lazy"/>
                </a>
            </div>
            <BookingEmbed />
            <a className="urlaub-am-bauernhof-logo" href="https://www.urlaubambauernhof.at/de/hoefe/wieserhof" target="_blank" rel="noopener noreferrer">
                <img src={UABLogo} alt="Logo Urlaub am Bauernhof" style={{width: "150px", margin: "10px 0"}} loading="lazy"/>
            </a>
            <a className="tirol-logo" href="" target="_blank" rel="noopener noreferrer">
                <img src={TirolLogo} alt="Logo Tirol" style={{width: "150px", margin: "10px 0"}} loading="lazy"/>
            </a>
            <a className="oetztal-logo" href="https://www.oetztal.com/de/" target="_blank" rel="noopener noreferrer">
                <img src={OetztalLogo} alt="Logo Ötztal" style={{width: "75px", margin: "10px 0"}} loading="lazy"/>
            </a>
            <div className="links-bottom">
                <Link to="/impressum" className="link-imprint">Impressum</Link>
                <Link to="/datenschutz" className="link-dataprivacy">Datenschutz</Link>
            </div>
        </footer>
    )
}

export default Footer;