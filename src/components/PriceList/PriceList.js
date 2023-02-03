import "./priceList.css"

function PriceList() {
    return (
        <div className="price-list grid-text_wide">
            <h2>Preise Saison 2022/23</h2>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2"><b>Basispreis für 4 Personen</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Zwischensaison Frühjahr/Herbst
                            <span className="season">
                                17.04.2023 - 25.05.2023<br></br>
                                02.09.2023 - 07.12.2023
                            </span>
                        </td>
                        <td>200€</td>
                    </tr>
                    <tr>
                        <td>Wintersaison
                            <span className="season">
                                01.02.2023 - 17.02.2023<br></br>
                                04.03.2023 - 16.04.2023<br></br>
                                08.12.2023 - 22.12.2023<br></br>
                                07.01.2024 - 09.02.2024<br></br>
                                02.03.2024 - 12.04.2024
                            </span>
                        </td>
                        <td>250€</td>
                    </tr>
                    <tr>
                        <td>Sommersaison
                            <span className="season">
                                26.05.2023 - 01.09.2023
                            </span>
                        </td>
                        <td>250€</td>
                    </tr>
                    <tr>
                        <td>Topsaison Winter
                            <span className="season">
                                18.02.2023 - 03.03.2023<br></br>
                                23.12.2023 - 06.01.2024<br></br>
                                10.02.2024 - 01.03.2024
                            </span>
                        </td>
                        <td>300€</td>
                    </tr>
                </tbody>
            </table>
            <p>zzgl. <b>Ortstaxe:</b> 3,50€ pro Person und Nacht (ab dem 15. Lebensjahr). Ab dem 1.11.2023 erhöht sich die Ortstaxe auf 4€.</p>
            <p><b>Jede weitere Person</b> wird mit 25€ pro Nacht berechnet (Belegung bis max. 6 Personen).</p>
            <p><b>Haustiere</b> sind bei uns herzlich willkommen und werden mit 15€ pro Nacht berechnet.</p>
            <p>Der <b>Mindestaufenthalt</b> variiert je nach Saison - bitte um Anfrage des gewünschten Termins. Wir erlauben uns, für besonders kurze Aufenthalte (weniger als 3 Nächte) einen Aufschlag von 20% des Basispreises zu berechnen.</p>
        </div>
    )
}

export default PriceList;