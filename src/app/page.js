import Projects from "@/components/Projects"; // <--- Tambahan 1

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900"> {/* Pastikan bg-gray-900 di sini juga */}
      
      {/* --- HERO SECTION (Yang tadi sudah dibuat) --- */}
      <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="z-10 text-center max-w-3xl">
          <p className="text-blue-400 font-medium tracking-widest mb-4 uppercase text-sm">
            Halo, Saya Tubagus Paradisa
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Membangun Solusi Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Yang Berdampak.
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Seorang Web Developer yang fokus pada performa, desain minimalis, 
            dan pengalaman pengguna yang interaktif.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
              Lihat Projek
            </button>
            <button className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-full font-medium transition-all">
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>

      {/* --- PROJECTS SECTION (Tambahan Baru) --- */}
      <Projects />  {/* <--- Panggil di sini */}

    </main>
  );
}