"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";

type TechIconProps = {
  src: string;
  alt: string;
  nombre: string;

};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const frontendIcons: TechIconProps[] = [
  { src: "/tecnologias/css.svg", alt: "Icono de CSS", nombre: "CSS" },
  { src: "/tecnologias/html-5.svg", alt: "Icono de HTML5", nombre: "HTML5" },
  { src: "/tecnologias/nextjs-icon.svg", alt: "Icono de Next.js", nombre: "Next.js" },
  { src: "/tecnologias/typescript-icon.svg", alt: "Icono de TypeScript", nombre: "TypeScript" },
  { src: "/tecnologias/tailwindcss-icon.svg", alt: "Icono de Tailwind CSS", nombre: "Tailwind" },
  { src: "/tecnologias/javascript.svg", alt: "Icono de JavaScript", nombre: "JavaScript" },
];

const backendIcons: TechIconProps[] = [
  { src: "/tecnologias/mysql-icon.svg", alt: "Icono de MySQL", nombre: "MySQL" },
  { src: "/tecnologias/python.svg", alt: "Icono de Python", nombre: "Python" },
  { src: "/tecnologias/postgresql.svg", alt: "Icono de PostgreSQL", nombre: "PostgreSQL" },
  { src: "/tecnologias/mongodb-icon.svg", alt: "Icono de MongoDB", nombre: "MongoDB" },
  { src: "/tecnologias/fastapi-icon.svg", alt: "Icono de FastAPI", nombre: "FastAPI" },
  { src: "/tecnologias/django-icon.svg", alt: "Icono de Django", nombre: "Django" },
];

const herramientasIcons: TechIconProps[] = [
  { src: "/tecnologias/postman-icon.svg", alt: "Icono de Postman", nombre: "Postman" },
  { src: "/tecnologias/docker-icon.svg", alt: "Icono de Docker", nombre: "Docker" },
  { src: "/tecnologias/git-icon.svg", alt: "Icono de Git", nombre: "Git" },
  { src: "/tecnologias/github.svg", alt: "Icono de GitHub", nombre: "GitHub" },
  { src: "/tecnologias/claude-code.svg", alt: "Icono de Claude Code", nombre: "ClaudeCode" },
  { src: "/tecnologias/visual-studio-code.svg", alt: "Icono de Visual Studio Code", nombre: "VSCode" },
];

const categorias = [
  { titulo: "Frontend", iconos: frontendIcons },
  { titulo: "Backend & Data", iconos: backendIcons },
  { titulo: "Herramientas", iconos: herramientasIcons },
];

const card: Variants = {
  hidden: {  },
  visible: {
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconsContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

export default function TechIcon({ src, alt, nombre }: TechIconProps) {
  return (
    <motion.li 
    variants={item}
    className="mx-auto flex w-20 flex-col items-center gap-1">
      <div className="h-6 w-6 sm:h-8 sm:w-8">
        <Image
          src={src}
          alt={alt}
          width={30}
          height={30}
          className="h-full w-full object-contain"
        />
      </div>
      <span className="text-sm font-bold">{nombre}</span>
    </motion.li>
  );
}

export function Tecnologias() {
  return (
    <div className="flex w-full flex-col pt-24 sm:pt-28 lg:pt-32">
      <motion.p className="py-5 text-center text-xl font-black sm:py-10 sm:text-2xl lg:text-4xl"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 , delay: 0.5 }}
      >
        Mi Stack para construir y desarrollar aplicaciones
      </motion.p>

    
      <motion.div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
      
      >
        {categorias.map(({ titulo, iconos }) => (
  
          <motion.div key={titulo} variants={card}
            className="flex h-full flex-col items-center rounded-lg bg-border/12 px-6 pb-8 shadow-md"
          >
            <p className="py-8 text-xl font-bold">{titulo}</p>

            
            <motion.ul 
            variants={iconsContainer}
            className="grid w-full grid-cols-3 gap-y-6">
              {iconos.map(({ src, alt, nombre }) => (
                <TechIcon key={src} src={src} alt={alt} nombre={nombre} />
              ))}
              
            </motion.ul>
            
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}