import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import PopularMenuSlider from "./sections/PopularMenuSlider";
import Menu from './sections/Menu';
import ComboOffer from './sections/ComboOffer';
import LocationSection from './sections/LocationSection';
import AboutUs from './sections/AboutUs';
import Founders from './sections/TeamMembers';
import Testimonials from './sections/Testimonials';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <PopularMenuSlider />
        <ComboOffer />
        <Menu />
        <LocationSection />
        <AboutUs />
        <Founders />
        <Testimonials />
    </>
  );
}

export default App;
