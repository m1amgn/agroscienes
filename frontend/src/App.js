import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import ElementsForm from "./components/ElementsForm";
import TankForm from "./components/TankForm";
import NaviBar from "./components/NaviBar";

function App() {
  return (
    <Router>
      <NaviBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elementsform" element={<ElementsForm />} />
        <Route path="/tankform" element={<TankForm />} />
      </Routes>
    </Router>
  );
}

export default App;
