import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Country from "./components/Country/Country";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
