import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f7fafc' }}>
      <motion.h1
        style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1a202c' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Sameer Khuhro
      </motion.h1>
      <motion.p
        style={{ color: '#4a5568', marginTop: '1rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Software Engineer | React Developer | UI/UX Designer
      </motion.p>
      <h2>Home</h2>
      <p>Welcome to Sameer Khuhro's portfolio.</p>
    </div>
  );
};

export default Home;
