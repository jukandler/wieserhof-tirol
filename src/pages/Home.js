import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';

function Home() {
    return (
        <div id="home">
            {/* <Header /> */}
            <Hero />
            <div className="grid-text_wide">
                <h1>Willkommen auf dem Wieserhof</h1>
                <h2>Die exklusive Ferienwohnung im Ötztal,<br></br>5 Minuten vom Skigebiet entfernt.</h2>
                <p>Wir eröffnen im Dezember 2022, diese Website befindet sich aktuell noch im Aufbau.</p>
            </div>
            <Footer />
        </div>
    )
}

{/* <a 
    href="https://wa.me/4369910553435"
    target="_blank"
    rel="noopener noreferrer">
        <img className="whatsapp-logo" src={whatsapp_glyph} alt="whatsapp logo"></img>
</a> */}

export default Home;
