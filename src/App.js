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
import Anfrage from "./pages/Anfrage";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/ferienwohnung" element={<Apartment/>} />
          <Route exact path="/wieserhof" element={<Wieserhof/>} />
          <Route exact path="/oetztal" element={<Oetztal/>} />
          <Route exact path="/anfahrt" element={<Anfahrt/>} />
          <Route exact path="/impressum" element={<Imprint/>} />
          <Route exact path="/anfrage" element={<Anfrage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
