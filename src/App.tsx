import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Continent from "./components/Continent/Continent";
import Continents from "./components/Continent/Continents";
import Countries from "./components/Country/Countries";
import Country from "./components/Country/Country";
import Home from "./components/Home/Home";
import Language from "./components/Language/Language";
import Languages from "./components/Language/Languages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/continents" element={<Continents />} />
        <Route path="/continents/:code" element={<Continent />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:code" element={<Country />} />
        <Route path="/languages/" element={<Languages />} />
        <Route path="/languages/:code" element={<Language />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
