import React from "react";
import Navbar from "../../component/Navbar";
import Banner from "../../component/Banner";
import Belowbanner from "../../component/Belowbanner";
import Features from "../../component/Features";
import Brand from "../../component/Brand";
import Testimonial from "../../component/Testimonial";
import EventTicketFAQ from "../../component/EventTicketFAQ";
import Footer from "../../component/Footer";
import How from "../../component/How"; // Import the combined How component
import AboutUs from "../../component/Aboutus";

function Landing() {
  return (
    <>
      <Navbar />
      <Banner />
      <Belowbanner />
      <Features />
      <How /> {/* Use the How component */}
      <Brand />
      <AboutUs />
      <Testimonial />
      <EventTicketFAQ />
      <Footer />
    </>
  );
}

export default Landing;
