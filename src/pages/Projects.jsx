import React from "react";

const Projects = () => {
  return (
    <div style={{ padding: '2.5rem', backgroundColor: '#f7fafc', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#1a202c' }}>Projects</h2>
      <p style={{ marginTop: '1rem', color: '#4a5568' }}>Sameer Khuhro's projects.</p>
      <ul style={{ marginTop: '1rem', color: '#4a5568' }}>
        <li>🛒 ShopEase - E-commerce Platform</li>
        <li>📊 ExpenseMate - Budget Expense Tracker</li>
        <li>🎓 LearnSphere - LMS Platform</li>
      </ul>
    </div>
  );
};

export default Projects;
