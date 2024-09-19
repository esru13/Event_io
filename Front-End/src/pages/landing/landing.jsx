import React from "react";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar"; 
import EventTicketFAQ from "../../component/EventTicketFAQ";
import Testimonial from "../../component/Testimonial";
import Brand from "../../component/Brand"; 

function Landing() {
  return (
    <>
      <Navbar /> 
      <Banner />
      <Brand /> 
      <Testimonial />
      <EventTicketFAQ />
      <Footer />
    </>
  );
}

export default Landing;
