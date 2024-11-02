import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { Nav2 } from "./components/Nav2";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Campus } from "./pages/Campus";
import { InformationRightDetail } from "./components/InformationRightDetail";

function App() {
  return (
    <BrowserRouter>
      {/* <Nav /> */}
      <Nav2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="onCampus" element={<Campus />} /> */}
        <Route path="/information/:slug" element={<InformationRightDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
