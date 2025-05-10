import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/skigebiet-hochoetz.jpeg";
import Expandable from '../components/expandable/Expandable';
import HerzJesu from "../assets/images/traditions/HerzJesu.jpg";
import Prozession from "../assets/images/traditions/Prozession.jpg";
import Almabtrieb from "../assets/images/traditions/Almabtrieb.jpg";
import Bergmesse from "../assets/images/traditions/Bergmesse.jpg";
import Krampus from "../assets/images/traditions/Krampus.jpg";
import Handwerk from "../assets/images/traditions/Handwerk.jpg";
import Markttage from "../assets/images/traditions/Markttage.jpg";
import GelebteTradition from "../assets/images/traditions/GelebteTradition.jpg";

const activities = [
    {
          title: 'Herz-Jesu-Feuer',
          image: HerzJesu,
          description: `
            Die Feuer dienen als sichtbare Zeichen der Verbundenheit mit der Heimat und erinnern an vergangene Widerstände.<br>
            Das Herz-Jesu-Feuer ist eine besondere Tradition im Ötztal, die tief in der katholischen Volksfrömmigkeit verwurzelt ist. Es handelt sich dabei um ein Feuer, das am Herz-Jesu-Fest, das am ersten Samstag nach Pfingsten gefeiert und auf Berggipfeln und anderen gut sichtbaren Anhöhen entzündet wird. Hinter diesem Brauch steckt die Verehrung des Herzens Jesu, das als Symbol für die Liebe und das Mitgefühl Christi gilt und auf das Herz-Jesu-Gelöbnis von 1796 zurückführt, als Tirol das Land dem Herzen Jesu weihte. Das Feuer soll die Liebe Jesu symbolisieren und die Gemeinschaft stärken und wir in Oetz zudem mit einer feierlichen Prozession gefeiert.
          `
    },
    {
          title: 'Herz Jesu Platzkonzert der Musikkapelle Oetz',
          image: Prozession,
          description: `
            Traditionelles Konzert der Musikkapelle Oetz mit Aussicht auf die "Herz-Jesu-Bergfeuer". Für Speis und Trank ist natürlich auch gesorgt.<br>
            <strong>Religiöse Fest und Prozessionen</strong> wie z.B. der Kirchtag in Oetzerau (Mitte Juni) aber auch in Oetz zu Herz-Jesu oder auch zu Fronleichnam.<br>
            Im malerischen Weiler Ötzerau wird jedes Jahr Mitte Juni ein besonderes Ereignis gefeiert - die Kirchtagsprozession. Dieses traditionelle Fest zieht jedes Jahr zahlreiche Einheimische und Besucher an, um die Verbundenheit mit der Heimat und die Pflege alter Bräuche zu zelebrieren. Die Schützenkompanie Oetz spielt dabei eine bedeutende Rolle, indem sie ihre historische Uniform und ihre langjährige Tradition in den Festlichkeiten einbringt.
          `
    },
    {
          title: 'Alm- und Bergfest Hochoetz',
          image: Bergmesse,
          description: `
            In der Almregion Hochoetz findet jährlich Mitte August das traditionelle Alm- und Bergfest statt. Die feierliche Bergmesse beim Roten Wandl (nur ca. 15 Min von der Bergstation entfernt) wird musikalisch umrahmt von der Musikkapelle Oetz. Anschließend gibt es Unterhaltung und zahlreiche Schmankerl auf allen Hütten und Almen. Im Panoramarestaurant Hochoetz (direkt an der Bergstation der Acherkogelbahn) sorgen die  "Ötztaler Alpentornados" für Stimmung.<br>
            Es gibt auch jede Menge Spiel und Spaß für die Kinder mit Hüpfburg, Haflingerreiten, Kinderschminken, Malstation u.v.m. 
          `
    },
    {
          title: 'Almabtriebe',
          image: Almabtrieb,
          description: `
            In vielen Orten in Tirol gibt es im Herbst Almabtriebe, bei denen das Vieh vom Sommeraufenthalt auf den Almen zurück in die heimischen Ställe kehrt. Kein Wunder: In den Bergen Tirols liegen über 2.100 Almen, auf denen mehr als 100.000 Rinder, 70.000 Schafe und 5.000 Ziegen übersommern. Es muss nicht immer Kuh, sondern darf gerne auch Schaf sein. Besonders spektakulär ist der Schaftrieb im hinteren Ötztal.<br><br>
            <strong>Schaftrieb „Transhumanz“ in Vent</strong><br>
            Der Schaftrieb über den Ötztaler Alpenhauptkamm ist eine spezielle Form der grenzüberschreitenden Weidewirtschaft im Alpenraum. Schafhalter aus dem Vinschgau und Passeier im italienischen Südtirol nutzen auf diese Weise ihre althergebrachten Weiderechte im hinteren Ötztal in Österreich. Dazu werden aktuell jährlich bis zu 3.500 Schafe und Ziegen über drei verschiedene Passrouten (z.B. über das 3.019 m hohe Niederjoch) Anfang Juni in nördliche (von Südtirol ins Ötztal) und Mitte September in Gegenrichtung getrieben.<br>
            Diese grenzüberschreitende Transhumanz, wie dieser Viehtrieb auch heißt wurde 2011 in Österreich als immaterielles Kulturerbe der UNESCO anerkannt.<br><br>
            <strong>Schafschoad Oetz</strong><br>
            Etwas kleiner und nicht ganz so spektakulär, dennoch sehenswert ist der Almabtrieb der Schafe und Ziegen in Oetz im September. Rund 300 Schafe und Ziegen kehren nach einem hoffentlich unfallfreien Sommer rund um den Acherkogel ins Tal zurück. Die Schafe werden bei der „Schafschoad“ dann noch von ihrer Wolle befreit.<br><br>
            <strong>Almabtrieb Zwieselstein</strong><br>
            Gelebte Tradition und zugleich ein farbenprächtiges Spektakel:
            Der Almabtrieb in Zwieselstein ist eines jener besonderen Feste, das bäuerlichen Brauchtum für Einheimische und Gäste auf beeindruckende Art und Weise zeigt. Nachdem sich die Kühe den ganzen Sommer am saftigen Gras der Almwiesen erfreut haben, heißt es für die Nutztiere jeden September beim Almabtrieb „Zurück ins Tal“!<br>
            Festlich geschmückt mit bunten Blumen und Glocken ziehen sie von den Sommer-Almen hinab - ein großer Auftritt, der jedes Jahr zahlreiche Besucher begeistert. Die Rückkehr der Tiere wird auch mit kulinarischen Spezialitäten und Live-Musik zelebriert.<br>
            Der Almabtrieb in Zwieselstein ist ein einzigartiges Spektakel, ein schönes Beispiel für gelebten Brauchtum und Tradition.<br><br>
            Im Tiroler Oberland werden noch zwei weitere und bekannte Almabtiebsfeste gefeiert:<br><br>
            <strong>Schafschied Tarrenz</strong><br>
            Alljährlich am zweiten Sonntag im September feiert ganz Tarrenz die Heimkehr von 1000 Schafen und Lämmern mit einem großen Volksfest. Der Tarrenzer Schafschied zählt zu den größten und idyllischsten Almabtrieben im Tiroler Oberland.<br><br>
            <strong>Schafschoad Nassereith</strong><br>
            Der alljährliche Almabtrieb der Schafe von der Loreaalm ist ein sehenswertes Spektakel. Die Tiere ziehen über den Postplatz in Richtung Reitstall Mang. Die Heimkehr der Vierbeiner wird mit Musik, Stimmung und Schmankerln gefeiert. Im Tal müssen die Schafe dann „Haare lassen“, Interessierte haben die Möglichkeit, einem Schafscherer bei seinem Handwerk über die Schulter zu schauen. Am Vormittag findet das Frühshoppen und zu Mittag die Schafschoad statt.
            `
    },
    {
          title: 'Markttage im Ötztal',
          image: Markttage,
          description: `
            <strong>Oetzer Markt</strong><br>
            Jährlich heißt es im Oktober auch wieder „Es ist wieder soweit!“ Der alljährliche Markt im Oetzer Zentrum baut wieder seine Standln auf! Von Spielzeug und Kleidung über tradionelle Handwerksstücke bis hin zu Genussstandln, verschiedenste Verkaufsstände laden zum Verweilen ein.<br><br>
            <strong>Haiminger Markttage</strong><br>
            Der Weg zum guten Geschmack führt über die Haiminger Markttage.<br>
            Flanieren, Probieren und Genießen - genau das können tausende Besucher auf dem größten Tiroler Erntemarkt erleben. In der familiären Atmosphäre der Haiminger Markttage können frische und natürliche Produkte aus der Region probiert und - direkt vom Produzenten/Erzeuger - gekauft werden. Für musikalische Unterhaltung ist auch gesorgt.
            `
    },
    {
          title: 'Alte Handwerkskunst',
          image: Handwerk,
          description: `
            <strong><i>„Der, der mit seinen Händen arbeitet, ist ein Arbeiter.<br>
            Der, der mit seinen Händen und mit seinem Kopf arbeitet, ist ein Handwerker.<br>
            Der, der mit seinen Händen, seinem Kopf und seinem Herzen arbeitet, ist ein Künstler. - Franz von Assisi“
            </i></strong><br>
            Das Bewahren traditioneller Handwerkskünste ist im Ötztal ebenfalls sehr wichtig. Diese Traditionen tragen dazu bei, die kulturelle Identität des Ötztals zu bewahren und den Besuchern einen Einblick in die lebendige Tiroler Kultur zu geben.<br>
            Hier eine kleine Übersicht:<br><br>
            <strong>Schafwollzentrum Umhausen</strong> <a href="https://www.schafwollzentrum.tirol" rel="noopener noreferrer" target="_blank">(www.schafwollzentrum.tirol)</a><br>
            Das Ötztaler Schafwollzentrum in Umhausen ist ein traditionsreicher Handwerksbetrieb, der sich auf die Verarbeitung von regionaler Schafwolle spezialisiert hat. Seit 1938 wird hier in dritter Generation hochwertiges Handwerk gepflegt. Unter der Leitung von Joachim Regensburger entstehen aus der Wolle der Tiroler Berg- und Steinschafe vielfältige Produkte, die sowohl funktional als auch ästhetisch überzeugen.<br><br>
            <strong>Ötztaler Kunstschmiede</strong> <a href="https://www.die-kunstschmiede.at" rel="noopener noreferrer" target="_blank">(www.die-kunstschmiede.at)</a><br>
            <i>Vom lebenswichtigen Dorfschmied ...</i><br>
            Die einstige Dorfschmiede in Umhausen, Urgroßvater Otto und Großvater Anton Praxmrer, fertigten Nägel, beschlugen Pferde, reparierten Wägen und Räder oder dengelten Sensen.
            Heute sind Ihre Werkzeuge immer noch im Einsatz. Hinzugekommen sind einige moderne Arbeitsmitten und Maschinen, die die beiden Meister Peter und Tobias - Nachfahren der dritten und vierten Generation - perfekt beherrschen.<br>
            <i>... zu versierten Kunstschmieden ...</i><br>
            Schwerpunkt der klassischen Schmiedearbeiten sind heute handgearbeitet Grabkreuze und Restraurierungen sowie Geländer, Gitter und Tore aus Eisen, Edelstahl und Messing.<br>
            <i>... zur versierten Kunstschmiede</i><br>
            Schwerpunkte der klassischen Schmiedearbeiten sind heute handgearbeitete Grabkreuze und Restaurierungen sowie Geländer, Gitter und Tore aus Eisen, Edelstahl und Messing.<br><br>
            <strong>Holzschnitzerei</strong> <a href="https://www.krippen-figuren.at" rel="noopener noreferrer" target="_blank">(www.krippen-figuren.at)</a><br>
            Die Holzschnitzerei Neurauter ist Ihr Fachgeschäft für ausgesuchte Holzschnitzereien - wertvoll und zeitlos. Lassen Sie sich verzaubern von der Schönheit unserer Figuren und dem lebendigen Material Holz. Von exklusiven Krippenfiguren von Angela Tripi über ausgewählte Geschenkartikel und Souvenirs, finden Sie hier für jeden Geschmack etwas.<br>
            Zahlreiche geschnitzte Krippenfiguren können zudem bei der jährlichen <strong>Krippenausstellung in Oetz</strong> bestaunt und bewundert werden. Einen Höhepunkt im Arbeitsjahr stellt die alljährliche Krippenausstellung des Krippenbauvereins am 1. Adventsonntag im Saal „Ez“ in Oetz dar, bei der jährlich neue Kreationen von traditionellen bis zu orientalischen Grippen präsentiert werden.
            `
    },
    {
          title: 'Krampustreiben im Ötztal',
          image: Krampus,
          description: `
            <strong>Krampusbrauch im Ötztal</strong> - Höllisches Treiben mit großer Tradition<br>
            Seit vielen Jahren ist das Krampustreiben hier bei uns im Ötztal Brauch. Als Begleiter des Hl. Nikolaus spielen die dunklen Gefährten eine sehr wichtige Rolle. Auch der Knecht Ruprecht darf natürlich auch bei unserem Nikolaus nicht fehlen.<br>
            Die zahlreichen Tuiflgruppen im Ötztal bemühen sich jedes Jahr, höllische Shows zu veranstalten und bereiten sich bereits im Frühjahr wieder auf das teuflische Treiben vor. Von den Ötztaler Feuerteufeln bis hin zu den Haiminger Krampussen gibt es viele verschiedene Gruppen, die die Zuschauer jedes Jahr aufs neue Begeistern.
            `
    },
    {
          title: 'Gelebte Tradition bei uns am Wieserhof',
          image: GelebteTradition,
          description: `
            Auch wir am Wieserhof halten im Jahresverlauf an vielen verschiedenen großen und kleinen Traditionen fest. Diese reichen vom Besuch der Sternsinger am Jahresanfang, dem traditionellen Räuchern von Speck zu der vorösterlichen Fastenzeit, der Osterzeit selber zu dieser für die Kinder Palmlatten gebunden werden. Aus dieser Tradition entstand ein Jahrhundertlanger Wettstreit, wer die längste Palmlatte hat. Diese können bis zu 30 Meter lang sein. Aber auch das Ostereier färben und Osterlamm backen gehört zur Osterzeit selber.<br>
            Der Herbst beginnt mit der Obsternte und dem „einmaischen“ der Äpfel und Birnen für das Schnaps brennen, bevor die Adventszeit mit den Kampusläufen eingeläutet wird.<br>
            Adventskranz binden und der Besuch vom Nikolaus & den Krampus verkürzt die Wartezeit bis auf Weihnachten, wo die traditionellen Christbäume natürlich auch nicht fehlen dürfen.<br>
            Zum Jahresende wird um den Jahreswechsel dann gerne noch der Schnaps gebrannt.<br>
            Gerne laden wir Euch ein, je nach Saison die eine oder andere Tradition bei uns am Hof kennen zu lernen und miterleben zu dürfen.
            `
    }
]

