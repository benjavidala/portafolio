import Image from "next/image";

export default function TechIcon({ src, alt }) {
  return (
    <li className="flex h-10 w-10 items-center justify-center">
      <Image src={src} alt={alt} width={30} height={30} className="h-full w-full object-contain" />
    </li>
  );
}

export  const backendIcons = [
    {src:"/tecnologias/mysql-icon.svg", alt:"Icono de MySQL"},
    {src:"/tecnologias/python.svg", alt:"Icono de Python"},
    {src:"/tecnologias/postgresql.svg", alt:"Icono de PostgreSQL"}
];

export const backendIcons2 = [
    {src:"/tecnologias/mongodb-icon.svg", alt:"Icono de MongoDB"},
    {src:"/tecnologias/fastapi-icon.svg", alt:"FastApi"},
    {src:"/tecnologias/django-icon.svg", alt:"Django"}

];


export const frontendIcons = [
    {src:"/tecnologias/css.svg", alt:"Icono de CSS"},
    {src:"/tecnologias/html-5.svg", alt:"Icono de HTML5"},
    {src:"/tecnologias/nextjs-icon.svg", alt:"Icono de Next.js"}
    

];

export const frontendIcons2 = [

    {src:"/tecnologias/typescript-icon.svg", alt:"Icono de TypeScript"},
    {src:"/tecnologias/tailwindcss-icon.svg", alt:"Icono de Tailwind CSS"},
    {src:"/tecnologias/javascript.svg", alt:"Icono de JavaScript"},

];

export const herramientasIcons = [
    {src:"/tecnologias/postman-icon.svg", alt:"Icono de Postman"},
    {src:"/tecnologias/docker-icon.svg", alt:"Icono de Docker"},
    {src:"/tecnologias/git-icon.svg", alt:"Icono de Git"},
];

export const herramientasIcons2 = [
    {src:"/tecnologias/github.svg", alt:"Icono de GitHub"},
    {src:"/tecnologias/claude-code.svg", alt:"Icono de Claude Code"},
    {src:"/tecnologias/visual-studio-code.svg", alt:"Icono de Visual Studio Code"}
];