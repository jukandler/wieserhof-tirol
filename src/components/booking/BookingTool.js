import { useEffect, useState } from "react";
import ConsentBanner from "../consent/ConsentBanner";
import "./bookingTool.css"

function BookingTool() {
    const [consent, setConsent] = useState(false);

    useEffect(() => {
        if (consent) {
            window.__KBE.settings({
                "language": "DE",
                "id": "BOOKINGWIDGET",
                "propertyCode": "AT_UAB7-02-14-85"
            });

            window.__KBE.searchbar({
                "id": "BOOKINGWIDGET",
                "isConnected": true
            });

            window.__KBE.rates({
                "id": "BOOKINGWIDGET"
            });

            window.__KBE.offers({
                "id": "BOOKINGWIDGET"
            });
        }
    }, [consent]);
    
    return (
        <div className="booking-tool grid-expanded">
            <div data-kbe-searchbar="BOOKINGWIDGET"></div> 
            <div data-kbe-rates="BOOKINGWIDGET"></div>
            {/* <div data-kbe-offers="BOOKINGWIDGET"></div> */}
            {!consent && <ConsentBanner setConsent={setConsent} />}
        </div>
    )
}

export default BookingTool;