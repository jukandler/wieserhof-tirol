import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import ImageTileBadMobile from "../assets/images/image-tile-bad_mob.jpg"
import ImageTileBadDesktop from "../assets/images/image-tile-bad.jpg"
import ImageTileBalkonViewDesktop from "../assets/images/balkon-view.jpg"
import ImageTileBalkonViewMobile from "../assets/images/balkon-view_mob.jpg"
import ImageTileOetztalDesktop from "../assets/images/oetz-im-winter.jpg"
import ImageTileOetztalMobile from "../assets/images/oetz-im-winter_mob.jpg"
import SplitTiles from '../components/SplitTiles/SplitTiles';

function Home() {
    return (
        <div id="home">
            <Hero />
            <section className="grid-text_wide" style={{ margin: "60px auto" }}>
                <h3>Die exklusive Ferienwohnung im Ötztal, 5 Minuten vom Skigebiet entfernt.</h3>
                <p>Herzlich Willkommen am Bergbauernhof Wieserhof in Oetz in Tirol! Der Wieserhof befindet sich in Alleinlage auf ca. 1.100 m Seehöhe abseits von jeglichem Verkehr und ist der ideale Urlaubsort für Ruhesuchende, Naturliebhaber und Familien.</p>
            </section>
            <SplitTiles
                linkTo="/ferienwohnung"
                imageTileTitle="Unsere exklusive Ferienwohnung"
                imageDesktop={ImageTileBadDesktop}
                imageMobile={ImageTileBadMobile}
                textTileTitle="Luxus und Gemütlichkeit auf 85m²"
                text="Die hochwertig renovierte und voll ausgestattete Ferienwohnung ist mit viel Liebe zum Detail eingerichtet und bietet Ihnen allen Komfort mit einem Hauch von Luxus."
            />
            <SplitTiles 
                linkTo="/wieserhof"
                imageTileTitle="Landleben auf dem Wieserhof"
                imageDesktop={ImageTileBalkonViewDesktop}
                imageMobile={ImageTileBalkonViewMobile}
                textTileTitle="Erholung mitten in den Bergen"
                text="Ruhe, frische Luft, die Höhe und der einzigartige Ausblick versprechen unvergessliche Urlaubstage. Auch unsere Hoftiere (Pferde, Ziegen, Enten, Hund, Katzen) heißen Sie herzlich willkommen."
                reverse={true}
            />
            <SplitTiles 
                linkTo="/oetztal"
                imageTileTitle="Das Ötztal<br>Natur und Aktiv"
                imageDesktop={ImageTileOetztalDesktop}
                imageMobile={ImageTileOetztalMobile}
                textTileTitle="Ausflugsziele im Ötztal"
                text="Der Wieserhof ist der ideale Ausgangspunkt für viele Wander-, Berg und Skitouren in der nahen Umgebung. Das Skigebiet Hochoetz/Kühtai erreichen Sie von uns aus in ca. 5 Autominuten. Die nächsten Einkaufsmöglichkeiten (Apotheke, Lebensmittel, Souveniers, Bekleidung, ...) befinden sich im Hauptort Oetz in ca. 4 km Entfernung."
            />
            <section className="grid-text_wide">
                <h2>Ihre Gastgeber</h2>
                <p className="quote">
                    Mit viel Leidenschaft betreiben wir einen Bergbauernhof im vorderen Oetztal auf 1100 m mit Ziegenhaltung, Pferden & Ponys und Kleintieren. Im Jahr 2022 haben wir uns entschlossen, eine exklusive Ferienwohnung auf unserem Hof zu errichten. Die Umsetzung ist uns dann auch unter viel Beigabe von Herzblut und in die Liebe zu den Details erfreulich gut gelungen. Wir freuen uns jetzt auf viele nette Gäste, mit denen wir die Vorteile von unserem Hof in Alleinlage teilen dürfen!
                    <br></br>
                    <br></br>
                    Herzlich Grüße, eure Gastgeber - 
                    <br></br>
                    Barbara & Michl
                </p>
            </section>
            <Footer />
        </div>
    )
}

export default Home;