function Oetztal() {
    return (
        <div id="oetztal">
            <Header title="Das Ötztal<br>Natur und Aktiv" image={HeaderImage} alt="Skigebiet Hochoetz"/>
            <div className="grid-text_wide">
                <h2>Die Region</h2>
                <p>Das Ötztal ist eine beeindruckende Region in Tirol, Österreich. Es erstreckt sich über eine Fläche von etwa 1.445 Quadratkilometern, ist 65 km lang und damit eines der größten Täler in Tirol. Es sich reicht von Sölden im Süden bis nach Oetz im Norden. Die Region ist bekannt für ihre atemberaubende Berglandschaft, die von den Gipfeln der Ötztaler Alpen geprägt ist.</p>
                <p>Insgesamt leben in diesem Gebiet ungefähr 25.000 Menschen, die die Region mit ihrer Gastfreundschaft und ihrem Engagement lebendig halten. Das Ötztal liegt im Westen Österreichs und ist durch seine Lage im Alpenraum geprägt. Es ist von hohen Bergen umgeben, darunter der bekannte Acherkogel (3.007 m) und der Wildspitze (3.768 m), der zweithöchste Berg Tirols.</p>
                <p>Das Tal ist ein beliebtes Reiseziel für Natur- und Bergliebhaber, sowohl im Sommer als auch im Winter. Es bietet eine Vielzahl von Freizeitmöglichkeiten, von Wandern und Mountainbiken bis hin zu Skifahren und Snowboarden. Kurz gesagt, das Ötztal ist eine beeindruckende und vielfältige Region, die durch ihre Größe, ihre Einwohner und ihre Lage in den Tiroler Alpen geprägt ist. Es ist ein Ort, der Natur, Abenteuer und Tiroler Gastfreundschaft perfekt verbindet.</p>
                <p>Der Wieserhof Tirol liegt im vorderen Teil des Ötztals, in der Gemeinde Oetz, der erste, wunderschöne Ort im Tiroler Ötztal,  der sich perfekt für einen erholsamen und abwechslungsreichen Urlaub eignet. Eingebettet in die beeindruckende Bergwelt, bietet Oetz und insbesondere der Ortsteil Oetzerau auf gut 1.000m Seehöhe eine perfekte Mischung aus Natur, Aktivitäten und gemütlicher Atmosphäre.</p>
                <p>Im Sommer kannst du hier die frische Bergluft bei Wanderungen auf gut ausgeschilderten Wegen genießen. Besonders beliebt sind Ausflüge zum Piburger See, einem der schönsten Naturseen Tirols, der mit seinem türkisblauen Wasser zum Baden und Entspannen einlädt. Für Abenteuerlustige gibt es auch Möglichkeiten zum Klettern, Mountainbiken, Raften, Canyoning oder Paragliding. Nach einem aktiven Tag kannst du in den charmanten Cafés und Restaurants die regionale Tiroler Küche probieren.</p>
                <p>Im Winter verwandelt sich Oetz in ein kleines Winterwunderland. Die Region bietet Zugang zum Familienski- und Wandergebiet Hochoetz-Kühtai, das sowohl für Anfänger als auch Fortgeschrittene geeignet ist. Auch Langlaufen, Schneeschuhwandern und Rodeln sind beliebte Aktivitäten, um die winterliche Landschaft zu erkunden. Nach einem Tag im Schnee kannst du dich in einer der gemütlichen Unterkünfte entspannen und die alpine Atmosphäre genießen.</p>
                <p>Oetz ist also ein idealer Ort für alle, die Natur, Abenteuer und Erholung miteinander verbinden möchten. Es ist ein Ort, der sowohl im Sommer als auch im Winter viel zu bieten hat und sicherlich für schöne Erinnerungen sorgt.</p>
                <h2>Die Tradion im Ötztal bzw. im Tiroler Oberland</h2>
                <p>Das Ötztal ist eine Region mit einer reichen Tradition, lebendigen Bräuchen und erlebnisreichen Veranstaltunen, die das kulturelle Leben prägen. Hier sind einige der wichtigsten Traditionen und Veranstaltungen im Ötztal:</p>
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

export default Oetztal;
