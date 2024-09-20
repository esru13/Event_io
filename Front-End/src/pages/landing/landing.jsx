import React from "react";
import { Element } from 'react-scroll'; // Import Element from react-scroll
import Navbar from "../../component/Navbar";
import Banner from "../../component/Banner";
import Belowbanner from "../../component/Belowbanner";
import Features from "../../component/Features";
import Testimonial from "../../component/Testimonial";
import Footer from "../../component/Footer";
import How from "../../component/How";
import AboutUs from "../../component/Aboutus";

function Landing() {
  return (
    <>
      <Navbar />
      
      {/* Home Section */}
      <Element name="home">
        <Banner />
      </Element>

      <Belowbanner />

      {/* Features Section */}
      <Element name="features">
        <Features />
      </Element>

      {/* How it Works Section */}
      <Element name="how">
        <How />
      </Element>

      {/* About Us Section */}
      <Element name="aboutus">
        <AboutUs />
      </Element>

      {/* Testimonial Section */}
      <Element name="testimonial">
        <Testimonial />
      </Element>

      <Footer />
    </>
  );
}

export default Landing;
