'use client'; // WAJIB ADA karena kita pakai Hooks (useForm)

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // GANTI string di bawah ini dengan ID Formspree kamu (misal: "xgnpqzyw")
  const [state, handleSubmit] = useForm("movbbyzn");

  // Tampilan kalau pesan BERHASIL terkirim
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gray-900 p-8 rounded-2xl border border-green-900">
                <h2 className="text-3xl font-bold text-green-500 mb-4">Pesan Terkirim! ✅</h2>
                <p className="text-gray-400">Terima kasih sudah menghubungi. Saya akan membalas secepatnya via email.</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-6 text-sm text-gray-500 underline hover:text-white"
                >
                    Kirim pesan lagi
                </button>
            </div>
        </div>
      </section>
    );
  }

  // Tampilan Form Utama
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mari <span className="text-purple-500">Berkolaborasi</span>
          </h2>
          <p className="text-gray-400">
            Punya ide projek menarik? Isi formulir di bawah ini, saya akan membalas secepatnya.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Input Nama */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Nama</label>
                <input 
                  id="name"
                  type="text" 
                  name="name" // Attribute 'name' WAJIB ada untuk Formspree
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              
              {/* Input Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  id="email"
                  type="email" 
                  name="email" // Attribute 'name' WAJIB ada
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="email@contoh.com"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            {/* Input Pesan */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Pesan</label>
              <textarea 
                id="message"
                name="message" // Attribute 'name' WAJIB ada
                rows="4"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Ceritakan tentang projek Anda..."
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Tombol Kirim */}
            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Mengirim..." : "Kirim Pesan 🚀"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}