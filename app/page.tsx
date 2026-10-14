import Image from "next/image";
import { Tecnologias } from "./components/tech-icon";
import ContactMe from "./components/contactme";
import ProjectViewer from "./components/proyectcview";
import {FadeIn} from "./components/animations";

export default function Home() {
  return (
    <>
      {/*Hero Presentation*/}
      <div id="Inicio" className="min-h-[calc(100vh-2rem)] flex flex-col lg:flex-row justify-center items-center lg:gap-16 max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        
        {/* Columna izquierda: Hero + About agrupados */}
        <div  className="flex flex-col  items-center ">
          <section className="flex flex-col justify-center mt-14">
            <span className="flex items-center text-sm sm:justify-center lg:justify-start sm:text-lg lg:text-lg font-bold">Software Engineer</span>
            <span className="flex text-2xl sm:text-4xl sm:justify-center lg:justify-start lg:text-5xl font-bold">Hola,soy</span>
            <h1 className="flex text-4xl sm:text-6xl lg:text-8xl font-black">Benjamin Vidal</h1>
          </section>

          <section className="justify-center  p-4 rounded-lg bg-border/12 shadow-md max-w-2xl mt-4 px-4 ">
            <FadeIn>
            <p className="font-bold">
              Backend Developer. Pienso en profundidad,
              diseño con intención y pongo todo a prueba antes de dar nada por terminado. Creo en construir en
              equipo
            </p>
            </FadeIn>
            <p className="mt-4">
              <span className=" flex text-xs justify-center sm:text-lg lg:text-xl font-black">
                — las mejores soluciones nacen de distintos puntos de vista.
              </span>
            </p>
          </section>

        </div>

        {/* Columna derecha: foto*/}
        <section className="flex flex-col">

          <Image className="object-contain" src="/photos/foto pagina.png" loading="eager" alt="foto perfil" width={400} height={400}  />

          <p>
            <span className= "flex text-xs justify-center items-center">
              Backend · Python · SQL · QA
            </span>
          </p>
        </section>

      </div>
        <section id="Tecnologias" className="flex min-h-screen flex-col">

         <Tecnologias />

        </section>
        
        <section id="Proyectos" className="">

          <ProjectViewer />


        </section>

        <section id="Contacto" className="min-h-screen">

          <ContactMe />

          


        </section>
    </>
  );
}