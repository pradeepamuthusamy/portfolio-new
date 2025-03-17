// src/components/Home.js
import React from 'react';
import './about.css';
import {  FaGithub,FaInstagram, FaLinkedin } from 'react-icons/fa';
 // Import the CSS file for styling

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
      <div className="home-photo-container">
      <img src="pradeepa.jpg" alt="Pradeepa M" className="home-photo" />
      </div>
      <div className="home-text">
        <h3>Hello, It's me</h3>
        <h1>PRADEEPA M</h1>
        <div class="wrapper">
        
        <h1 aria-label="Hi! I'm a developer">
   I'm a&nbsp;<span class="typewriter"></span>
</h1>
   
</div>
        <p>
        Myself Pradeepa Muthusamy ,currently pursuinng 3rd year computer science engineering at St Joseph's college of engineering .I am aspirant full stack developer ."
        </p>
        <div className="social-media">
        <div className="social-media">
        <a href="https://github.com/pradeepamuthusamy" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
  
  <a href="#" className="social-icon">
    <FaInstagram />
  </a>
  <a href="https://www.linkedin.com/in/pradeepa-m-50039825a" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
</div>

        </div>
        <a href="One Page Student Template_Third year1.pdf" download className="btn">
          Download CV
        </a>
      </div>
      </div>
    </section>
  );
};

export default Home;
