import React from "react";
import Header from "./Header";
import "../Styles/home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="mainPage">
        {/* Left content */}
        <div className="homeContent">
          <h1 className="heading">ShopEase</h1>
          <p className="subText">Buy Right– Your World of Effortless Shopping!</p>
          <p className="description">
            At ShopEase, we believe that finding what you love should 
            be simple, enjoyable, and always rewarding. 
            We've curated a vast collection of high-quality products 
            across all your favorite categories, bringing them 
            directly to your fingertips. From the latest trends to 
            everyday essentials, discover a seamless 
            shopping experience designed with you in mind.
          </p>
        </div>

        <div className="homeImage"></div>
      </div>
    </>
  );
};

export default Home;
