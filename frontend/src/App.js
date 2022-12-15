import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import ElementsForm from "./components/ElementsForm";
import TankForm from "./components/TankForm";
import NaviBar from "./components/NaviBar";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Router>
        <NaviBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elementsform" element={<ElementsForm />} />
          <Route path="/tankform" element={<TankForm />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
