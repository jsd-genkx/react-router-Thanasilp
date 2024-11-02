import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { InformationRightDetail } from "./components/InformationRightDetail";
import { CourseDetails } from "./components/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/information/:slug" element={<InformationRightDetail />} />
        <Route path="/course/:slug" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
