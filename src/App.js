import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Certifications from "./pages/Certifications";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Experience":
        return <Experience />;
      case "Projects":
        return <Projects />;
      case "Skills":
        return <Skills />;
      case "Certifications":
        return <Certifications />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}

export default App;
