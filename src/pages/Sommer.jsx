import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Area47 from "../assets/images/sommer/Area47.jpg";
import Biken from "../assets/images/sommer/Biken2.jpg";
import Canyoning from "../assets/images/sommer/Canyoning.jpg";
import Klettergarten from "../assets/images/sommer/Familienklettergarten.jpg";
import Klettern from "../assets/images/sommer/Klettern.jpg";
import Innsbruck from "../assets/images/sommer/Innsbruck.jpg";
import Paragliding from "../assets/images/sommer/Paragliding.jpg";
import Piburgersee from "../assets/images/sommer/Piburgersee.jpg";
import Rafting from "../assets/images/sommer/Rafting.jpg";
import Pferde from "../assets/images/sommer/Pferde.jpg";
import Wandern from "../assets/images/sommer/Wandern.jpg";
import Expandable from '../components/expandable/Expandable';

const activities = [
    {
      title: 'Action & Fun',
      image: Area47,
      description: 'Das Ötztal steht nicht nur für beschauliche Ruhe und magische Naturerlebnisse. Hier geht auch richtig die Post ab, beispielsweise beim Rafting, Canyoning oder Kajakfahren auf der Ötztaler Ache. Wem das zu nass ist, findet seine Herausforderung bestimmt in einem der professionellen Parcours in den Kletter- und Hochseilgärten von Sautens und Längenfeld. Flying Foxes (Seilrutschen) und Tandem-Paragliding bringen jede Menge Nervenkitzel und erfüllen so manchen Traum vom Fliegen.'
    },
    {
      title: 'Canyoning',
      image: Canyoning,
      description: 'Vom Einsteiger zum Fortgeschrittenen: Zwei der schönsten Canyoning Touren erleben und jede Menge Erfahrung sammeln. Bei der Einsteiger Tour noch alles „Easy“ werdet ihr auf jedenfall bestens vorbereitet auf die schwerere Canyoningtour Untere Auerklamm.  Die tief ins Urgestein eingeschliffene Auerklamm zeichnet sich besonders durch ihre einzigartige Kombination aus Rutschen, Sprüngen und Abseilstellen ohne längere Gehpassagen aus. In dieser Tour ist alles möglich aber nichts ein Muss.  Also wer hat Lust auf ein unvergessliches Abenteuer?'
    },
    {
      title: 'E-Bike & Mountainbiken',
      image: Biken,
      description: `
        Von leichten Strecken bis zu anspruchsvollen Mountainbike-Touren:
        Das E-Bike, also das Fahrrad mit elektrischer Antriebshilfe, ist eine tolle Unterstützung für all jene, die die gebirgigen Ötztaler Rad- und Almwege auf zwei Rädern erkunden wollen.
        Ausgestattet mit Karten und Tipps starten Sie so auf eine Entdeckungstour Ihrer Wahl.<br><br>
        Hier eine Auswahl an Bike Verleih Shops in Oetz:<br>
        Age Sport, Hauptstr. 61, 6433 Oetz<br>
        Bike Center, Piburger Str. 6, 6433 Oetz
        `
    },
    {
      title: 'Familie & Kinder',
      image: Klettergarten,
      description: `
        Widi kam, sah und siegte!<br>
        <strong>Unvergesslicher Familienurlaub im Ötztal</strong><br>
        Überall dort, wo WIDI, das Maskottchen des Ötztal Tourismus zu sehen ist, ist Spaß für den Nachwuchs garantiert. WIDI begleitet Familien auf Themenwanderwegen rund um Oetz oder im Widiversum Hochoetz, wo es einen Zauberkristall zu finden gibt.
        Betreutes Kinderprogramm in Widis Kinderclub, der Bergwerk-Abenteuerspielpark KIDS PARK in Oetz, zahlreiche Spielplätze im Ötztal, Streichelzoos, Badespaß am Piburger See, angeln, raften, das Oetzi-Dorf in Umhausen, WIDI'S Kinderclub<br><br>
        <strong>WIDI'S Kidspark in Oetz</strong> - Auf den Spuren der Knappen<br>
        Im WIDI'S Kids Park in Oetz, direkt neben dem örtlichen Schwimmbad gelegen, können sich die „kleinen Knappen" bei der „Eisen- und Schlägel-Schaukel" oder der „Goldwaagen-Wippe" so richtig austoben oder sich bei der „Goldschürf-Anlage" auf Entdeckungsreise begeben. Mit 5.000 Quadratmetern einer der größten Spielplätze in Tirol und der größte kostenlose Spielplatz im Ötztal<br><br>
        <strong>Widiversum</strong><br>
        Der Abenteuerpark "Widiversum" in der Almenregion Hochoetz mit verschiedenen Rätseln und Attraktionen, sind Ihre Kinder bestens unterhalten.<br><br>
        <strong>Waldspielplatz Ochsenbrunnen</strong><br>
        In Ochsengarten ist ein toller Themenspielplatz mit vielen Spielgeräten aus Holz.<br><br>
        <strong>Zauberwald Sauens</strong><br>Tierischer Themenweg mit Aussichtsplattform und kleinem Waldspielplatz<br><br>
        <strong>Greifvogelpark Ötztal</strong><br>
        Auf dem rund 5.000 m² großem Areal am Fuße von Tirols größtem Wasserfall können Sie Greifvögel hautnah erleben.<br><br>
        <strong>Ötzidorf</strong><br>
        Der archäologische Freizeitpark in Umhausen soll das Leben, Wohnen und Wirtschaften der Menschen in der Jungsteinzeit - der Zeit Ötzis - veranschaulichen. 
        `
    },
    {
      title: 'Klettern und Bergsteigen',
      image: Klettern,
      description: `
        Alles da: Von Kletterkursen bis zu herausfordernden Routen.<br>
        250 Berge mit über 3.000 Höhenmetern säumen das Ötztal - unter ihnen der höchste Berg Tirols, die Wildspitze mit 3.774 Metern. Aber auch der Hausberg von Oetz, der Acherkogel kann sich mit exakt 3.007 Metern sehen lassen.<br>
        In Tirol bestand immer schon die Sehnsucht, diese vielen Gipfel auch zu erklimmen. So hat sich das Ötztal zum Paradies für alle Berg- und Klettersportfreunde entwickelt. Hier gibt es allein 10 Klettersteige und 20 Klettergärten - einer davon befindet sich direkt in Oetz, 750 Routen und zahlreiche Mehrseillängen.<br>
        Bei Schlechtwetter können Kletterfans in die Kletterwand der Area 47 oder in die Kletterhalle nach Imst ausweichen. Für hochalpine Bergtouren empfehlen wir die Begleitung von <a href="https://www.oetztal.com/bergfuehrer" rel="noopener noreferrer" target="_blank">Bergführern aus dem Ötztal</a>.
        `
    },
    {
      title: 'Kultur & Ausflugstipps',
      image: Innsbruck,
      description: `
        Die geschichtlichen Spuren, die im Ötztal zu finden sind, reichen bis in das 8. Jahrtausend vor Christus zurück. Dies belegt der Hohle Stein in Vent, dessen Funktion als steinzeitliche Jägerstation von Archäologen der Universität Innsbruck bestätigt wurde.<br>
        Das Turmmuseum in Oetz, die Rofenhöfe in Vent und das Heimatmuseum in Längenfeld liefern weitere Eindrücke vom einstigen Leben im Ötztal.<br>
        Die Tiroler Landeshauptstadt Innsbruck ist nur eine Dreiviertelstunde mit dem Auto entfernt. In die Kristallwelten nach Wattens brauchen Sie etwa zwanzig Minuten länger.<br>
        Atemberaubende Höhepunkte im Ötztal sind der Stuibenfall in Umhausen - Tirols höchster Wasserfall und der Aussichtspunkt Rotes Wandl am Acherkogl, das "Seejöchl" und die "Kanzel" am Piburger See und das Ebele in Oetz. Wem das noch nicht genug ist, der kann auch noch einen Abstecher in das hintere Ötztal machen und den Top Mountain Star oder die Hohe Mut Alm besuchen.<br><br>
        <strong>Turmmuseum Oetz</strong><br>
        Erfahren Sie mehr über die Region Ötztal in Form von aufwändig aufgearbeitetem Bildmaterial im Oetzer Turmmuseum.<br><br>
        <strong>Stuibenfall</strong><br>
        Der Stuibenfall stürzt 159 Meter in die Tiefe und ist damit Tirols höchster Wasserfall. Deshalb zählt der Stuibenfall zu den bedeutendsten Naturschauspielen des Ötztals und Tirols.<br><br>
        <strong>Passmuseum Timmelsjoch</strong><br>
        Auf 2.491 Meter über dem Meeresspiegel ragt das Museum von der Tiroler auf die Südtiroler Seite und unterstreicht die atemberaubende Landschaft. Erfahren Sie unter welchen Umständen das Timmelsjoch Mitte des 20. Jahrhunderts erschlossen wurde!<br><br>
        <strong>Innsbruck</strong><br>
        Die Landeshauptstadt von Tirol zählt zu den schönsten Städten Europas. Nach nur ca. 45 Minuten Fahrt erreichen Sie Innsbruck und können einen Tag in der wunderschönen Altstadt mit dem "Goldenen Dachl" verbringen.<br><br>
        <strong>Swarovski Kristallwelten</strong><br>
        Erleben Sie in Wattens, etwa 1 1/4 Stunde von Oetz entfernt, die atemberaubende Welt von Swarovski. Lassen Sie sich in den magischen Räumen der Kristallwelten verzaubern.
        `
    },
    {
      title: 'Paragliding',
      image: Paragliding,
      description: `
        Gleitschirm Tandemflug - das ultimative Flugerlebnis!<br>
        Erlebe den Nervenkitzel eines Gleitschirm Tandemflugs bei FlyAirea! Genieße die atemberaubende Aussicht auf das Ötztal, Inntal oder Gurgeltal. Die erfahrenen Tandempiloten bereiten dich vor, und schon kannst du mit ein paar schnellen Schritten abheben. Ob du den Flug entspannt genießen möchtest oder nach Adrenalin suchst, du findest bestimmt das perfekte Erlebnis für dich.<br>
        Buche jetzt deinen Tandemflug bei einem der nachfolgenden Anbieter und erlebe unvergessliche Momente in der Luft!<br>
        <a href="https://www.oetz-air.at" rel="noopener noreferrer" target="_blank">www.oetz-air.at</a><br>
        <a href="https://www.flyairea.com" rel="noopener noreferrer" target="_blank">www.flyairea.com</a>
        `
    },
    {
      title: 'Schwimmen & Abkühlung',
      image: Piburgersee,
      description: `
        Jedem Badeausflug sein Erlebnis - Badeseen und Schwimmbäder im Ötztal<br>
        Ein Badetag ist langweilig? Ganz und gar nicht! Der Piburger See in Oetz - mit bis zu 24°C warmem Wasser einer der wärmsten Badeseen Tirols - liegt inmitten eines Naturschutzgebietes, gilt als Naturjuwel. Ein Badetag am Piburger See lässt sich wunderbar mit Ausflügen zur nahen Wellerbrücke und den Achstürzen kombinieren. Wir empfehlen auch eine idyllische Fahrt mit dem Ruderboot auf diesem traumhaften Gebirgssee.<br>
        Aber es gibt natürlich noch zahlreiche weitere Alternativen im Ötztal, sich im Sommer abzukühlen:<br><br>
        <strong>AQUA DOME Tirol Therme Längenfeld</strong><br>
        Wellness-Tempel mit Thermalquelle.  Tauche ein in eine faszinierende Bade- und Saunalandschaft mit eigener Kindererlebniswelt, trainiere im großzügigen Fitnessbereich für die nächste Bergtour und nutze das facettenreiche (Private-)Spaangebot mit Gipfelblick.<br><br>
        <strong>Area47 - Water Area</strong><br>
        Der 20.000 m² große Wasserpark bietet außergewöhnliche Aktivitäten, die dich adrenalingeladen und klitschnass zurücklassen.<br><br>
        <strong>Erlebnisbad Oetz</strong><br>
        Hier kannst du Längen schwimmen, Köpfler üben, Rutschrekorde aufstellen oder den Kleinen beim Plantschen zusehen. Eis und Pommes vom Kiosk gibts - ganz in Freibad-Manier - natürlich auch.<br><br>
        <strong>Naturbadesee Umhausen</strong><br>
        Erholung und Badespaß für die ganze Familie am Fuß von Tirols größtem Wasserfall. Der Badesee Umhausen, gefüllt mit reinem Trinkwasser (Härtegrad 0), bietet mit seinen großen Liegeflächen eine herrliche Atmosphäre zum Entspannen, Beachvolleyball und Tennis für den Sportspaß zwischendurch, für Kinder einen Spielplatz und einen Sprungturm sowie für alle Genießer italienische Spezialitäten in der Pizzeria.<br><br>
        <strong>Schwimmbad Sautens</strong><br>
        Gemütliches & familienfreundliches Schimmbad am Rande von Sautens mit eigenem Kinderbecken, große Liegewiese, Buffet-Restaurant & zwei Sand-Tennisplätze.
        `
    },
    {
      title: 'Raften',
      image: Rafting,
      description: `
        Komm beim Wildwasser-Rafting im Ötztal in den Fluss deines Lebens! Unsere Guides begleiten dich beim Fight gegen die Fluten in der Ötztaler Ache und Imster Schlucht. So hast du sicher einen Spaß!<br>
        Spür sie. Die Kraft der Natur. Und die Kraft in dir. Teamarbeit ist der Schlüssel, um die sagenhaften Strudel und Stromschnellen in Tirol zu meistern. Bevor wir gemeinsam anreisen, wirst du in der Basis perfekt vorbereitet und eingekleidet. Hier geht's um dich, dein Boot, deine Buddys - und dein Plus an Safety & Service.
        `
    },
    {
      title: 'Reiten',
      image: Pferde,
      description: `
        Das Glück der Erde, liegt auf dem Rücken der Pferde.<br>
        Die Kleinen dürfen dieses Erlebnis gerne auf unserer Miniponystute Nikki erleben. Für die Großen gibt es hier ein paar Anbieter, um die Bergwelt vom Rücken der Pferde aus zu genießen.<br><br>
        <strong>Isi Rider: </strong><a href="https://www.reiten-im-kuehtai.at" rel="noopener noreferrer" target="_blank">www.reiten-im-kuehtai.at</a>, Tel. +43 (0)676 3620 643<br>
        <strong>Reitschule Ötztal: </strong>Gut Kehlerbach. Längenfeld, Tel. +43 (0) 660 3869 408<br>
        <strong>Reitstall Pegasus: </strong>Längenfeld, <a href="https://www.reitstall-pegasus.com" rel="noopener noreferrer" target="_blank">www.reitstall-pegasus.com</a>, Tel. +43 (0) 664 5191 858
        `
    },
    {
      title: 'Wandern',
      image: Wandern,
      description: `
        Alltag, was war das noch mal? Im Vorderen Ötztal wirfst du dich ins Outdoor-Leben, als hättest du nie was anderes getan. Erwandere den versteckten Piburger See bei Oetz, schwebe mit der Seilbahn auf den Erlebnisberg Hochoetz und zeig deiner Familie, wo’s langgeht. Ins interaktive Abenteuerland WIDIVERSUM etwa, auf die Themenwege und umliegenden Almen.<br>
        Oetz und auch das Ötztal bieten Wandererlebnisse für groß und klein sowie für jegliche Ansprüche. Von der Genusswanderung bis hin zur ausgedehnten Bergtour. Hier kommt jeder auf seine Kosten.
        `
    }
  ];

function Sommer() {
    return (
        <div id="sommer">
            <Header title="Aktivitäten im Sommer"/>
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

export default Sommer;
