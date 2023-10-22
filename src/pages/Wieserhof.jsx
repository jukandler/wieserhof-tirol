import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/balkon-view.jpg";

function Wieserhof() {
    return (
        <div id="wieserhof">
            <Header title="Der Wieserhof" image={HeaderImage} alt="Wieserhof Blick von außen"/>
            <div className="grid-text_wide">
                <h2>Dieser Bereich befindet sich aktuell noch im Aufbau.</h2>
            </div>
            <Footer />
        </div>
    )
}

export default Wieserhof;
