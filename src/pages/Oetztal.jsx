import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import HeaderImage from "../assets/images/skigebiet-hochoetz.jpeg";

function Oetztal() {
    return (
        <div id="oetztal">
            <Header title="Das Ötztal<br>Natur und Aktiv" image={HeaderImage} alt="Skigebiet Hochoetz"/>
            <div className="grid-text_wide">
                <h3>Die Region</h3>
                <p>Das Ötztal ist eine beeindruckende Region in Tirol, Österreich. Es erstreckt sich über eine Fläche von etwa 1.445 Quadratkilometern, ist 65 km lang und damit eines der größten Täler in Tirol. Es sich reicht von Sölden im Süden bis nach Oetz im Norden. Die Region ist bekannt für ihre atemberaubende Berglandschaft, die von den Gipfeln der Ötztaler Alpen geprägt ist.</p>
                <p>Insgesamt leben in diesem Gebiet ungefähr 25.000 Menschen, die die Region mit ihrer Gastfreundschaft und ihrem Engagement lebendig halten. Das Ötztal liegt im Westen Österreichs und ist durch seine Lage im Alpenraum geprägt. Es ist von hohen Bergen umgeben, darunter der bekannte Acherkogel (3.007 m) und der Wildspitze (3.768 m), der zweithöchste Berg Tirols.</p>
                <p>Das Tal ist ein beliebtes Reiseziel für Natur- und Bergliebhaber, sowohl im Sommer als auch im Winter. Es bietet eine Vielzahl von Freizeitmöglichkeiten, von Wandern und Mountainbiken bis hin zu Skifahren und Snowboarden. Kurz gesagt, das Ötztal ist eine beeindruckende und vielfältige Region, die durch ihre Größe, ihre Einwohner und ihre Lage in den Tiroler Alpen geprägt ist. Es ist ein Ort, der Natur, Abenteuer und Tiroler Gastfreundschaft perfekt verbindet.</p>
                <p>Der Wieserhof Tirol liegt im vorderen Teil des Ötztals, in der Gemeinde Oetz, der erste, wunderschöne Ort im Tiroler Ötztal,  der sich perfekt für einen erholsamen und abwechslungsreichen Urlaub eignet. Eingebettet in die beeindruckende Bergwelt, bietet Oetz und insbesondere der Ortsteil Oetzerau auf gut 1.000m Seehöhe eine perfekte Mischung aus Natur, Aktivitäten und gemütlicher Atmosphäre.</p>
                <p>Im Sommer kannst du hier die frische Bergluft bei Wanderungen auf gut ausgeschilderten Wegen genießen. Besonders beliebt sind Ausflüge zum Piburger See, einem der schönsten Naturseen Tirols, der mit seinem türkisblauen Wasser zum Baden und Entspannen einlädt. Für Abenteuerlustige gibt es auch Möglichkeiten zum Klettern, Mountainbiken, Raften, Canyoning oder Paragliding. Nach einem aktiven Tag kannst du in den charmanten Cafés und Restaurants die regionale Tiroler Küche probieren.</p>
                <p>Im Winter verwandelt sich Oetz in ein kleines Winterwunderland. Die Region bietet Zugang zum Familienski- und Wandergebiet Hochoetz-Kühtai, das sowohl für Anfänger als auch Fortgeschrittene geeignet ist. Auch Langlaufen, Schneeschuhwandern und Rodeln sind beliebte Aktivitäten, um die winterliche Landschaft zu erkunden. Nach einem Tag im Schnee kannst du dich in einer der gemütlichen Unterkünfte entspannen und die alpine Atmosphäre genießen.</p>
                <p>Oetz ist also ein idealer Ort für alle, die Natur, Abenteuer und Erholung miteinander verbinden möchten. Es ist ein Ort, der sowohl im Sommer als auch im Winter viel zu bieten hat und sicherlich für schöne Erinnerungen sorgt.</p>
                <h3>Die Tradion im Ötztal bzw. im Tiroler Oberland</h3>
                <p>Das Ötztal ist eine Region mit einer reichen Tradition, lebendigen Bräuchen und erlebnisreichen Veranstaltunen, die das kulturelle Leben prägen. Hier sind einige der wichtigsten Traditionen und Veranstaltungen im Ötztal:</p>
            </div>
            <Footer />
        </div>
    )
}

export default Oetztal;
