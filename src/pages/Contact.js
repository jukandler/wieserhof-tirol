import { Link } from 'react-router-dom';
import Form from '../components/form/Form';
import Header from '../components/header/Header';

function Contact() {
    return (
        <div id="contact-form">
            <Header title="Anfrage-Formular"/>
            <div className="grid-text_wide">
                <h3>Wir freuen uns, dass Sie sich für Urlaub bei uns auf dem Wieserhof interessieren!</h3>
                <p>Nutzen Sie für Ihre unverbindliche Anfrage am besten unser Formular, wir schicken Ihnen gerne ein maßgeschneidertes Angebot zu.</p>
                <p>Die Preise der aktuellen Saison finden Sie hier: <Link to="/preise">Preisübersicht</Link></p>
                <Form />
            </div>
        </div>
    )
}

export default Contact;
