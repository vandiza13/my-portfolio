import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Nama */}
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 hover:opacity-80 transition-opacity">
          Portfolio.
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-8">
          <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Tombol CTA Kecil */}
        <a 
          href="https://github.com/" 
          target="_blank"
          className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10 rounded-full hover:bg-white/20 transition-all"
        >
          GitHub
        </a>

      </div>
    </nav>
  );
}