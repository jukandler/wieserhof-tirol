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
import PriceList from '../components/PriceList/PriceList';

function Apartment() {
    return (
        <div id="apartment">
            <Header title="Unsere exklusive Ferienwohnung" image={HeaderImage} />
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
            <ContentImage imageDesktop={bad}/>
            <div className="grid-text_wide">
                <p>Im Obergeschoss befindet sich ein weiteres Schlafzimmer mit einem Doppelbett und zwei weiteren getrennten Betten (Achtung Dachschräge) </p>
            </div>
            <h2>Bildergalerie:</h2>
            <ImageGallery />
            <BulletList />  
            <PriceList />
            <Footer />
        </div>
    )
}

export default Apartment;
