'use client'; 

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // GANTI string ini dengan ID Formspree kamu
  const [state, handleSubmit] = useForm("movbbyzn"); 

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gray-900 p-8 rounded-2xl border border-green-900">
                <h2 className="text-3xl font-bold text-green-500 mb-4">Message Sent! ✅</h2>
                <p className="text-gray-400">Thanks for reaching out. I'll get back to you shortly via email.</p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="mt-6 text-sm text-gray-500 underline hover:text-white"
                >
                    Send another message
                </button>
            </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's <span className="text-purple-500">Collaborate</span>
          </h2>
          <p className="text-gray-400">
            Have an interesting project? Or just want to say hi? <br />
            Fill out the form below, and I'll reply ASAP.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input id="name" type="text" name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" required />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input id="email" type="email" name="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="email@example.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell me about your project..." required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            <button 
              type="submit" 
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Send Message 🚀"}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}