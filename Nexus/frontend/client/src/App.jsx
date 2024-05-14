import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage.jsx";
import GalleryViewPage from './views/GalleryViewPage.jsx';
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />

          <div>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              {/* <Route path="/about">

              </Route> */}
              <Route path="/gallary" element={<GalleryViewPage />}></Route>
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
