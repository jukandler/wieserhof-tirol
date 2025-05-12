import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import ImageGallery from '../components/ImageGallery/ImageGallery';

// Gallerie
import WieserhofSommer from "../assets/images/wieserhof/Wieserhof Sommer.jpeg";
import WieserhofWinter from "../assets/images/wieserhof/Wieserhof Winter.jpg";
import Aussicht from "../assets/images/wieserhof/Aussicht.jpg";
import BalkonSommer from "../assets/images/wieserhof/BalkonSommer.jpg";
import frontansicht from "../assets/images/wieserhof/frontansicht.jpg";
import frontansicht2 from "../assets/images/wieserhof/frontansicht2.jpg";
import Frühling from "../assets/images/wieserhof/frühling hofansicht.jpg";
import Garten from "../assets/images/wieserhof/Garten mit Aussicht.jpg";
import Grillerei from "../assets/images/wieserhof/Grillerei.jpg";
import HausFrontansicht from "../assets/images/wieserhof/Haus Frontansicht.jpg";
import KraftplatzOfenbank from "../assets/images/wieserhof/Kraftplatz ofenbank.jpg";
import Pizzaofen from "../assets/images/wieserhof/Pizzaofen.jpg";
import Spielplatz from "../assets/images/wieserhof/Spielplatz Sommer.jpg";
import Willkommensgruß from "../assets/images/wieserhof/Willkommensgruß.jpg";

// Galerie alte Bilder
import AussichtAlt from "../assets/images/wieserhof/alt/Aussicht.jpg";
import Bauer from "../assets/images/wieserhof/alt/Bauer.jpg";
import Erbhof from "../assets/images/wieserhof/alt/erbhof.jpg";
import Frau from "../assets/images/wieserhof/alt/Frau.jpg";
import Heu from "../assets/images/wieserhof/alt/Heu.jpg";
import Hof from "../assets/images/wieserhof/alt/Hof.jpg";
import ski from "../assets/images/wieserhof/alt/ski.jpg";
import Traktor from "../assets/images/wieserhof/alt/Traktor.jpg";

// Galerie neue Bilder
import Feldarbeit from "../assets/images/wieserhof/neu/Feldarbeit.jpg";
import Handarbeit from "../assets/images/wieserhof/neu/Handarbeit.jpg";
import Heukran from "../assets/images/wieserhof/neu/Heukran.jpg";
import Mäharbeit from "../assets/images/wieserhof/neu/Mäharbeit.jpg";
import Mäharbeit2 from "../assets/images/wieserhof/neu/Mäharbeit2.jpg";
import Miststreuen from "../assets/images/wieserhof/neu/Miststreuen.jpg";


// Tierfotos
import Bella from "../assets/images/wieserhof/tiere/Bella.jpg";
import Cookie from "../assets/images/wieserhof/tiere/Cookie.jpg";
import Enten from "../assets/images/wieserhof/tiere/Enten.jpg";
import Frida from "../assets/images/wieserhof/tiere/Frida.jpg";
import Hennen from "../assets/images/wieserhof/tiere/Hennen.jpg";
import Nicki from "../assets/images/wieserhof/tiere/Nicki.jpg";
import Schwänli from "../assets/images/wieserhof/tiere/Schwänli.jpg";
import ContentImage from '../components/ContentImage/ContentImage';

