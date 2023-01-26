import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/wohnraum.jpg";
import ContentImage from '../components/ContentImage/ContentImage';
import wohnraum2 from "../assets/images/wohnraum2.jpg";
import bad from "../assets/images/bad.jpg";

function Apartment() {
    return (
        <div id="apartment">
            <Header title="Unsere exklusive Ferienwohnung" image={HeaderImage} />
            <div className="grid-text_wide">
                <h3>Eingerichtet mit viel Liebe zum Detail: Luxus und Gemütlichkeit auf 85 m²</h3>
                <p>Das Herzstück des Appartements bildet ein großer, gemütlicher und offener Wohnraum mit einer vollausgestatteten Küche mit Essbereich und beheiztem Bauernofen für kuschelige Tage. In diesem Wohnraum befindet sich auch ein großes Doppelbett mit Zugang zum begehbaren Schrank.</p>
            </div>
            <ContentImage imageDesktop={wohnraum2}/>
            <div className="grid-text_wide">
                <p>Unser Highlight ist das moderne, große Badezimmer mit freistehender Badewanne, Dusche und WC; genießen Sie einen traumhaften Ausblick von unserem möblierten Balkon; unser herrlicher Garten mit Kinderspielplatz darf gerne mitbenützt werden.</p>
            </div>
            <ContentImage imageDesktop={bad}/>
            <div className="grid-text_wide">
                <p>Im Obergeschoss befindet sich ein weiteres Schlafzimmer mit einem Doppelbett und zwei weiteren getrennten Betten (Achtung Dachschräge) </p>
            </div>
            <h2>Bildergalerie:</h2>
            <Footer />
        </div>
    )
}

export default Apartment;
