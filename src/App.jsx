import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import PopularMenuSlider from "./sections/PopularMenuSlider";
import Menu from './sections/Menu';
import ComboOffer from './sections/ComboOffer';
import LocationSection from './sections/LocationSection';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <PopularMenuSlider />
        <ComboOffer />
        <Menu />
        <LocationSection />
    </>
  );
}

export default App;