const galleryImages = [
    {
      src: frontansicht2,
      caption: 'Frontansicht des Wieserhofs im Sommer'
    },
    {
      src: WieserhofSommer,
      caption: 'Außenansicht des Wieserhofs im Sommer'
    },
    {
      src: WieserhofWinter,
      caption: 'Außenansicht des Wieserhofs im Winter'
    },
    {
      src: Aussicht,
      caption: 'Aussicht ins Tal'
    },
    {
      src: BalkonSommer,
      caption: 'Aussicht vom Balkon des Apartments'
    },
    {
      src: frontansicht,
      caption: 'Frontansicht des Wieserhofs'
    },
    {
      src: Frühling,
      caption: 'Wieserhof im Frühling'
    },
    {
      src: Garten,
      caption: 'Unser schöner Garten'
    },
    {
      src: Grillerei,
      caption: 'Grillplatz'
    },
    {
      src: HausFrontansicht,
      caption: 'Frontansicht des Wieserhofs'
    },
    {
      src: KraftplatzOfenbank,
      caption: 'Kraftplatz Ofenbank'
    },
    {
      src: Pizzaofen,
      caption: 'Pizzaofen'
    },
    {
      src: Spielplatz,
      caption: 'Spielplatz'
    },
    {
      src: Willkommensgruß,
      caption: 'Willkommensgruß'
    }
]

const galleryImagesOld = [
    {
      src: AussichtAlt,
      caption: 'Aussicht vom alten Wieserhof'
    },
    {
      src: Hof,
      caption: 'So sah der Wieserhof damals aus'
    },
    {
      src: Heu,
      caption: 'Heuernte'
    },
    {
      src: Bauer,
      caption: 'Bauer mit Mistwagen'
    },
    {
      src: Frau,
      caption: 'Milch zentrifugieren'
    },
    {
      src: ski,
      caption: 'Skifahren'
    },
    {
      src: Traktor,
      caption: '1. Traktor am Hof'
    },
    {
      src: Erbhof
    }
];

const galleryImagesNew = [
    {
      src: Feldarbeit,
      caption: 'Feldarbeit mit Aussicht'
    },
    {
      src: Heukran,
      caption: 'Heukran im vollen Stadl'
    },
    {
      src: Miststreuen,
      caption: 'Miststreuen'
    },
    {
      src: Mäharbeit,
      caption: 'Mäharbeit'
    },
    {
      src: Mäharbeit2,
      caption: 'Mäharbeit'
    },
    {
      src: Handarbeit,
      caption: 'Ganz ohne Handarbeit geht nichts'
    },
];

