import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Country from "./components/Country/Country";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/country/:code" element={<Country />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
