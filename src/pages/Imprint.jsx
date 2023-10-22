import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Imprint() {
    return (
        <div id="imprint">
            <Header title="Impressum"/>
            <div className="grid-text_wide">
                <section className="no-margin">
                    <h2>Inhaber und verantwortlich für den Inhalt:</h2>
                    <p><b>Michael Fischer</b></p>
                    <p>ATU: 57 616 137</p>
                    <p>Sitz des Unternehmens: Oetzerau</p>
                    <p>Wies 130, 6433 Oetz, Tirol</p>
                    <p>Telefon: <a href="tel:+4369910553435">+43 699 1055 3435</a></p>
                    <p>E-Mail: <a href="mailto:info@wieserhof-tirol.at">info@wieserhof-tirol.at</a></p>
                </section>
                <section className="no-margin">
                    <h2>Gestaltung und Programmierung:</h2>
                    <p><b>Julia Kandler</b></p>
                    <p>Königinstraße 37, 80539 München</p>
                    <p>E-Mail: <a href="mailto:julia@kskandler.de">julia@kskandler.de</a></p>
                </section>
                <section>
                    <h2>Haftung für Inhalte:</h2>
                    <p>
                        Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                        Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
                    </p>
                </section>
                <section>
                    <h2>Haftungsbeschränkung für externe Links:</h2>
                    <p>
                        Unsere Webseite enthält Links auf externe Webseiten Dritter.
                        Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich. Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                        Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes „wieserhof-tirol“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
                        Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.
                    </p>
                </section>
                <section>
                    <h2>Urheberrecht:</h2>
                    <p>Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes. Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.</p>
                </section>
                <section>
                    <h2>Bildarchive</h2>
                    <p>Vielen Dank an das Bildarchiv von Ötztal Tourismus (<a href="https://www.oetztal.com/de/" target="_blank" rel="noopener noreferrer">www.oetztal.com</a>) für die freundliche Unterstützung.</p>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Imprint;
