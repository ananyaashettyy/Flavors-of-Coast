import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
     

      <section className="about-section">
        <h2>About the Website</h2>
        <p>
          <strong>Flavors Of Coast</strong> is your go-to destination for simple, delicious, and authentic Indian recipes.
          Whether you're a beginner or a seasoned cook, you'll find step-by-step recipes for every occasion.
        </p>
        <p>
          Explore recipes by categories, images, ingredients, and tips on how to serve your favorite dishes.
        </p>
        <p>
          <Link to="/privacy-policy" className="privacy-link">Read our Privacy Policy</Link>
        </p>
      </section>

      <section className="about-section author-section">
        <h2>About the Author</h2>
        <div className="author-content">
          <img src="/uploads/Ananya.png" alt="Author" className="author-image" />

          <div>
            <p>
              Hi! I’m <strong>Ananya R Shetty</strong>, the creator of Flavors Of Coast. I love experimenting with Indian flavors and sharing easy recipes anyone can follow.
            </p>
            <p>
              I am an Information Science engineer by profession, which means I work with technology and problem-solving every day. However, cooking is my true passion and creative outlet. It brings me a way to express myself beyond the digital world. 
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Contact Me</h2>
        <div className="contact-icons">
          <a href="mailto:ananyashetty82987@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/uploads/mail.png" alt="Gmail" />
          </a>
          <a href="https://www.linkedin.com/in/ananyaashettyy/" target="_blank" rel="noopener noreferrer">
            <img src="/uploads/link.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/__ananyashetty.__" target="_blank" rel="noopener noreferrer">
            <img src="/uploads/insta.png" alt="Instagram" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
