import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/wohnraum.jpg";
import ContentImage from '../components/ContentImage/ContentImage';
import bad from "../assets/images/bad.jpg";
import ImageGallery from '../components/ImageGallery/ImageGallery';
import BulletList from '../components/BulletList/BulletList';
import IconBanderole from '../components/IconBanderole/IconBanderole';
import FamilyIcon from "../assets/icons/family.png";
import DoubleBedIcon from "../assets/icons/double-bed.png";
import DogIcon from "../assets/icons/dog.png";
import NoSmokingIcon from "../assets/icons/no-smoking.png";
import { Link } from 'react-router-dom';

// Gallery
import Bad1 from "../assets/images/gallery/ansicht-traumbad-1.jpeg";
import Bad2 from "../assets/images/gallery/ansicht-traumbad-2.jpeg";
import Bad3 from "../assets/images/gallery/auch-so-geht-s.jpeg";
import Wohnraum1 from "../assets/images/gallery/doppelbett-im-offenen-wohnbereich.jpeg";
import Wohnraum2 from "../assets/images/gallery/doppelbett-mit-offenem-wohnraum-1.jpeg";
import Wohnraum3 from "../assets/images/gallery/doppelbett-mit-offenem-wohnraum-2.jpeg";
import Dusche from "../assets/images/gallery/dusche-im-traumbad.jpeg";
import Eingangsbereich from "../assets/images/gallery/eingangsbereich.jpeg";
import Kueche from "../assets/images/gallery/hochwertig-ausgestattete-kueche.jpeg";
import Ofen from "../assets/images/gallery/kuschelecke-mit-ofen.jpeg";
import Badewanne from "../assets/images/gallery/luxusbadewanne-im-traumbad.jpeg";
import Wohnraum4 from "../assets/images/gallery/mein-wohntraum-1.jpeg";
import Wohnraum5 from "../assets/images/gallery/mein-wohntraum-2.jpeg";
import Wohnraum6 from "../assets/images/gallery/mein-wohntraum-3.jpeg";
import Schlafzimmer1 from "../assets/images/gallery/schlafzimmer-dachgeschoss-1.jpeg";
import Schlafzimmer2 from "../assets/images/gallery/schlafzimmer-dachgeschoss-2.jpeg";
import Bad4 from "../assets/images/gallery/traumbad-1.jpeg";
import Bad5 from "../assets/images/gallery/traumbad-2.jpeg";
import Bad6 from "../assets/images/gallery/waschtisch-im-traumbad.jpeg";

const images = [
    {
        src: Bad1,
        caption: "Blick ins Badezimmer"
    },
    {
        src: Bad2,
        caption: "Blick ins Badezimmer"
    },
    
    {
        src: Wohnraum1,
        caption: "Doppelbett im offenen Wohnbereich"
    },
    {
        src: Wohnraum2,
        caption: "Doppelbett im offenen Wohnbereich"
    },
    {
        src: Wohnraum3,
        caption: "Offener Wohnraum"
    },
    {
        src: Eingangsbereich,
        caption: "Eingangsbereich"
    },
    {
        src: Kueche,
        caption: "Hochwertig ausgestattete Küche"
    },
    {
        src: Ofen,
        caption: "Kuschelecke mit Ofen"
    },
    {
        src: Wohnraum4,
        caption: "Wohnraum / Essbereich"
    },
    {
        src: Wohnraum5,
        caption: "Wohnraum / Essbereich"
    },
    {
        src: Wohnraum6,
        caption: "Wohnraum / Essbereich"
    },
    {
        src: Schlafzimmer1,
        caption: "Doppelbett im Obergeschoss"
    },
    {
        src: Schlafzimmer2,
        caption: "Zwei getrennte Betten im Obergeschoss"
    },
    {
        src: Dusche,
        caption: "Offene Regendusche"
    },
    {
        src: Bad4,
        caption: "Badezimmer"
    },
    {
        src: Bad5,
        caption: "Badezimmer"
    },
    {
        src: Badewanne,
        caption: "Lusuxbadewanne"
    },
    {
        src: Bad3
    },
    {
        src: Bad6,
        caption: "Waschtisch"
    },
];

function Apartment() {
    return (
        <div id="apartment">
            <Header title="Unsere exklusive Ferienwohnung" image={HeaderImage} alt="Bild Ferienwohnung Wohnraum"/>
            <div className="grid-text_wide">
                <h3>Eingerichtet mit viel Liebe zum Detail: Luxus und Gemütlichkeit auf 85 m²</h3>
                <p>Das Herzstück des Appartements bildet ein großer, gemütlicher und offener Wohnraum mit einer vollausgestatteten Küche mit Essbereich und beheiztem Bauernofen für kuschelige Tage. In diesem Wohnraum befindet sich auch ein großes Doppelbett mit Zugang zum begehbaren Schrank.</p>
            </div>
            <IconBanderole 
                items={[
                    {
                        icon: FamilyIcon,
                        text: "bis zu<br>6 Personen"
                    },
                    {
                        icon: DoubleBedIcon,
                        text: "2 Doppelbetten<br>2 Einzelbetten"
                    },
                    {
                        icon: DogIcon,
                        text: "Haustiere<br>willkommen"
                    },
                    {
                        icon: NoSmokingIcon,
                        text: "Nichtraucher"
                    }
                ]}
            />
            <div className="grid-text_wide">
                <p>Unser Highlight ist das moderne, große Badezimmer mit freistehender Badewanne, Dusche mit integrierter Regendusche und WC; genießen Sie einen traumhaften Ausblick von unserem möblierten Balkon; unser herrlicher Garten mit Kinderspielplatz darf gerne mitbenützt werden. Weiters befinden sich rund um das Haus und das Wirtschaftsgebäude ca. 3 Hektar Wiesen, die in unserem Besitz sind.</p>
            </div>
            <ContentImage imageDesktop={bad} alt={"Ferienwohnung Wieserhof in Tirol"}/>
            <div className="grid-text_wide">
                <p>Im Obergeschoss befindet sich ein weiteres Schlafzimmer mit einem Doppelbett und zwei weiteren getrennten Betten (Achtung Dachschräge) </p>
            </div>
            <h2>Bildergalerie:</h2>
            <ImageGallery images={images} />
            <BulletList />  
            <Link to="/anfrage"><button className="button button-primary">Jetzt unverbindlich anfragen</button></Link>
            <Footer />
        </div>
    )
}

export default Apartment;
