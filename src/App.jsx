import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import './variables.css';
import './fonts.css'
import './typography.css'
import './App.css';

import Home from './pages/Home';
import Imprint from "./pages/Imprint";
import ScrollToTop from "./helpers/scrollToTop";
import Navigation from "./components/Navigation/Navigation";
import Apartment from "./pages/Apartment";
import Wieserhof from "./pages/Wieserhof";
import Oetztal from "./pages/Oetztal";
import Anfahrt from "./pages/Anfahrt";
import Contact from "./pages/Contact";
import DataPrivacy from "./pages/DataPrivacy";
import Prices from "./pages/Prices";
import Booking from "./pages/Booking";
import Sommer from "./pages/Sommer";
import Winter from "./pages/Winter";
import Indoor from "./pages/Indoor";

function App() {
  return (
    <div className="App">
      <HashRouter basename={import.meta.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/ferienwohnung" element={<Apartment/>} />
          <Route exact path="/wieserhof" element={<Wieserhof/>} />
          <Route exact path="/oetztal" element={<Oetztal/>} />
          <Route exact path="/sommer" element={<Sommer/>} />
          <Route exact path="/winter" element={<Winter/>} />
          <Route exact path="/indoor" element={<Indoor/>} />
          <Route exact path="/anfahrt" element={<Anfahrt/>} />
          <Route exact path="/anfrage" element={<Contact/>} />
          {/* <Route exact path="/preise" element={<Prices/>} /> */}
          <Route exact path="/buchung" element={<Booking/>} />
          <Route exact path="/impressum" element={<Imprint/>} />
          <Route exact path="/datenschutz" element={<DataPrivacy/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
