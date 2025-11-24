'use client'; // <--- WAJIB ADA: Karena kita pakai interaksi (Klik)

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup menu

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity">
          Portfolio.
        </Link>

        {/* --- MENU DESKTOP (Hidden di HP) --- */}
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="text-gray-300 hover:text-white transition-colors">Home</Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Tombol GitHub (Desktop) */}
        <a 
          href="https://github.com/tubagusparadisa" // Ganti username githubmu
          target="_blank"
          className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all"
        >
          GitHub
        </a>

        {/* --- TOMBOL HAMBURGER (Hanya Muncul di HP) --- */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {/* Kalau menu terbuka (isOpen=true), tampilkan ikon X. Kalau tertutup, tampilkan Garis 3 */}
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* --- MENU MOBILE (Muncul jika isOpen = true) --- */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800 px-6 pb-6 pt-2 shadow-xl animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#home" 
              className="text-gray-300 hover:text-blue-400 transition-colors block"
              onClick={() => setIsOpen(false)} // Tutup menu saat diklik
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-gray-300 hover:text-blue-400 transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="#projects" 
              className="text-gray-300 hover:text-blue-400 transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-300 hover:text-blue-400 transition-colors block"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            {/* Tombol GitHub di Mobile */}
            <a 
              href="https://github.com/vandiza13"
              target="_blank"
              className="inline-block text-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}