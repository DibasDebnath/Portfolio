import { HashRouter, Routes, Route } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home";
import Research from "./pages/Research";
import UnityProjects from "./pages/UnityProjects";
import CocosProjects from "./pages/CocosProjects";
import UnrealProjects from "./pages/UnrealProjects";
import WebProjects from "./pages/WebProjects";
import Contacts from "./pages/Contacts";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Navbar />
        <div className="Pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Research" element={<Research />} />
            <Route path="/UnityProjects" element={<UnityProjects />} />
            <Route path="/CocosProjects" element={<CocosProjects />} />
            <Route path="/UnrealProjects" element={<UnrealProjects />} />
            <Route path="/WebProjects" element={<WebProjects />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
