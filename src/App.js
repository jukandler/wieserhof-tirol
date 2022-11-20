import logo from './wieserhof_logo.jpg';
import hero_image from './balkon_view.jpg';
import hero_image_mob from './balkon_view-mobile.jpg';
import instagram_glyph from './instagram_glyph.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <picture>
          <source media="(max-width: 799px)" srcset={hero_image_mob} />
          <img className="hero-image" src={hero_image} alt="Aussicht vom Balkon ins Tal" />
        </picture>
        <img className="wieserhof-logo" src={logo} alt="wieserhof logo"></img>
      </header>
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
    </div>
  );
}

export default App;
