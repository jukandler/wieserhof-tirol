import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/winter/alpinski.jpg";

function Winter() {
    return (
        <div id="winter">
            <Header title="Aktivitäten im Winter" image={HeaderImage} alt="Wieserhof Blick von außen"/>
            <div className="grid-text_wide">
                <h2>Dieser Bereich befindet sich aktuell noch im Aufbau.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Winter;
