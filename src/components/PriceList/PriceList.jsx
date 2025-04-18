import { useEffect, useState } from "react";
import "./priceList.css"
import fetchSpreadsheetData from "../../helpers/fetchSpreadsheetData";

function PriceList() {

    const [prices, setPrices] = useState(null);
    
    useEffect(() => {
        fetchSpreadsheetData('Sheet1!A10:H13', setPrices);
        console.log('prices :', prices);
    }, []);

    if (!prices) {
        return undefined;
    }

    const tableRow = (i, seasonTitle, seasonPrice, seasonWeeks) => {
        return (
            <tr key={i}>
                <td>
                    {seasonTitle}
                    <span className="season">
                        {seasonWeeks.map((week, i) => <div key={i}>{week}</div>)}
                    </span>
                </td>
                <td>{seasonPrice}</td>
            </tr>
        )
    }

    return (
        <div className="price-list grid-text_wide" style={{marginBottom: "60px"}}>
            <h2>Preise der aktuellen Saison</h2>
            <table>
                <thead>
                    <tr>
                        <th colSpan="2"><b>Basispreis pro Nacht bei Belegung bis max. 4 Personen</b></th>
                    </tr>
                </thead>
                <tbody>
                    {prices.map((season, index) => {
                        const title = season[0];
                        const price = season[1];
                        const weeks = season.map((week, i) => i > 1 ? week : "")
                        return tableRow(index, title, price, weeks)
                    })}
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