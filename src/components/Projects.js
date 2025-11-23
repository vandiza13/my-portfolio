import Link from "next/link";

const projectData = [
  {
    title: "Dashboard Monitoring",
    description: "Sistem monitoring tiket dan data visualisasi untuk memantau performa jaringan secara real-time.",
    tech: ["Next.js", "Chart.js", "Tailwind"],
    link: "https://dashboard-tiket-app.vercel.app", // Ganti dengan link asli nanti
  },
  {
    title: "Aplikasi Warga",
    description: "Platform digital untuk komunitas RT/RW, memudahkan transparansi kas dan komunikasi antar warga.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    link: "#",
  },
  {
    title: "Fiber Optic Viewer",
    description: "Web App untuk melihat jalur kabel fiber optik dan lokasi tower BTS berbasis data KMZ/Google Earth.",
    tech: ["JavaScript", "Google Maps API"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Judul Section */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projek <span className="text-blue-500">Unggulan</span>
        </h2>

        {/* Grid Kartu */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all hover:-translate-y-2 shadow-lg"
            >
              {/* Placeholder Gambar (Kotak warna dulu) */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                <span className="text-gray-400 text-4xl">💻</span>
              </div>

              {/* Isi Kartu */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 h-20">
                  {project.description}
                </p>
                
                {/* Tags Teknologi */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-900">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Tombol */}
                <Link 
                  href={project.link}
                  className="block text-center w-full py-2 bg-white/5 hover:bg-blue-600 hover:text-white text-gray-300 rounded-lg transition-colors text-sm font-medium"
                >
                  Lihat Detail &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}