import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import PopularMenuSlider from "./sections/PopularMenuSlider";
import Menu from './sections/Menu';
import ComboOffer from './sections/ComboOffer';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <PopularMenuSlider />
        <ComboOffer />
        <Menu />
    </>
  );
}

export default App;
