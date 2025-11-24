import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar di atas
import Footer from "@/components/Footer"; // <--- Tambahan 1: Import Footer
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tubagus Paradisa | Web Developer & Security Engineer",
  description: "Portfolio resmi Tubagus Paradisa. Spesialis Fullstack Development (Next.js) dan Cyber Security (Penetration Testing & Secure Coding).",
  keywords: ["Web Developer", "Cyber Security", "Next.js", "React", "Portfolio", "Tubagus Paradisa"],
  authors: [{ name: "Tubagus Paradisa" }],
  openGraph: {
    title: "Tubagus Paradisa - DevSecOps Portfolio",
    description: "Membangun solusi digital yang aman dan berkinerja tinggi.",
    url: "https://vandiza.my.id",
    siteName: "Tubagus Paradisa Portfolio",
    locale: "id_ID",
    type: "website",
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