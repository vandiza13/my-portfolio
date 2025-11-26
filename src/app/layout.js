import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar di atas
import Footer from "@/components/Footer"; // <--- Tambahan 1: Import Footer
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tubagus Paradisa | Web Developer & Security Engineer",
  description: "Official Portfolio of Tubagus Paradisa. Specializing in Secure Fullstack Development (Next.js) and Cyber Security (Penetration Testing).",
  keywords: ["Web Developer", "Cyber Security", "Next.js", "React", "Portfolio", "Tubagus Paradisa"],
  authors: [{ name: "Tubagus Paradisa" }],
  openGraph: {
    title: "Tubagus Paradisa - DevSecOps Portfolio",
    description: "Building secure, scalable, and high-performance digital solutions.",
    url: "https://vandiza.my.id",
    siteName: "Tubagus Paradisa Portfolio",
    locale: "en_US", // Ubah jadi English
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