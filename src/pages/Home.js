import instagram_glyph from '../instagram_glyph.png';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <div id="home">
            <Header />
            <div className="grid-text_wide">
                <h1>Willkommen auf dem Wieserhof in Tirol</h1>
                <h2>Die exklusive Ferienwohnung im Ötztal,<br></br>5 Minuten vom Skigebiet entfernt.</h2>
                <p>Wir eröffnen im Dezember 2022, diese Website befindet sich aktuell noch im Aufbau.</p>

                <div className="contact">
                <h3>Kontakt:</h3>
                <p>Teststraße 1, 12345 Ötztal, Tirol</p>
                <p>Telefon: <a href="tel:+4369910553435">+43 699 1055 3435</a></p>
                <p>E-Mail: <a href="mailto:info@wieserhof-tirol.at">info@wieserhof-tirol.at</a></p>
                </div>
                <p>Besucht uns solange gerne auf unserem Instagram Profil:</p>
                <a 
                href="https://www.instagram.com/wieserhof_tirol/"
                target="_blank"
                rel="noopener noreferrer">
                    <img className="instagram-logo" src={instagram_glyph} alt="instagram logo"></img>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
