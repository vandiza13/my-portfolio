import Image from "next/image";

const skills = [
  "Next.js", "React", "Tailwind CSS", "Node.js", 
  "MySQL", "Git", "Figma", "Vercel"
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* BAGIAN KIRI: FOTO */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              {/* Bingkai Foto */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* 👇 BAGIAN INI YANG DIGANTI UNTUK MENAMPILKAN FOTO */}
                <Image 
                  src="/profile.png" // Next.js otomatis tahu ini ada di folder public
                  alt="Foto Profil Vandiza" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* BAGIAN KANAN: KONTEN */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tentang <span className="text-blue-500">Saya</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Halo! Saya adalah pengembang web yang bersemangat menciptakan aplikasi digital yang fungsional dan estetis. 
              Saya percaya bahwa kode yang bersih dan desain yang baik dapat memecahkan masalah nyata.
              Saat ini, saya sedang fokus mendalami ekosistem JavaScript modern.
            </p>

            {/* Statistik Singkat (Opsional) */}
            <div className="flex gap-8 mb-8 border-l-4 border-blue-500 pl-4">
              <div>
                <h3 className="text-2xl font-bold text-white">2+</h3>
                <p className="text-sm text-gray-500">Tahun Coding</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">10+</h3>
                <p className="text-sm text-gray-500">Projek Selesai</p>
              </div>
            </div>

            {/* Daftar Skill */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Teknologi yang dikuasai:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}