function Wieserhof() {
    return (
        <div id="wieserhof">
            <Header title="Der Wieserhof"/>
            <ImageGallery images={galleryImages} />
            <div className="grid-text_wide">
                <h2>Ein Ort mit Geschichte, Herz und Aussicht</h2>
                <h3>Lage und Erreichbarkeit</h3>
                <p>Der Wieserhof liegt am Eingang des weltbekannten Oetztals auf einer Anhöhe in sonniger Lage auf 1100 m Meereshöhe  im wunderschönen Weiler Oetzerau. Oetzerau gehört zur Gemeinde Oetz. Wir sind über das Oetztal erreichbar jedoch auch über das Sellraintal über Küthai und dann durch das naturbelassene Nedertal.</p>
                <h3>Unser Besitz</h3>
                <p>Unser Besitz umfasst ca. 4 ha zum Teil recht steile Wiesen die unseren Hof umschließen und ca. 8 ha Wald in der näheren Umgebung. Bei unserem Betrieb handelt es sich um einen typischen Bergbauernhof von kleiner Struktur wie es bei uns in der Region für die landwirtschaftlichen Betriebe charakteristisch ist.</p>
                <h3>Landwirtschaft mit Herz</h3>
                <p>Wir betreiben unsere Landwirtschaft im Nebenerwerb mit Tierhaltung (Ziegen, Pferden, Ponys, Hühnern, Enten, Hasen und Katzen), haben jedoch auch Streuobstwiesen mit Äpfeln, Birnen und Zwetschken und einen großen Bauerngarten mit verschiedenen Gemüsesorten und Beeren. Mittlerweile erleichtern hangtaugliche Spezialmaschinen die Heuarbeiten, es ist jedoch nach wie vor eine Herausforderung die steilen Flächen zu bewirtschaften.</p>
                <h3>Ein Hof mit langer Geschichte</h3>
                <p>Unser Hof ist nachweislich seit 1680 in Familienbesitz, es gibt jedoch Hinweise das der Hof schon viel früher entstanden ist. 1977 hatte mein Großvater Johann Fischer und seine Gattin Johanna Fischer die damaligen Besitzer vom Hof die große Ehre das ihnen der Titel Erbhof verliehen wurde. Wir sind stolz darauf unseren  Bergbauernhof der über Generationen mit sicherlich vielen Höhen und Tiefen, Freuden und auch Leid immer wieder gehalten werden konnte und somit von Generation an Generation weitergegeben wurde. Unsere Auffassung ist es auch das wir das unseren Ahnen in gewisser Weise schuldig sind den Hof weiterzuführen und auch stolz darauf sind was unsere Vorfahren mit viel Mühen und mit vielen fleißigen Händen geschaffen haben.  </p>
                <p style={{textAlign: "center", margin: 0}}><strong>Landwirtschaft anno dazumal</strong></p>
                <ImageGallery size="small" images={galleryImagesOld} />
                <p>Wir betreiben unseren Hof in mittlerweile 10. Generation bewusst nicht als Biobetrieb, denn wir sind der Auffassung, das es viel wertvoller ist unseren Betrieb in natürlicher Weise so weiterzuführen, wie es auch schon unsere Ahnen taten und das dies mit keinem Titel vergleichbar ist den man erwerben kann indem man sich an die Vorgaben hält die uns die EU und andere Behörden vorschreiben möchten.</p>
                <p style={{textAlign: "center", margin: 0}}><strong>Landwirtschaft heute</strong></p>
                <ImageGallery size="small" images={galleryImagesNew} />
                <h3>Unsere Familie</h3>
                <p>Seit meiner Kindheit habe ich die Ehre am Hof mitzuarbeiten und seit 2009 ist der Hof jetzt auch in unserem Besitz. Wir das bin ich, der „Wieserbauer“ Michl und meine Frau die Bäuerin Barbara. Seit 2012 sind wir jetzt zu dritt, da wurde unsere Tochter Felicitas geboren.</p>
                <p>Seit Weihnachten 2022 dürfen wir uns jetzt auch Gastgeber nennen, denn dort ist ein von uns schon lange dagewesener Wunsch in Erfüllung gegangen, seit damals vermieten wir unsere mit viel Herzblut gestaltete Ferienwohnung! Es ist eine große Freude für uns unseren Gästen einen Einblick in unseren Hofalltag zu gewähren und mit Ihnen alle die Vorteile die unsere Hof in Alleinlage bietet zu teilen.</p>
                <h2>Die Tiere vom Wieserhof stellen sich vor</h2>
                <h3>Ziegenherde</h3>
                <ContentImage type="small" imageDesktop={Frida} alt="Ziegenherde"/>
                <p>Hallo, ich bin Frieda und einer der zahlreichen Ziegen auf dem Wieserhof. Wir gehören zu der Gattung Tauernschecken und sind ein lustiger und bunter Haufen. Wir sind alle ziemlich neugierig, aber Fremden gegenüber auch immer erst ein wenig zurückhaltend. Ich jedoch bin ziemlich leicht zu bestechen und gegen ein paar Streicheleinheiten oder auch ein kleines Stück altes Brot können wir schnell Freundschaft schließen. 
                    Unser Chef ist der Grisu, der mit seinen großen Hörnern zwar beeindruckend aussieht, aber eigentlich ein ganz Lieber ist.</p>
                <h3>Bella</h3>
                <ContentImage type="small" imageDesktop={Bella} alt="Haflingerstute auf der Weide"/>
                <p>Hallo, ich bin die Haflingerstute Bella und 2018 geboren und die Größte im Stall. Ich gehöre Feli und sie reitet auch auf mir, wenn sie mal nicht auf den Skiern unterwegs ist. Da ich gern noch ein paar Flausen im Kopf habe, lass ich eigentlich nur Feli auf mir reiten. Ich liebe jedoch Streicheleinheiten und freue mich immer über das eine oder andere Leckerli. Da ich allerdings nie genug bekommen kann, schaut bitte ihr drauf, dass ich nicht allzu viele Äpfel, Karotten oder auch altes Brot auf einmal fresse. Sonst kann ich Bauchschmerzen bekommen, bzw. werde zu dick.</p>
                <h3>Schwänli</h3>
                <ContentImage type="small" imageDesktop={Schwänli} alt="Mädchen sitzt auf der Weide und häkt ein Pferd am Zügel"/>
                <p>Ich bin die schwarze Welsh Cop Stute und die Oma im Stall und 2003 geboren. Früher hatte ich viel Spaß dabei, wenn die Kinder auf mir geritten sind, allerdings mag ich das nicht mehr. Zudem bin ich schon ein wenig wackelig auf den Beinen, aber das ist in meinem Alter glaub normal.
                    Gerne dürft ich mich aber putzen, streicheln oder auch mit Leckerlis verwöhnen. Im Gegensatz zu Bella brauche ich auch nicht mehr auf meine Figur achten.</p>
                <h3>Nicki</h3>
                <ContentImage type="small" imageDesktop={Nicki} alt="Pony grast auf der Weide"/>
                <p>Nun ich bin die Kleinste im Haufen, aber davon lasse ich mich nicht unterkriegen. Da Bella als Fohlen zu uns gekommen ist, fühle ich mich ein wenig als ihre Mama, auch wenn sie mir natürlich schon lange über den Kopf gewachsen ist. Aber der Boss bin trotzdem noch ich.
                    Auf mir dürfen die Kleine von Euch gerne mal das Reiten ausprobieren. Da bin ich auch richtig brav, vorallem wenn ihr mich davor mit einer ausgiebigen Putzeinheit verwöhnt.</p>
                <h3>Enten</h3>
                <ContentImage type="small" imageDesktop={Enten} alt="Laufenten mit Bergen im Hintergrund"/>
                <p>Wir sind die Laufentenschar vom Wieserhof und immer fleißig rund um den Hof unterwegs auf der Suche nach Fressbarem. Unsere Leibspeise sind Schnecken, insbesondere Nacktschnecken, aber auch Schneckeneier. Unsere Aufgabe auf dem Hof ist es daher, dafür zu sorgen, dass die Schnecken nicht den Gemüsegarten plündern. 
                    Streicheln mögen wir so gar nicht und manchmal abends auch nicht heimgehen. Da dürft ihr gerne mal helfen uns dran zu erinnern, denn nachts schleicht gerne mal der Fuchs ums Haus und den mögen wir gar nicht. Aber im Stall sind wir da ja sicher.</p>
                <h3>Hühner</h3>
                <ContentImage type="small" imageDesktop={Hennen} alt="Hennen im Stall"/>
                <p>Hallo, wir sind die Abteilung, die für Eure Frühstückseier zuständig ist. Wir sind auch ein bunter Haufen und lieben es draußen im Dreck zu scharren oder uns im Sand zu wälzen. Wenn ihr ruhig und ein wenig geduldig seid, dürft ihr auch gerne mal zu uns in den Stall und uns ein wenig streicheln. Alle von uns mögen das zwar nicht, aber das findet ihr schon raus. Bitte einfach respektieren, wenn die eine oder andere Dame darauf grad keine Lust hat.</p>
                <h3>Katzen</h3>
                <ContentImage type="small" imageDesktop={Cookie} alt="Katze"/>
                <p>Hallo, ich bin Cookie und eine von drei Katzen am Hof. Ich habe die Ehre, dass ich auch ins Haus darf. Das liegt wohl daran, dass meine beiden Kollegen Mia und Peter sich nicht so gerne streicheln lassen und eher scheu sind. Die beiden sorgen aber dafür, dass wir im Stall keine Mäuse haben. Ich genieße dagegen eher meine Streifzüge rund um den Hof, hoffentlich ausreichend Streicheleinheiten und Futter, das ich mir nicht erst fangen muss. Obwohl, hin und wieder bringe ich auch gerne Geschenke mit und leg die der Bauersfamilie auch mal vor die Haustüre.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Wieserhof;
