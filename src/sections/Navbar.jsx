import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[color:var(--color-brand)] text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-2xl font-bold">LOGO</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#menu" className="hover:underline">Menu</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden px-4 pb-4">
          <a href="#home" className="block py-2">Home</a>
          <a href="#menu" className="block py-2">Menu</a>
          <a href="#about" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;