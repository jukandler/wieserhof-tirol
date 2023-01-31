import emailjs from 'emailjs-com';
import { useRef } from 'react';

import './form.css';

function Form() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kjixx1t', 'template_dw3596q', form.current, 'Pp1Soj9pjn2MCL4tq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
                <label htmlFor="from_name">Ihr Name</label>
                <input
                    type="name"
                    name="from_name"
                    className="form-control"
                    id="from_name"
                />
            </div>
            {/* TODO: An- und Abreisedatum */}
            <div className="form-group">
                <label htmlFor="reply_to">Ihre E-Mail Adresse</label>
                <input
                    type="email"
                    name="reply_to"
                    className="form-control"
                    id="reply_to"
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Ihre Nachricht an uns</label>
                <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                ></textarea>
            </div>
            <button type="submit" className="button button-primary">
                Anfrage senden
            </button>
            {/* TODO: Datenschutz? */}
        </form>
    )
}

export default Form;