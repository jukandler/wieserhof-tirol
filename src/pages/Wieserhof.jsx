import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/balkon-view.jpg";
import Sommer from "../assets/images/sommer/Biken.jpg";
import GalleryNew from '../components/ImageGallery/GalleryNew';

const galleryImages = [
    {
      thumbnail: HeaderImage,
      large: HeaderImage,
      alt: 'Außenansicht des Wieserhof',
      caption: 'Der Wieserhof in malerischer Tiroler Berglandschaft'
    },
    {
      thumbnail: Sommer,
      large: Sommer,
      alt: 'Außenansicht des Sommers',
      caption: 'Juhu Sommer'
    }
]

function Wieserhof() {
    return (
        <div id="wieserhof">
            <Header title="Der Wieserhof" image={HeaderImage} alt="Wieserhof Blick von außen"/>
            <div className="grid-text_wide">
                <h2>Dieser Bereich befindet sich aktuell noch im Aufbau.</h2>
                {/* <GalleryNew images={galleryImages} /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Wieserhof;
