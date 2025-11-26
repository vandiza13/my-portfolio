import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white">Portfolio.</h3>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 Built with Next.js & Tailwind CSS.
          </p>
        </div>
        {/* Kanan: Sosial Media */}
        <div className="flex gap-6">
          <a href="https://github.com/vandiza13/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tubagusparadisa/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
            LinkedIn
          </a>
          <a href="tb.vandiza13@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}