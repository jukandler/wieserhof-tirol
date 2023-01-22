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

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/impressum" element={<Imprint/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
