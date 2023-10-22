import Header from "../components/header/Header"

function DataPrivacy() {
    return(
        <div id="data-privacy">
            <Header title="Datenschutz"/>
            <div className="grid-text_wide">
                <p>
                    Die Einhaltung der jeweils geltenden gesetzlichen Bestimmungen zum Datenschutz personenbezogener Daten ist für uns selbstverständlich.
                </p>
                <p style={{paddingBottom: "50px"}}>
                    Im Rahmen der Nutzung unseres Online-Kontaktformulars werden gewisse personenbezogene Daten erhoben, deren Umfang aus der Eingabemaske unter www.wieserhof-tirol.at/#/anfrage ersichtlich ist. 
                    Diese Daten werden ausschließlich zum Zweck der Beantwortung Ihres Anliegens bzw. für die Kontaktaufnahme und die damit verbundene technische Administration gespeichert und verwendet. 
                    Rechtsgrundlage für die Verarbeitung dieser Daten ist unser berechtigtes Interesse an der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO. 
                    Zielt Ihre Kontaktierung auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. 
                    Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht. 
                    Dies ist der Fall, wenn sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend geklärt ist und sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
            </div>
        </div>
    )
}

export default DataPrivacy;