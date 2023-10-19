import { useEffect } from "react";
import "./consentBanner.css"

import CookieConsent, {getCookieConsentValue} from "react-cookie-consent";

function ConsentBanner({setConsent}) {

    useEffect(() => {
        setConsent(getCookieConsentValue("CookieConsent"))
        console.log("init consent value:", getCookieConsentValue("CookieConsent"))
    }, [setConsent]);

    return (
        <div className="consent-banner">
            <CookieConsent
                location="bottom"
                buttonText="Akzeptieren"
                style={{ background: "#C0AB96" }}
                buttonStyle={{ background: "#EEE9E2", fontSize: "20px", borderRadius: "5px", padding: "10px" }}
                onAccept={() => {
                    console.log("accept")
                    setConsent(true)
                }}
            >
                Dieses Buchungssystem verwendet Cookies für statistische Analysezwecke. Wir benötigen daher Ihre Einwilligung.{" "}
            </CookieConsent>
        </div>
    )
}

export default ConsentBanner;
