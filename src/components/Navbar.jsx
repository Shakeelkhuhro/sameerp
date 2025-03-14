import React from "react";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ setCurrentPage }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#e2e8f0' }}>
      <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Sameer Khuhro</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={() => setCurrentPage("Home")}>Home</button>
        <button onClick={() => setCurrentPage("About")}>About</button>
        <button onClick={() => setCurrentPage("Experience")}>Experience</button>
        <button onClick={() => setCurrentPage("Projects")}>Projects</button>
        <button onClick={() => setCurrentPage("Skills")}>Skills</button>
        <button onClick={() => setCurrentPage("Certifications")}>Certifications</button>
        <DarkModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
