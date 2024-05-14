import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage.jsx";
// import GalleryViewPage from './views/GalleryViewPage';
import AboutPage from "./views/AboutPage.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import LoginModal from "./views/LoginModal.jsx";
import SignUpModal from "./views/SignUpModal.jsx";

//Note: Make all routes protected except (Home and About us page)
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div>
            <Routes>
              {/*Home Route*/}
              <Route path="/" element={<LandingPage />} />

              {/*About Us Route*/}
              <Route path="/about" element={<AboutPage />} />

              {/*Spaces Route*/}
              {/* <Route path="/spaces" element={<GalleryViewPage />} /> */}

              {/*Login Route*/}
              <Route path="/login" element={<LoginModal />} />

              {/*SignUp Route*/}
              <Route path="/signup" element={<SignUpModal />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
