import {
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import Home from './pages/Home';

import './App.css';
import Imprint from "./pages/Imprint";
import ScrollToTop from "./helpers/scrollToTop";

function App() {
  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/impressum" element={<Imprint/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
