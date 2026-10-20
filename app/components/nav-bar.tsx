"use client";

import Image from "next/image";
import { motion } from "motion/react";



type NavItemsProps = {
  href: string;
  label: string;
};

const links = [
    { href: "#Inicio", label: "Inicio" },
    { href: "#Tecnologias", label: "Tecnologias" },
    { href: "#Proyectos", label: "Proyectos" },
    { href: "#Contacto", label: "Contacto" },
];

export function NavItem({ href, label }: NavItemsProps) {
  return (
    <motion.li className="rounded-3xl bg-border/10 p-2 font-bold shadow-sm"
    whileTap={{scale:0.95}}
    whileHover={{scale:1.25}}
    >
      <a href={href}>{label}</a>
    </motion.li>
  );
}
      
export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 flex flex-col items-center gap-4 bg-background/90 px-4 backdrop-blur-sm sm:px-8 lg:flex-row lg:gap-0 lg:pt-8">
      <div className="mt-1 flex justify-center lg:flex-1 lg:justify-start">
        <motion.a href = "https://portafolio-psi-gules-18.vercel.app/"
          whileTap={{scale:0.95}}
          whileHover={{scale:1.25}}
        >
            <Image 
              src="/icons/logo_home.svg"
              alt="logo_home"
              width={180}
              height={200}
              className="h-auto w-[auto] sm:w-[180px] py-2"
              style={{ height: "auto" }}
            />
        </motion.a>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-xs sm:gap-4 sm:text-base lg:flex-nowrap lg:text-lg">
        {links.map((link) => (
          <NavItem key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
      <div className="hidden flex-1 lg:block" />
    </nav>
    
  );
}     
    

 

