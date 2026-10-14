import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import FooterBar from "./components/footer-bar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin Vidal - Portafolio",
  description: "Portafolio profesional de Benjamin Vidal, Backend Developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen scroll-smooth flex-col">
        {/* nav */}
          <NavBar />

          <div className="hidden flex-1 lg:block" />

        {/* BODY-CONTENT */}
        <main className="flex flex-1 flex-col justify-center pb-6 pt-6">
          {children}
        </main>

        {/* footer */}

        <FooterBar />
        
      </body>
    </html>
  );
}
