import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
        <nav className="fixed left-0 right-0 top-0 z-40 flex flex-col items-center gap-4 bg-background/90 px-4 backdrop-blur-sm sm:px-8 lg:flex-row lg:gap-0 lg:pt-8">
          <div className="mt-1 flex justify-center lg:flex-1 lg:justify-start">
            <a href="#Inicio">
              <Image
                src="/icons/logo_home.svg"
                alt="logo_home"
                width={180}
                height={200}
                className="h-auto w-[140px] sm:w-[180px]"
                style={{ height: "auto" }}
              />
            </a>
          </div>

          <ul className="flex flex-wrap justify-center gap-2 text-xs sm:gap-4 sm:text-base lg:flex-nowrap lg:text-lg">
            <li className="rounded-full bg-border/12 p-2 font-bold shadow-sm">
              <a href="#Inicio">Inicio</a>
            </li>
            <li className="rounded-full bg-border/12 p-2 font-bold shadow-sm">
              <a href="#Tecnologias">Tecnologias</a>
            </li>
            <li className="rounded-full bg-border/12 p-2 font-bold shadow-sm">
              <a href="#Proyectos">Proyectos</a>
            </li>
            <li className="rounded-full bg-border/12 p-2 font-bold shadow-sm">
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>

          <div className="hidden flex-1 lg:block" />
        </nav>

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
