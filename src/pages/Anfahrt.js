import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/oetz-im-winter.jpg";
import LocationIcon from "../assets/icons/location.png";

function Anfahrt() {
    return (
        <div id="anfahrt">
            <Header title="Anfahrt" image={HeaderImage} />
            <div className="grid-text_wide">
                <h3>Check-In: ab 15:00 Uhr / Check-Out: bis 10:00 Uhr</h3>
                <h3>Adresse:</h3>
                <span>
                    <img src={LocationIcon} alt="Icon in Google Maps öffnen" style={{width: "35px", marginRight: "10px"}}/>
                </span>
                <span>Wies 130, 6433 Oetz, Tirol</span>
                <div>
                    <a href="https://www.google.com/maps/search/?api=1&query=Wies%20130%206433%20Oetz%20Austria" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", marginBottom: "40px" }}>
                        <span>In Google Maps öffnen</span>
                    </a>
                </div>
                <h3>Mit dem Auto:</h3>
                <p>Anreise: In der Ortschaft Oetz den Kreisverkehr am Ortsende Richtung Kühtai verlassen. Der Straße für ca. 3,5 km bis Taxegg folgen. Vor der großen Rechtskurve rechts abbiegen und dem weiteren Straßenverlauf  folgen. Unser Haus befindet sich nach ca. 300 m am Ende dieser Straße.</p>
                <p>Bitte denken Sie im Winter an die entsprechende Winterausrüstung - unser Hof liegt auf ca. 1.100 m Seehöhe.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Anfahrt;
