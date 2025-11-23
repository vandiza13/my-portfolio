export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mari <span className="text-purple-500">Berkolaborasi</span>
          </h2>
          <p className="text-gray-400">
            Punya ide projek menarik? Atau sekadar ingin menyapa? <br />
            Isi formulir di bawah ini, saya akan membalas secepatnya.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <form className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Nama */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Nama</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nama Anda"
                />
              </div>
              
              {/* Input Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="email@contoh.com"
                />
              </div>
            </div>

            {/* Input Pesan */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Pesan</label>
              <textarea 
                rows="4"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Ceritakan tentang projek Anda..."
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <button 
              type="button" // Nanti diganti type="submit" kalau sudah ada backend
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
            >
              Kirim Pesan 🚀
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}