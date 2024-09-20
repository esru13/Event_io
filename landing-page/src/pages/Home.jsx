import React from 'react'
import Banner from '../components/Banner'
import EventTicketFAQ from '../components/EventTicketFAQ';
import Testimonial from '../components/Testimonial';
import Brand from '../components/Brand(2)';
import Belowbanner from '../components/Belowbanner';
import Features from '../components/Features';
import How from '../components/How';


const Home = () => {
  return (
    <div>
      <Banner/>
      <Belowbanner/>
      <Features/>
      <How/>
      <Brand/>
      <Testimonial/>
      <div className='max-w-7xl mx-auto'>
      </div>
      <EventTicketFAQ />
      
    
    </div>
  )
}

export default Home
