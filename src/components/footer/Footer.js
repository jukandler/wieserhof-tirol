import {
  Link
} from "react-router-dom";
import Logo from "../Logo/Logo";
import IconFacebook from "../../assets/icons/facebook.png";
import IconInstagram from "../../assets/icons/instagram.png";

import './footer.css';

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
                        <img className="facebook-logo" src={IconFacebook} alt="facebook logo"></img>
                </a>
                <a 
                    href="https://www.instagram.com/wieserhof_tirol/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="instagram-logo" src={IconInstagram} alt="instagram logo"></img>
                </a>
            </div>
            <Link to="/impressum" className="link-imprint">Impressum</Link>
        </footer>
    )
}

export default Footer;