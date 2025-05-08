import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Expandable from '../components/expandable/Expandable';
import Ski from "../assets/images/winter/alpinski.jpg";
import Eislauf from "../assets/images/winter/Eislauf.jpg";
import Langlauf from "../assets/images/winter/Langlauf.jpg";
import Rodeln from "../assets/images/winter/Rodeln.jpg";
import Schneeschuh from "../assets/images/winter/Schneeschuh.jpg";
import Skitour from "../assets/images/winter/Skitour.jpg";


const activities = [
    {
      title: 'Eislaufen',
      image: Eislauf,
      description: `
        Nicht nur für Eisprinzessinnen!<br>
        Natureislauf am Piburger See und auf Eislaufplätzen in der Umgebung<br>
        Eislaufen mit der Familie ist ein ganz besonderer Spaß. Eislaufen in der Natur-Eisarena Piburger See ist einzigartig und beeindruckt nicht nur kleine Eisprinzessinnen und -prinzen, sondern auch eislaufbegeisterte Erwachsene. Die Mindesteisdichte auf der 2 Kilometer langen und 4 Meter breiten Bahn wird zu Ihrer Sicherheit regelmäßig überprüft. Die Benützung der Fläche ist kostenlos.<br>
        Weitere Eislaufplätze gibt es in Haiming und Ötztal Bahnhof.<br>
        Eisstockschießen ist in Sautens möglich.
      `
    },
    {
      title: 'Langlaufen',
      image: Langlauf,
      description: `
        Langlaufen im Ötztal<br>
        Eins werden mit einer wunderbaren Landschaft<br>
        Der Langlauf gehört zu den ältesten und gesündesten Sportarten der Welt. Die intensive Bewegung an frischer Luft inmitten der herrlichen Ötztaler Bergwelt bedeutet pures Krafttanken für Körper, Geist und Seele. Der anschließende Besuch von Kassls Wellness- und Spa-Welt krönt Ihren Fleiß und lässt Ihren sportlichen Tag mit verdienter Entspannung ausklingen.<br>
        Im Ötztal stehen allen Langlaufbegeisterten - von Anfängern bis Skatern und Verfechtern des klassischen Stils - insgesamt 195 km bestens gespurter Loipen zur Verfügung. Besonders schneesicher ist die 3 km lange Rundloipe auf 1.570 Höhenmetern im benachbarten Ochsengarten.
      `
    },
    {
      title: 'Skifahren & Skigebiete',
      image: Ski,
      description: `
        Toll, toller - Skifahren im Ötztal!<br>
        Die Skiwinter-Highlights im längsten Seitental Tirols<br>
        Das Ötztal ist ohne Übertreibung ein Skisport-Tal der Superlative. Die Skigebiete Hochoetz, Kühtai, Sölden und Obergurgl-Hochgurgl bieten Ihnen insgesamt über 300 Pistenkilometer. Die beiden Gletscher des Ötztals, der Tiefenbach- und der Rettenbachgletscher, garantieren Schneesicherheit schon in den Vormonaten des Winters.<br>
        Egal ob Anfänger oder Profi, ob Familien oder Skitourengeher: Nach dem Skisport können Sie sich in unserer großen Familienbadewanne so richtig entspannen.<br><br>
        Ötztal Superskipass: Eine Karte für alle Skigebiete im Ötztal<br>
        Der Ötztal Superskipass im Überblick:<br>
        - 356 Pistenkilometer<br>
        - 90 Liftanlagen<br>
        - 6 Skigebiete: Hochoetz-Kühtai, Sölden, Obergurgl-Hochgurgl, Niederthai, Gries, Vent<br>
        <a href="https://www.oetztal.com/de/aktivitaeten/winter/skifahren-snowboarden/oetztal-superskipass" rel="noopener noreferrer" target="_blank">Weitere Informationen und Preise</a><br><br>
        
        <strong>Das Skigebiet Hochoetz-Kühtai im Überblick</strong><br>
        Das familiäre Skigebiet am Taleingang des Ötztals bietet alles für einen gelungenen Skiurlaub im Ötztal. 
        Mehr als 80 km bestens präparierte Pisten und 24 Bahnen/Lifte garantieren Skigenuss pur den ganzen Winter.<br>
        <a href="https://www.oetztal.com/de/aktivitaeten/winter/skifahren-snowboarden/skigebiet-hochoetz/skigebietsinformationen/skigebietsplan-lifte-pisten" rel="noopener noreferrer" target="_blank">Skigebietsplan</a><br>
        <a href="https://www.oetztal.com/de/aktivitaeten/winter/skifahren-snowboarden/skigebiet-hochoetz/skipasspreise" rel="noopener noreferrer" target="_blank">Skipasspreise</a><br><br>

        <strong>Das Skigebiet Sölden im Überblick</strong><br>
        Das Skigebiet der Superlative:<br>
        134 schneesichere Pistenkilometer und 34 topmoderne Liftanlagen bieten ein unvergessliches Skivergnügen im Ötztal.<br>

        <a href="https://www.soelden.com/de/aktivitaeten/winter/skifahren-snowboarden/skigebietsinformationen/skigebietsplan-lifte-pisten" rel="noopener noreferrer" target="_blank">Skigebietsplan</a><br>
        <a href="https://www.soelden.com/de/aktivitaeten/winter/skifahren-snowboarden/skipaesse-preise/winter" rel="noopener noreferrer" target="_blank">Skipasspreise</a><br><br>

        <strong>Das Skigebiet Gurgl im Überblick</strong><br>
        Aufgrund der Höhenlage ist im Skigebiet Obergurgl-Hochgurgl Schneesicherheit bis in den späten Frühling garantiert. Dazu kommen 110 Pistenkilometer und 23 moderne Liftanlagen.<br>
        <a href="https://www.gurgl.com/de/aktivitaeten/winter/skifahren-snowboarden/skigebietsinformationen/skigebietsplan-lifte-pisten" rel="noopener noreferrer" target="_blank">Skigebietsplan</a><br>
        <a href="https://www.gurgl.com/de/aktivitaeten/winter/skifahren-snowboarden/skipaesse-preise" rel="noopener noreferrer" target="_blank">Skipasspreise</a><br><br>

        <strong>Skischulen & Skiverleih</strong><br>
        Unsere verlässlichen Partner in Sachen Skischule und Skiverleih.<br>
        Ob große oder kleine Skifans, ob Anfänger oder Fortgeschrittene: Alle, die das Skifahren erlernen oder perfektionieren wollen, werden in den Skischulen in Oetz-Hochoetz bestens betreut. Kinder lernen professionell und spielerisch das Skifahren in eigens auf sie zugeschnittenen Skikursen. Für Spaß und Unterhaltung abseits der Pisten sorgen der Bobo Kinderclub oder Maskottchen Widi.
      `
    },
    {
      title: 'Skitouren & Freeriden',
      image: Skitour,
      description: `
        Lieber abseits unterwegs? Bei uns findest du unberührte Hänge und Touren, die dich irgendwo zwischen Naturerlebnis und sportlicher Herausforderung selig werden lassen. Klassiker wie Hohe Wilde, Weißkugel oder Wildspitze sind nur eine kleine Auswahl der beliebtesten „Hautes Routes“ der Ostalpen. Egal auf welchem Level du dich bewegst, im Ötztal kommst du auf Touren - im Alleingang oder sicherheitshalber mit ortskundigen Bergführern.
      `
    },
    {
      title: 'Winter- & Schneeschuhwandern',
      image: Schneeschuh,
      description: `
        Winterwandern im Ötztal - Naturgenuss zur kalten Jahreszeit!<br>
        Winterwandern bei klarer Luft inmitten einer verschneiten Bergwelt ist die einfachste Art Natur zu erleben. Ausgestattet mit gutem Schuhwerk und wetterfester Kleidung tauchen Sie in die unvergleichliche Atmosphäre der stillen Wanderwege des Ötztals ein. Wanderstöcke und Rucksäcke können Sie unentgeltlich bei uns am Hof ausleihen. Insgesamt steht unseren Gästen ein gut beschildertes Wegenetz von 185 Kilometern zur Verfügung, das von Haiming bis Obergurgl-Hochgurgl und Vent reicht.
      `
    },
    {
      title: 'Rodeln',
      image: Rodeln,
      description: `
        Rodelsport im Ötztal<br>
        Vom beliebten Freizeitvergnügen zum Rodel-Mekka Tirols<br>
        Es muss nicht immer Schifahren sein! Der Rodelsport ist im Ötztal seit jeher sehr beliebt. Auch der Weltcupzirkus für Naturbahnrodler macht im Ötztal immer wieder Station. Die modernste Naturrodelbahn Tirols, die Bahn Grantau in Umhausen, steht auch Freizeitsportlern zur Verfügung.<br>
        Erleben Sie den Winter von seiner romantischen Seite auf einer der vielen bestens präparierten Rodelbahnen in der Umgebung! Die schönsten Bahnen sind zu finden in Ochsengarten, Kühtai, Sautens, Niederthai, Umhausen, Längenfeld, Gries, Sölden, Vent und Obergurgl-Hochgurgl.<br>
        Nur wenige Fahrminuten vom Hof entfernt liegt die täglich befahrbare und beleuchtete 1,2 km lange Strecke in Oetz-Piburg. Wer's noch sportlicher mag, nützt die 2,2 km lange Strecke vom nahen Ochsengarten auf die Feldringalm.<br><br>
        Rodeltipps in der Umgebung von Oetz:<br><br>
        <strong>Rodelbahn Piburg - Oetz</strong><br>
        Täglich beleuchtete 1,2 km lange Rodelbahn,<br>
        Gehzeit 20 min. auf Rodelbahn<br><br>
        <strong>Feldring Alm - Ochsengarten - leicht, für Familien geeignet</strong><br>
        2,2 km lange Rodelbahn zur Feldringalm (bewirtschaftet),<br>
        Rodelverleih direkt bei der Feldringalm, verkehrsfrei.<br>
        Gehzeit ca. 1 h auf der Rodelbahn<br><br>
        <strong>Rodelbahn Sautens - leicht</strong><br>
        Beleuchtete 1,5 km lange Rodelbahn am Ortsrand von Sautens Richtung Haderlehn.<br>
        Gehzeit ca. 45 min.<br><br>

        Weitere Rodelbahnen im Ötztal und Infos finden Sie <a href="https://www.oetztal.com/de/aktivitaeten/winter/rodeln" rel="noopener noreferrer" target="_blank">hier</a>.
      `
    },
]

function Winter() {
    return (
        <div id="winter">
            <Header title="Aktivitäten im Winter"/>
            <div className="grid-text_wide">
                {activities.map((activity, i) => (
                    <Expandable
                        key={i}
                        title={activity.title}
                        image={activity.image}
                        description={activity.description}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Winter;
