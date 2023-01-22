import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';

function Home() {
    return (
        <div id="home">
            <Hero />
            <div className="grid-text_wide">
                <h1>Willkommen auf dem Wieserhof</h1>
                <h3>Die exklusive Ferienwohnung im Ötztal, 5 Minuten vom Skigebiet entfernt.</h3>
                <p>Wir eröffnen im Dezember 2022, diese Website befindet sich aktuell noch im Aufbau.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
