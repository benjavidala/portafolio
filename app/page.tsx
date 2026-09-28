import Image from "next/image";

export default function Home() {
  return (
    <>
      {/*Hero Presentation*/}
      <div id="Inicio" className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16 max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        
        {/* Columna izquierda: Hero + About agrupados */}
        <div  className="flex flex-col  items-center ">
          <section className="flex flex-col justify-center mt-12">
            <span className="flex items-center text-sm sm:text-lg lg:text-lg font-bold">Software Engineer</span>
            <span className="text-2xl sm:text-4xl lg:text-5xl font-bold">Hola,soy</span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black">Benjamin Vidal</h1>
          </section>

          <section className="justify-center p-4 rounded-lg bg-border/12 shadow-md max-w-2xl mt-4 px-4 ">
            <p className="font-bold">
              Backend Developer. Pienso en profundidad,
              diseño con intención y pongo todo a prueba antes de dar nada por terminado. Creo en construir en
              equipo
            </p>
            <p className="mt-4">
              <span className="text-xs sm:text-lg lg:text-xl font-black">
                — las mejores soluciones nacen de distintos puntos de vista.
              </span>
            </p>
          </section>

        </div>

        {/* Columna derecha: foto*/}
        <section className="flex flex-col">

          <Image src="/photos/foto pagina.png" loading="eager" alt="foto perfil" width={400} height={400} />

          <p>
            <span className= "flex text-xs justify-center items-center">
              Backend · Python · SQL · QA
            </span>
          </p>

        </section>
      </div>

      <section id="Tecnologias" className="min-h-screen">
          <div className="flex flex-col">  
            <p>
              Tecnologias
            </p>

            <ul className="flex flex-row">
              <li>
               <Image src="/tecnologias/mysql-icon.svg" alt="Icono de MySQL" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/python.svg" alt="Icono de Python" width={30} height={30}/>
              </li> 
              <li>
               <Image src="/tecnologias/postgresql.svg" alt="Icono de PostgreSQL" width={30} height={30}/>
              </li>     
            </ul>

            <ul className="flex flex-row">
              <p>Frontend</p>
              <li>
               <Image src="/tecnologias/css.svg" alt="Icono de CSS" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/html-5.svg" alt="Icono de HTML5" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/nextjs-icon.svg" alt="Icono de Next.js" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/typescript-icon.svg" alt="Icono de TypeScript" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/tailwindcss-icon.svg" alt="Icono de Tailwind CSS" width={30} height={30}/>
              </li>
              
            </ul >

            <ul className="flex flex-row">
              <p>Herramientas y flujo de trabajo</p>
              <li>
               <Image src="/tecnologias/postman-icon.svg" alt="Icono de Postman" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/docker-icon.svg" alt="Icono de Docker" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/git-icon.svg" alt="Icono de Git" width={30} height={30}/>
              </li>
              <li>
               <Image src="/tecnologias/github-icon.svg" alt="Icono de GitHub" width={30} height={30}/>
              </li>

            </ul>


            <ul className="flex flex-row">
              <p>Diseño y Desarrollo</p>
              <li>
               <Image src="/tecnologias/visual-studio-code.svg" alt="Icono de Visual Studio Code" width={30} height={30}/>
              </li>

              <li>
               <Image src="/tecnologias/figma.svg" alt="Icono de Figma" width={30} height={30}/>
              </li>

              <li>
               <Image src="/tecnologias/claude-code.svg" alt="Icono de Claude Code" width={30} height={30}/>
              </li>

            </ul>
            <ul className="flex flex-row">
              <li>
                <p>Autenticacion</p>
               <Image src="/tecnologias/clerk-icon.svg" alt="Icono de Clerk" width={30} height={30}/>
              </li>
            </ul>

          </div>
        </section>

        <section id="Proyectos" className="min-h-screen">


        </section>

        <section id="Contacto" className="min-h-screen">


        </section>
    </>
  );
}