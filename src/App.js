import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route ,useLocation} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Home/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
