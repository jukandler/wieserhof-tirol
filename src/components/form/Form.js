import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import MailIcon from "../../assets/icons/mail.png";
import CheckIcon from "../../assets/icons/check.png";
import { Link } from 'react-router-dom';

import './form.css';

function Form() {
    const [status, setStatus] = useState("IDLE");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("LOADING");

        emailjs.sendForm('service_kjixx1t', 'template_dw3596q', form.current, 'Pp1Soj9pjn2MCL4tq')
            .then((result) => {
                setStatus("SUCCESS");
                console.log(result.text);
            }, (error) => {
                setStatus("ERROR");
                console.log(error.text);
            });
    };

    const getButtonContent =(status) => {
        if (status === "ERROR") {
            return "Fehler";
        } else if (status === "LOADING") {
            return "Bitte warten...";
        } else if (status === "SUCCESS") {
            return `<span><img src=${CheckIcon} alt="Haken"/></span>Anfrage gesendet!`;
        } else {
            return `<span><img src=${MailIcon} alt="Mail"/></span>Anfrage senden`;
        }
    }

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="from_name">Name*</label>
                <input
                    name="from_name"
                    className="form-control"
                    id="from_name"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date_arrival">Anreise*</label>
                <input
                    type="date"
                    name="date_arrival"
                    className="form-control"
                    id="date_arrival"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="date_departure">Abreise*</label>
                <input
                    type="date"
                    name="date_departure"
                    className="form-control"
                    id="date_departure"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="number_of_guests">Anzahl Personen*</label>
                <input
                    type="number"
                    name="number_of_guests"
                    className="form-control"
                    id="number_of_guests"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="reply_to">E-Mail Adresse*</label>
                <input
                    type="email"
                    name="reply_to"
                    className="form-control"
                    id="reply_to"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Ihre Nachricht an uns</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="9"
                ></textarea>
            </div>
            <div className="data-privacy">
                <input
                    type="checkbox"
                    id="dataprivacy"
                    name="dataprivacy"
                    required
                />
                <label htmlFor="horns">Ja, ich akteptiere die <Link to="/datenschutz">Datenschutzerklärung</Link>*</label>
            </div>
            <button type="submit" className="button button-primary" dangerouslySetInnerHTML={{__html: getButtonContent(status)}}>
            </button>
            {status === "SUCCESS" && <b>Vielen Dank für Ihre Anfrage! Wir werden Sie so schnell wie möglich beantworten.</b>}
            {status === "ERROR" && <b>Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später nochmal.</b>}
        </form>
    )
}

export default Form;