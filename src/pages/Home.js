import instagram_glyph from '../instagram_glyph.png';
import whatsapp_glyph from '../whatsapp_logo.png';
import facebook_glyph from '../facebook_logo.png';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <div id="home">
            <Header />
            <div className="grid-text_wide">
                <h1>Willkommen auf dem Wieserhof in Tirol!</h1>
                <h2>Die exklusive Ferienwohnung im Ötztal,<br></br>5 Minuten vom Skigebiet entfernt.</h2>
                <p>Wir eröffnen im Dezember 2022, diese Website befindet sich aktuell noch im Aufbau.</p>

                <div className="contact">
                    <h3>Kontakt Wieserhof:</h3>
                    <p><b>Barbara Untermayer &amp; Michael Fischer </b></p>
                    <p>Wies 130, 6433 Oetz, Tirol</p>
                    <p>Telefon: <a href="tel:+4369910553435">+43 699 1055 3435</a></p>
                    <p>E-Mail: <a href="mailto:info@wieserhof-tirol.at">info@wieserhof-tirol.at</a></p>
                </div>
                <p>Melde dich auch gerne über Facebook, Instagram oder Whatsapp bei uns:</p>
                <div className="action-buttons">
                    <a 
                    href="https://www.facebook.com/people/Wieserhof-Tirol/100088885545237/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="facebook-logo" src={facebook_glyph} alt="facebook logo"></img>
                    </a>
                    <a 
                    href="https://www.instagram.com/wieserhof_tirol/"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="instagram-logo" src={instagram_glyph} alt="instagram logo"></img>
                    </a>
                    <a 
                    href="https://wa.me/4369910553435"
                    target="_blank"
                    rel="noopener noreferrer">
                        <img className="whatsapp-logo" src={whatsapp_glyph} alt="whatsapp logo"></img>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
