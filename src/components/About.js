import Image from "next/image";

// Kita gabungkan skill Dev & Security biar terlihat 'Hybrid'
const skills = [
  "Next.js", "React", "Node.js", "Tailwind CSS", // Web Dev
  "Cyber Security", "Penetration Testing", "OWASP Top 10", // Security
  "Burp Suite", "MySQL", "Linux", "Git" // Tools & OS
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* BAGIAN KIRI: FOTO (Pastikan file profile.jpg ada di folder public) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="/profile.png" 
                  alt="Foto Profil Tubagus Paradisa" 
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
            
            <h3 className="text-xl font-medium text-gray-300 mb-3">
              Web Developer & Security Enthusiast
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Halo! Saya Tubagus Paradisa. Di era digital yang penuh risiko, sekadar "bisa online" tidak cukup. 
              Saya menggabungkan keahlian <b>Fullstack Development</b> dengan pola pikir <b>Cyber Security</b>.
              <br /><br />
              Fokus utama saya adalah menciptakan aplikasi yang tidak hanya responsif dan modern secara visual, 
              tetapi juga memiliki arsitektur yang aman dari celah kerentanan (<i>Secure by Design</i>).
            </p>

            {/* Statistik Singkat */}
            <div className="flex gap-8 mb-8 border-l-4 border-blue-500 pl-4">
              <div>
                <h3 className="text-2xl font-bold text-white">2+</h3>
                <p className="text-sm text-gray-500">Tahun Pengalaman</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">10+</h3>
                <p className="text-sm text-gray-500">Projek & Audit</p>
              </div>
            </div>

            {/* Daftar Skill */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-white">Tech Stack & Tools:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full text-sm border transition-colors cursor-default 
                      ${index < 4 
                        ? 'bg-blue-900/20 text-blue-300 border-blue-800 hover:border-blue-500' // Gaya untuk Web Dev
                        : 'bg-red-900/20 text-red-300 border-red-800 hover:border-red-500' // Gaya untuk Security
                      }`}
                  >
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