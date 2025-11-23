import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar di atas
import Footer from "@/components/Footer"; // <--- Tambahan 1: Import Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Saya",
  description: "Web Portfolio Professional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <Navbar />
        {children}
        <Footer /> {/* <--- Tambahan 2: Footer di paling bawah */}
      </body>
    </html>
  );
}