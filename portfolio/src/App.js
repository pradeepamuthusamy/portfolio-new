// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import About from './components/about'; // Import other components similarly
import Skills from './components/skills';
import Projects from './components/project';
import Contact from './components/contact';

const App = () => (
  <Router> {/* Wrap everything inside Router */}
    <Header />
    <Routes>
     
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;

