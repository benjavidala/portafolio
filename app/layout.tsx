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
      <body className="min-h-screen flex flex-col scroll-smooth">
      
        {/*nav*/}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm mt-6 flex flex-col items-center gap-4 px-4 sm:px-8 lg:mt-8 lg:flex-row lg:gap-0">
  
          
          <div className="mt-1 flex justify-center lg:flex-1 lg:justify-start">
            <a href="#Inicio">
            <Image src="/icons/logo_home.svg" alt="logo_home" width={180} height={200} className="h-auto w-[140px] sm:w-[180px]" />
            </a>
          </div>

          
          <ul className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:flex-nowrap">
            <li className="font-bold bg-border/12 p-2 shadow-sm rounded-full">
              <a href="#Inicio">Inicio</a>
            </li>
            <li className="font-bold bg-border/12 p-2 shadow-sm rounded-full">
              <a href="#Tecnologias" className="font-bold">Tecnologias</a>
            </li>
            <li className="font-bold bg-border/12 p-2 shadow-sm rounded-full">
              <a href="#Proyectos">Proyectos</a>
            </li>
            <li className="font-bold bg-border/12 shadow-sm p-2 rounded-full">
              <a href="#Contacto">Contacto</a>
            </li>
          </ul>

          
          <div className="hidden flex-1 lg:block"></div>

        </nav>
        
        {/*BODY-CONTENT*/}
        <main className="flex-2 flex flex-col justify-center pt-24 pb-24">
          {children}
        </main>

        {/*footer*/}
        <footer className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center py-4"> 
          <ul className="flex justify-center gap-20 mt-8">
            <li className="bg-border/12 p-2 shadow-sm  rounded-full">
              <Link href="https://drive.google.com/file/d/1RHU1OCzJePOCpgIsMqjjTRIitFOLrrXP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/cv.png"  alt="cv" width={32} height={32} />
              </Link>
            </li>
            <li className="bg-border/12 p-2 shadow-sm  rounded-full" >
              <Link href="https://www.linkedin.com/in/benjaminvidala/" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.png" alt="linkedin" width={32} height={32} />
              </Link>
            </li>
            <li className="bg-border/12 p-2  shadow-sm rounded-full">
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
