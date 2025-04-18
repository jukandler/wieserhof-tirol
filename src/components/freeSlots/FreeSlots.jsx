import { useEffect, useState } from "react";
import "./freeslots.css";
import fetchSpreadsheetData from "../../helpers/fetchSpreadsheetData";

function FreeSlots() {
    const [slots, setSlots] = useState(null);

    useEffect(() => {
        fetchSpreadsheetData('Sheet1!A2:A6', setSlots);
    }, []);

    if (!slots) {
        return undefined;
    }

    return (
        <div className="free-slots">
            <h4>Letzte Chance!</h4>
            <div className="date-container">
                {slots.map((slot, i) => <div key={i}>{slot}</div>)}
            </div>
        </div>
    )
}

export default FreeSlots;