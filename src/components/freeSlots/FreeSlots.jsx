import { useEffect, useState } from "react";
import "./freeslots.css";

function FreeSlots() {
    const [slots, setSlots] = useState(null);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_SPREADSHEET_API_KEY;
        const spreadsheetId = process.env.REACT_APP_SPREADSHEET_ID;
        const range = 'Sheet1!A2:A6';

        const fetchData = async () => {
            try {
                const response = await fetch(
                `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
                );
                const result = await response.json();

                if (result.values) {
                    setSlots(result.values);
                } else {
                    console.error('Keine Daten gefunden.');
                }
            } catch (error) {
                console.error('Fehler beim Abrufen der Daten:', error);
            }
        };

        fetchData();
    }, []);

    if (!slots) {
        return undefined;
    }

    return (
        <div className="free-slots">
            <h4>Letzte Chance:</h4>
            <div className="date-container">
                {slots.map((slot, i) => <div key={i}>{slot}</div>)}
            </div>
        </div>
    )
}

export default FreeSlots;