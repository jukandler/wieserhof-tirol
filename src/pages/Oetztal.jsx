import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/skigebiet-hochoetz.jpeg";

function Oetztal() {
    return (
        <div id="oetztal">
            <Header title="Das Ötztal<br>Natur und Aktiv" image={HeaderImage} alt="Skigebiet Hochoetz"/>
            <div className="grid-text_wide">
                <h2>Dieser Bereich befindet sich aktuell noch im Aufbau.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Oetztal;
