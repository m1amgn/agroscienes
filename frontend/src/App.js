// chart.js, recharts, nivo (есть песочница), vx (простой)
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import ElementsForm from "./components/ElementsForm";
import TankForm from "./components/TankForm";

function App() {
  return (
    <BrowserRouter>
      <Link to="/elementsform">ElementsForm</Link>
      <Link to="/tankform">TankForm</Link>
      <Routes>
        <Route path="/elementsform" element={<ElementsForm />} />
        <Route path="/tankform" element={<TankForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
