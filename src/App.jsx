import { useState } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import PopularMenuSlider from "./sections/PopularMenuSlider";
import Menu from './sections/Menu';

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <PopularMenuSlider />
        <Menu />
    </>
  );
}

export default App;
