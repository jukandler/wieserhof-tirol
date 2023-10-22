import BookingTool from '../components/booking/BookingTool';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Booking() {
    return (
        <div id="booking">
            <Header title="Buchung"/>
            <div className="grid-text_wide">
                <h3>Buchen Sie jetzt Ihren Urlaub auf dem Wieserhof</h3>
                <p>Mit nur wenigen Klicks können Sie hier unsere Ferienwohnung buchen. Ganz schnell und unkompliziert.</p>
            </div>
            <BookingTool />
            <Footer />
        </div>
    )
}

export default Booking;
