import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Continent from "./components/Continent/Continent";
import Country from "./components/Country/Country";
import Home from "./components/Home/Home";
import Language from "./components/Language/Language";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/continent/:code" element={<Continent />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="/language/:code" element={<Language />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
