import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
//import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Projects Page */}
        <Route
          path="/projects"
          element={<Projects />}
        />
        {/* Gallery Page */}
        <Route
          path="/gallery"
          element={<Gallery />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>

    </BrowserRouter>

  );

}

export default App;