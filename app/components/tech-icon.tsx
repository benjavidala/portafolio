import Image from "next/image";

type TechIconProps = {
  src: string;
  alt: string;
};

export default function TechIcon({ src, alt }: TechIconProps) {
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

export function Tecnologias() {
  return (
    <section id="Tecnologias" className="flex min-h-screen flex-col">
          <p className="flex justify-center font-black text-xs sm:text-xl lg:text-4xl  py-5 sm:py-10 lg:py-20">Mi Stack para construir y desarrollar aplicaciones</p>
          <div className="flex flex-col items-center  ">  
            <div className="flex flex-col items-center rounded-lg bg-border/12 shadow-md px-6 sm:px-10 lg:px-20 py-2 sm:py-4 lg:py-6">
            <p className="text-xl font-bold py-10">Backend & Data
            </p>
            <ul className="flex flex-row gap-5  sm:gap-10 lg:gap-20" >
              {backendIcons.map(({src,alt}) => (
                <TechIcon key={src} src={src} alt={alt} />
              ))}
            </ul>     
            <ul className="flex flex-row gap-5  sm:gap-10 lg:gap-20  mt-2 sm:mt-5 mt-10">
              
              {backendIcons2.map(({src,alt}) => (
                <TechIcon key={src} src={src} alt={alt} />  
              ))}

            </ul>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 sm:gap-10 lg:gap-20 justify-center mt-8 sm:mt-10 lg:mt-20 px-4 sm:px-8 lg:px-16 py-4  ">
            <div className=" flex flex-col rounded-lg bg-border/12 shadow-md mt-5 sm:mt-10 lg:mt-20  px-5 sm:px-10 lg:px-20  py-2 sm:py-4 lg:py-6">
            <p className="flex justify-center text-xl font-bold py-10">Frontend</p>

            <ul className="flex flex-row gap-5  sm:gap-10 lg:gap-20">

              {frontendIcons.map(({src,alt}) => (
                <TechIcon key={src} src={src} alt={alt} />
              ))
              }

            </ul>

            <ul className="flex flex-row gap-5  sm:gap-10 lg:gap-20 mt-2 sm:mt-5 mt-10">
              {frontendIcons2.map(({src,alt}) => (
                <TechIcon key={src} src={src} alt={alt} />
              ))  
              } 
            </ul >
            
            </div>

            <div className="flex flex-col rounded-lg bg-border/12 shadow-md mt-8 sm:mt-10 lg:mt-20 px-4 sm:px-8 lg:px-16 py-4  " >
             <p className="flex justify-center text-xl font-bold py-10">Herramientas</p>

            <ul className="flex flex-row gap-5  sm:gap-10 lg:gap-20">
              {herramientasIcons.map(({src,alt}) => (
                <TechIcon key={src} src={src} alt={alt} />
              ))
              }
            </ul>
            <ul className="flex flex-row gap-5  sm:gap-10 lg:gap-20 mt-2 sm:mt-4 lg:mt-10">
              {herramientasIcons2.map(({src,alt}) => (
                <TechIcon key={src} src={src} alt={alt} />
              ))
              }
            </ul>
            </div>
          </div>
        </div>
        </section>
  );
}