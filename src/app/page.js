import Link from "next/link"; 
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      
      {/* HERO SECTION */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        
        {/* Background blobs tetap sama... */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="z-10 text-center max-w-4xl">
          <p className="text-blue-400 font-medium tracking-widest mb-4 uppercase text-sm">
            Hello, I'm Tubagus Paradisa
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Secure & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              High-Performance Web.
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Merging <b>Web Development</b> creativity with <b>Cyber Security</b> precision. 
            Building digital solutions that are not just fast, but resilient by design.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Link 
              href="#projects" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30"
            >
              View Projects
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full font-medium transition-all"
            >
              Contact Me
            </Link>
          </div>

        </div>
      </div>

      <About />
      <Projects />
      <Contact />

    </main>
  );
}