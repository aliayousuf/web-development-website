"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-14 bg-indigo-200 flex justify-between px-4 items-center">
      {/* Logo */}
      <div>
        <h1 className="text-indigo-700 text-2xl font-bold">WD Skills</h1>
      </div>
      
      {/* Links */}
      <nav>
        <ul className="md:flex md:gap-x-4 hidden cursor-pointer font-semibold text-indigo-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>

        {/* Hamburger Menu Button */}
        <div className="md:hidden text-indigo-700">
          <button className="text-4xl" onClick={toggleMenu} aria-label="Toggle menu">&#8801;</button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-indigo-200 text-center text-indigo-700 font-semibold z-50">
          <li className="py-2 border-b border-blue-500">
            <Link href="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="py-2 border-b border-blue-500">
            <Link href="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li className="py-2 border-b border-blue-500">
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
