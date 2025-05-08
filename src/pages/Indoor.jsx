import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/indoor/naturparkhaus.jpg";
import Expandable from '../components/expandable/Expandable';
import Aquadome from "../assets/images/indoor/Aquadome.jpg";
import Area47 from "../assets/images/indoor/Area47-Indoor.jpg";
import Bergsteigerkapelle from "../assets/images/indoor/Bergsteigerkapelle.jpg";
import Brauerei from "../assets/images/indoor/Brauerei.jpg";
import Freizeitarena from "../assets/images/indoor/Freizeitarena.jpg";
import Heimatmuseum from "../assets/images/indoor/Heimatmuseum.jpg";
import Kunstschmiede from "../assets/images/indoor/Kunstschmiede.jpg";
import Naturpark from "../assets/images/indoor/Naturpark-oetztal.jpg";
import naturparkhaus from "../assets/images/indoor/naturparkhaus.jpg";
import Schnapsbrennen from "../assets/images/indoor/Schnapsbrennen.jpg";
import TopMountain from "../assets/images/indoor/TopMountain.jpg";
import Turmmuseum from "../assets/images/indoor/Turmmuseum.jpg";


const activities = [
    {
      title: 'Turmmuseum Oetz',
      image: Turmmuseum,
      description: `
        <strong>Wo sich Tal-Kunst türmt</strong><br>
        Imposant steht das Turmmuseum Oetz inmitten des historischen Ortskerns. Ein Blickfang, der dank seiner Architektur kaum zu übersehen ist. Um nichts weniger beeindrucken wird dich das „Innenleben“ des Museums, das zum Ensemble der Ötztaler Museen gehört. Die Sammlung umfasst knapp 5.000 Objekte, die abwechselnd immer wieder zu sehen sind. Im Fokus steht dabei das künstlerische Schaffen in der Region.
      `
    },
    {
      title: 'Das Heimat- und Freilichtmuseum in Längenfeld',
      image: Heimatmuseum,
      description: `
            Das Ensemble rund um das Heimatmuseum im Längenfelder Ortsteil Lehn stellt eine einzigartige Dokumentation der Ötztaler Kultur- und Alltagsgeschichte dar. Als einer der letzten in beinah ursprünglichen Zustand erhaltenen Dorfkerne des Tales vermittelt das Museumsareal mit seinen historischen Gebäuden - und integriert inmitten ganzjährig bewohnter Einfamilienhäuser - die Sozial- und Wirtschaftsgeschichte des Tales wie kein anderes Ensemble im Tal:<br>
            Weitgehend zaunlos liegen die Grundstücke nebeneinander, ehemals wichtige funktionale Orte wie etwa der Backofen oder der Brunnen im Zentrum wurden von mehreren Familien geteilt. Als Ende der 1960er die Jahrhunderte alten Häuser schließlich nicht mehr dem Wohnstandard entsprachen wurden erste Gebäude vom Ötztaler Heimatverein erworben und zum Museum umgestaltet. Das Museum dokumentiert die historische bäuerliche Kultur des Tales.
        `
    },
    {
      title: 'Die Kunst des Schnapsbrennens in Sautens',
      image: Schnapsbrennen,
      description: `
            Lass dich in die Geheimnisse des Schnapsbrennens einweihen. Langjährige Erfahrung des Brennmeisters in Aufbereitung und Vergärung der Maische ist die Basis ausgezeichneter Edelbrände. Mit modernster Technik, großer Sorgfalt und nach traditioneller Art im Kupferkessel werden feinste Früchte von höchster Güte zu besonderen Edelbränden destilliert.<br>
            Zum Abschluss genießt du eine Variation echter Tiroler Tradition. Schmecke die Reinheit der Frucht und wähle aus unserem großen Sortiment an prämierten Edelbränden. (nur für Erwachsene)
        `
    },
    {
      title: 'AREA47 - Indoor Bikepark',
      image: Area47,
      description: `
        Die Bike-Götter muss es wohl wirklich geben, denn sie haben deine Wünsche erhört. Im neuen Indoor-Bikepark im Ötztal kannst du nun bei Wind und Wetter mit deinen Bike-Skills angeben oder sie verbessern und dich auf die Outdoor-Trails vorbereiten. Die neue Bike-Halle ist perfekt für alle Levels und das ganze Jahr über geöffnet.<br><br>
        Facts:<br>
        •	Erster & einziger Indoor Bikepark Österreichs<br>
        •	1.000 m² Pumptrack inkl. Kids-Pumptrack<br>
        •	140 m dirty Flowline mit zwei Lines<br>
        •	Skills-AREA mit Wurzelteppich, Rock-Garden, Drops und Spitzkehren<br>
        •	Chill-out AREA<br>
        •	Bike- & Equipmentverleih
        `
    },
    {
      title: 'Eindrucksvolle Schmiedekunst',
      image: Kunstschmiede,
      description: `
        <strong>Anbieter</strong>: Alte Dorfschmiede Niederthai<br>
        Die Schmiedekunst ist ein uraltes Handwerk aus der Region und immer noch von großer Bedeutung. Bei der Führung durch die Alte Dorfschmiede in Niederthai erfährst du alles über die richtige Technik, denn mit viel Können und Talent lassen sich Rohstoffe wie Kupfer, Eisen oder Edelmetalle zum kunstvollen Bedarfsgut formen. Daneben verfügt die Dorfschmiede auch über eine Münzprägung - hier entstehen wahre Erinnerungsstücke.
        `
    },
    {
      title: 'Naturparkhaus Längenfeld',
      image: naturparkhaus,
      description: `
        <strong>Ötztaler Naturvielfalt zum Anfassen</strong><br>
        Du willst alles über die Ötztaler Fauna und Flora erfahren? Im Naturparkhaus in Längenfeld findest du alles, was du darüber wissen musst. Die multimediale und naturkundliche Ausstellung bringt dir auf 300 m² die Ötztaler Naturvielfalt näher, wobei das Thema Wasser einen besonderen Stellenwert einnimmt. Danach wirst du mit noch offeneren Augen durch das Ötztal gehen und kannst mit dem neuen Wissen bei den Daheimgebliebenen angeben. 
        `
    },
    {
      title: 'AQUA DOME Tirol Therme Längenfeld',
      image: Aquadome,
      description: `
        Inmitten der atemberaubenden Ötztaler Natur, umringt von der stillen Erhabenheit der Berge, schafft der AQUA DOME eine Atmosphäre, die Wellness neu definiert. Ein Ort der Ruhe, umgeben von der beeindruckenden Bergwelt des Ötztals. Lassen Sie den Alltag hinter sich und genießen Sie einen Tag voller Wellness! Badespaß auch für die Kleinen garantiert.
        `
    },
    {
      title: 'Freizeitarena Sölden',
      image: Freizeitarena,
      description: `
        Während die Kleinen im 32°C warmen Kinderbecken planschen, entspannen die vielleicht müden Sportlermuskeln der Eltern an den Massagedüsen. In der Freizeitarena Sölden fühlen sich groß und klein wohl. Zu entdecken gibt es für die Kleinen ein großes & warmes Kinderbecken mit Rutsche, eine Spielecke, ein Wildwasserkanal und einen Blubberboden. Die „Großen“ entspannen sich zwischenzeitlich im Dampfbad, der Infrarotkabine, der Felsengrotte mit Massagedüsen, den Sprudelliegen oder im Relax-Wintergarten. Alles in allem eine tolle Alternative bei schlechtem Wetter für Groß und Klein.        `
    },
    {
      title: 'Ötztaler Bierkult(ur)',
      image: Brauerei,
      description: `
        <strong>Anbieter</strong>: Bäckelar Brewery GmbH<br>
        Auf in die Bäckelar Brewery! Entdecke Söldens einzige Privatbrauerei bei einer Führung inkl. Bierverkostung.<br>
        Jeden Freitag gibt es beim wöchentlichen Rampenverkauf nicht nur das gesamte sölsch Sortiment samt saisonaler Special Editions und Merchandise Produkte, sondern auch exklusive Einblicke hinter die Brauereikulissen. Mit einem frisch gezapften Verkostungsbier geht es bei der einstündigen Besichtigung u.a. in Sudhaus und Gärkeller sowie den stylischen Gastrobereich. Du erfährst außerdem alles Wissenswerte rund um das regionale Qualitätsprodukt - vom Einmaischen bis zum Abfüllen. Und das vom Braumeister höchstpersönlich. EH KLÅR!
      `
    },
    {
      title: 'Naturpark Ötztal - Infopoint Hohe Mut, Gurgl | Gletscher & Hochgebirgsforschung',
      image: Naturpark,
      description: `
        Auf 2.670 m im Souterrain der Hohen Mut Alm befindet sich diese 135 m2 große, interaktive Naturpark-Ausstellung. Ein Blick genügt, um das hier omnipräsenten Thema „Gletscher“ zu spüren. Die visuellen Eindrücke werden in der Ausstellung geschickt mit Infos zur Gletscherforschung und der hochalpinen Tier- und Pflanzenwelt verknüpft. Exklusive Exponate, wie ein versteinertes Steinbockhorn, erweitern das Spektrum und ein echter „Minigletscher“ kühlt erhitzte Gemüter.
      `
    },
    {
      title: 'Top Mountain Motorcycle Experience',
      image: TopMountain,
      description: `
        Über 500 historische Motorräder von mehr als 150 verschiedenen Herstellern, sowie einige automobile Raritäten erzählen auf 4.500 m² ihre Geschichte. Neben Motorrädern aus aller Welt, wird den Besuchern auch die Motor-Experience durch zahlreiche neue Gadgets spürbar nähergebracht. Und als wäre das noch nicht genug werden außerdem regelmäßig themenverwandte Sonderausstellungen präsentiert.<br>
        Motorcycle Experience World mit 4D-Kino.
      `
    },
    {
      title: 'Bergsteigerkapelle Vent',
      image: Bergsteigerkapelle,
      description: `
        <strong>Von der Kunst der Berge</strong><br>
        Vor oder nach einer Bergtour in Vent führt kein Weg an der Bergsteigerkapelle vorbei. Die einstige Totenkapelle für verunglückte Bergsteiger dient dir heute als Kraftort zum Innehalten und Verweilen und begeistert dabei mit einer bewegten Historie. Fotoausstellungen des Naturpark Ötztal, aber auch themenspezifische Ausstellungen finden in den steinernen Gemäuern einen denkwürdigen Platz.
      `
    }
]

function Indoor() {
    return (
        <div id="indoor">
            <Header title="Indoor-Aktivitäten"/>
            <div className="grid-text_wide">
                <h3>Wind- und Wetterprogramm</h3>
                <p>Du siehst die Berge vor lauter Nebel nicht? Kein Grund zur Sorge - es gibt schließlich kein schlechtes Wetter, nur schlechte Kleidung. Nichtsdestotrotz kannst du dem Wetter zum Beispiel im <strong>Indoor-Bikepark der AREA 47</strong> ein Schnippchen schlagen und dich so auf dein nächstes Outdoor-Abenteuer vorbereiten. Oder du begibst dich auf <strong>Entdeckungstour</strong> und nutzt den Tag zum Genießen: Von <strong>Kunst bis Kultur</strong>, von <strong>Wellness bis Kulinarik</strong> - unser Schlechtwetterprogramm ist echt <i>scheäne</i>.</p>
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

export default Indoor;
