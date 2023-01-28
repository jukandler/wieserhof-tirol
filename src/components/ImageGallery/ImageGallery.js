import Gallery from 'react-image-gallery';
import Bad1 from "../../assets/images/gallery/ansicht-traumbad-1.jpeg";
import Bad2 from "../../assets/images/gallery/ansicht-traumbad-2.jpeg";
import Bad3 from "../../assets/images/gallery/auch-so-geht-s.jpeg";
import Wohnraum1 from "../../assets/images/gallery/doppelbett-im-offenen-wohnbereich.jpeg";
import Wohnraum2 from "../../assets/images/gallery/doppelbett-mit-offenem-wohnraum-1.jpeg";
import Wohnraum3 from "../../assets/images/gallery/doppelbett-mit-offenem-wohnraum-2.jpeg";
import Dusche from "../../assets/images/gallery/dusche-im-traumbad.jpeg";
import Eingangsbereich from "../../assets/images/gallery/eingangsbereich.jpeg";
import Kueche from "../../assets/images/gallery/hochwertig-ausgestattete-kueche.jpeg";
import Ofen from "../../assets/images/gallery/kuschelecke-mit-ofen.jpeg";
import Badewanne from "../../assets/images/gallery/luxusbadewanne-im-traumbad.jpeg";
import Wohnraum4 from "../../assets/images/gallery/mein-wohntraum-1.jpeg";
import Wohnraum5 from "../../assets/images/gallery/mein-wohntraum-2.jpeg";
import Wohnraum6 from "../../assets/images/gallery/mein-wohntraum-3.jpeg";
import Schlafzimmer1 from "../../assets/images/gallery/schlafzimmer-dachgeschoss-1.jpeg";
import Schlafzimmer2 from "../../assets/images/gallery/schlafzimmer-dachgeschoss-2.jpeg";
import Bad4 from "../../assets/images/gallery/traumbad-1.jpeg";
import Bad5 from "../../assets/images/gallery/traumbad-2.jpeg";
import Bad6 from "../../assets/images/gallery/waschtisch-im-traumbad.jpeg";

import "./gallery.css";

const images = [
    {
        original: Bad1,
        thumbnail: Bad1,
        description: "Blick ins Badezimmer"
    },
    {
        original: Bad2,
        thumbnail: Bad2,
        description: "Blick ins Badezimmer"
    },
    
    {
        original: Wohnraum1,
        thumbnail: Wohnraum1,
        description: "Doppelbett im offenen Wohnbereich"
    },
    {
        original: Wohnraum2,
        thumbnail: Wohnraum2,
        description: "Doppelbett im offenen Wohnbereich"
    },
    {
        original: Wohnraum3,
        thumbnail: Wohnraum3,
        loading: "lazy",
        description: "Offener Wohnraum"
    },
    {
        original: Eingangsbereich,
        thumbnail: Eingangsbereich,
        loading: "lazy",
        description: "Eingangsbereich"
    },
    {
        original: Kueche,
        thumbnail: Kueche,
        loading: "lazy",
        description: "Hochwertig ausgestattete Küche"
    },
    {
        original: Ofen,
        thumbnail: Ofen,
        loading: "lazy",
        description: "Kuschelecke mit Ofen"
    },
    {
        original: Wohnraum4,
        thumbnail: Wohnraum4,
        loading: "lazy",
        description: "Wohnraum / Essbereich"
    },
    {
        original: Wohnraum5,
        thumbnail: Wohnraum5,
        loading: "lazy",
        description: "Wohnraum / Essbereich"
    },
    {
        original: Wohnraum6,
        thumbnail: Wohnraum6,
        loading: "lazy",
        description: "Wohnraum / Essbereich"
    },
    {
        original: Schlafzimmer1,
        thumbnail: Schlafzimmer1,
        loading: "lazy",
        description: "Doppelbett im Obergeschoss"
    },
    {
        original: Schlafzimmer2,
        thumbnail: Schlafzimmer2,
        loading: "lazy",
        description: "Zwei getrennte Betten im Obergeschoss"
    },
    {
        original: Dusche,
        thumbnail: Dusche,
        loading: "lazy",
        description: "Offene Regendusche"
    },
    {
        original: Bad4,
        thumbnail: Bad4,
        loading: "lazy",
        description: "Badezimmer"
    },
    {
        original: Bad5,
        thumbnail: Bad5,
        loading: "lazy",
        description: "Badezimmer"
    },
    {
        original: Badewanne,
        thumbnail: Badewanne,
        loading: "lazy",
        description: "Lusuxbadewanne"
    },
    {
        original: Bad3,
        thumbnail: Bad3
    },
    {
        original: Bad6,
        thumbnail: Bad6,
        loading: "lazy",
        description: "Waschtisch"
    },
];

function ImageGallery() {
    return (
        <div className="wieserhof-gallery grid-expanded">
            <Gallery
                items={images}
                showBullets={window.matchMedia('(min-width: 750px)').matches}
                showIndex={true}
                showPlayButton={false}/>
        </div>
    );
}

export default ImageGallery;