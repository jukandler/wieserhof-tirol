import "./bulletList.css"

function BulletList() {
    return (
        <div className="bullet-list grid-expanded">
            <h2>Ausstattung:</h2>
            <ul>
                <h3>Grundausstattung</h3>
                <li>Bettwäsche</li>
                <li>Handtücher</li>
                <li>Seife</li>
                <li>Toilettenpapier</li>

                <h3>Küche</h3>
                <li>Mikrowelle</li>
                <li>Kühlschrank</li>
                <li>Kaffee-Maschine</li>
                <li>Geschirrspülmaschine</li>
                <li>Geschirr</li>
                <li>Elektroherd mit Cerankochfeld</li>
                <li>Backrohr</li>
                <li>Gefrierfach</li>
                <li>Wasserkocher</li>
                <li>Tisch- und Küchenwäsche</li>
                
                <h3>Außenbereich</h3>
                <li>Garten</li>
                <li>Balkon</li>
                <li>Terrasse</li>
                <li>Privater Eingang</li>

                <h3>Schlafzimmer</h3>
                <li>Separate Schlafzimmer</li>
                <li>Steckdose in Bettnähe</li>

                <h3>Technik</h3>
                <li>WiFi</li>
                <li>Sat-TV</li>                
            </ul>
        </div>
    )
}

export default BulletList;