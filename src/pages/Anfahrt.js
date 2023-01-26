import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/oetz-im-winter.jpg";

function Anfahrt() {
    return (
        <div id="anfahrt">
            <Header title="Anfahrt" image={HeaderImage} />
            <div className="grid-text_wide">
                <h2>Dieser Bereich befindet sich aktuell noch im Aufbau.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Anfahrt;
