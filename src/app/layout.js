import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar di atas
import Footer from "@/components/Footer"; // <--- Tambahan 1: Import Footer
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tubagus Paradisa - Full Stack Developer dan Cyber Security Engineer",
  description: "Portfolio resmi Tubagus Paradisa. Web Development dan Cyber Security Engineer.",
  icons: {
    icon: '/favicon.ico', // Pastikan kamu punya logo kecil (favicon) di folder public
  },
  openGraph: {
    title: "Tubagus Paradisa - Portfolio",
    description: "Lihat karya dan projek terbaru saya.",
    // Kamu bisa tambah gambar preview di sini nanti
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <Footer /> {/* <--- Tambahan 2: Footer di paling bawah */}
      </body>
    </html>
  );
}