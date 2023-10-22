import { Link } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import PriceList from '../components/PriceList/PriceList';

function Prices() {
    return (
        <div id="prices">
            <Header title="Preise"/>
            <PriceList />
            <Link to="/anfrage"><button className="button button-primary">Jetzt unverbindlich anfragen</button></Link>
            <Footer />
        </div>
    )
}

export default Prices;
