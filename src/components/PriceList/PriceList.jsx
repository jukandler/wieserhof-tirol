import "./priceList.css"

function PriceList() {
    return (
        <div className="price-list grid-text_wide" style={{marginBottom: "60px"}}>
            <h2>Preise der aktuellen Saison 2024/2025</h2>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2"><b>Basispreis bei Belegung für bis 4 Personen</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Nebensaison
                            <span className="season">
                                24.02.2024 - 22.03.2024<br></br>
                                06.04.2024 - 17.05.2024<br></br>
                                07.09.2024 - 20.12.2024<br></br>
                                07.01.2025 - 31.01.2025<br></br>
                                08.03.2025 - 11.04.2025<br></br>
                            </span>
                        </td>
                        <td>200€</td>
                    </tr>
                    <tr>
                        <td>Wintersaison
                            <span className="season">
                                23.03.2024 - 05.04.2024<br></br>
                                12.04.2025 - 25.04.2025
                            </span>
                        </td>
                        <td>250€</td>
                    </tr>
                    <tr>
                        <td>Sommersaison
                            <span className="season">
                                18.05.2024 - 06.09.2024
                            </span>
                        </td>
                        <td>250€</td>
                    </tr>
                    <tr>
                        <td>Topsaison Winter
                            <span className="season">
                                21.12.2024 - 06.01.2025<br></br>
                                01.02.2025 - 07.03.2025
                            </span>
                        </td>
                        <td>320€</td>
                    </tr>
                </tbody>
            </table>
            <p><b>Jede weitere Person</b> wird mit 25€ pro Nacht berechnet (Belegung bis max. 6 Personen).</p>
            <p>zzgl. <b>Ortstaxe:</b> 4€ pro Person und Nacht (ab dem 15. Lebensjahr).</p>
            <p><b>Haustiere</b> sind bei uns herzlich willkommen und werden mit 15€ pro Nacht berechnet.</p>
            <p>Der <b>Mindestaufenthalt</b> variiert je nach Saison - Für besonders kurze Aufenthalte (weniger als 3 Nächte) wird ein Aufschlag von 20% des Basispreises verrechnet.</p>
            <p>Die <b>Endreinigung</b> für die Ferienwohnung ist in den angeführten Preisen bereits enthalten.</p>
            <b>Check-In: ab 15:00 Uhr<br></br>Check-Out: bis 10:00 Uhr</b>
            <p>Die Angaben sind ohne Gewähr, es sind ausschließlich die Preise der Buchungsbestätigung ausschlaggebend. Buchungen sind nur verbindlich, wenn sie durch uns bestätigt werden.</p>
        </div>
    )
}

export default PriceList;