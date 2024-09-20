import React from "react";
import Banner from "../../component/Banner";
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar"; 
import EventTicketFAQ from "../../component/EventTicketFAQ";
import Testimonial from "../../component/Testimonial";
import Brand from "../../component/Brand"; 
import Belowbanner from "../../component/Belowbanner";

function Landing() {
  return (
    <>
      <Navbar /> 
      <Banner />
      <Belowbanner />
      <Brand /> 
      <Testimonial />
      <EventTicketFAQ />
      <Footer />
    </>
  );
}

export default Landing;
