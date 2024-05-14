import LandingPage from "./views/LandingPage.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
              <Route path="/" element={< LandingPage />}></Route>
              {/* <Route path="/about">

              </Route>
              <Route path="/gallary">

              </Route> */}
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
