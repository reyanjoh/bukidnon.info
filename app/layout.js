import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components-global/Nav";
import Footer from "./components-global/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bukidnon.info",
  description: "Bukidnon.info | a platform for the people of Bukidnon to get the latest news and updates about the province.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
     

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
