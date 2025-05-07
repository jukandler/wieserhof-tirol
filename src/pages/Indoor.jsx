import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/indoor/naturparkhaus.jpg";

function Indoor() {
    return (
        <div id="indoor">
            <Header title="Indoor-Aktivitäten" image={HeaderImage} alt="Wieserhof Blick von außen"/>
            <div className="grid-text_wide">
                <h2>Dieser Bereich befindet sich aktuell noch im Aufbau.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Indoor;
