export default function fetchSpreadsheetData(range, setDataFn) {
    const apiKey = import.meta.env.VITE_SPREADSHEET_API_KEY;
    const spreadsheetId = import.meta.env.VITE_SPREADSHEET_ID;

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
            );
            const result = await response.json();

            if (result.values) {
                setDataFn(result.values);
            } else {
                console.error('Keine Daten gefunden.');
            }
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    };

    fetchData();
}