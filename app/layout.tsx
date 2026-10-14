import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/nav-bar";

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
        <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center bg-background/90 py-4 backdrop-blur-sm">
          <ul className="flex justify-center gap-20">
            <li className="rounded-full bg-border/12 p-2 shadow-sm">
              <Link href="https://drive.google.com/file/d/1RHU1OCzJePOCpgIsMqjjTRIitFOLrrXP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/cv.png" alt="cv" width={32} height={32} />
              </Link>
            </li>
            <li className="rounded-full bg-border/12 p-2 shadow-sm">
              <Link href="https://www.linkedin.com/in/benjaminvidala/" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/linkedin.png" alt="linkedin" width={32} height={32} />
              </Link>
            </li>
            <li className="rounded-full bg-border/12 p-2 shadow-sm">
              <Link href="https://github.com/benjavidala" target="_blank" rel="noopener noreferrer">
                <Image src="/icons/github.png" alt="github" width={32} height={32} />
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
