import React from "react";
import Header from "./Header";
import "../Styles/about.css";

const About = () => (
  <>
    <Header />
    <div className="about-section">
      <div className="about-container">
        <div className="about-card fade-in">
          <h3>Who We Are</h3>
          <p>
            We're not just another online store. At <strong>ShopEase</strong>, we make shopping easy, exciting, and inspiring. Whether it's fashion, gadgets, or home essentials, we’ve got your back.
          </p>
        </div>

        <div className="about-card fade-in" style={{ animationDelay: "0.2s" }}>
          <h3>Our Mission</h3>
          <p>
            To create a seamless online shopping experience that blends variety, value, and trust — empowering customers to find what they love, faster and smarter.
          </p>
        </div>

        <div className="about-card fade-in" style={{ animationDelay: "0.4s" }}>
          <h3>Our Vision</h3>
          <p>
            <strong>Customer First</strong>: Your satisfaction is our priority.<br />
            <strong>Transparency</strong>: No hidden fees, no shady sellers.<br />
            <strong>Innovation</strong>: We keep leveling up your experience.
          </p>
        </div>
      </div>

      <div className="about-image"></div>
    </div>
  </>
);

export default About;
