import Image from "next/image";
import { Tecnologias } from "./components/tech-icon";
import ContactMe from "./components/contactme";
import ProjectViewer from "./components/proyectcview";
import {HiAnimation, RollAnimation , NameAnimation , RollAnimationImage} from "./components/animations";

export default function Home() {
  return (
    <>
      {/*Hero Presentation*/}
    
      <div id="Inicio" className="min-h-[calc(125dvh-2rem)] pt-24 sm:pt-28 lg:pt-0 flex flex-col lg:flex-row justify-center items-center lg:gap-16 max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        
        {/* Columna izquierda: Hero + About agrupados */}
        <div  className="flex flex-col  items-center ">
          <section className="flex flex-col justify-center ">

            <RollAnimation className="flex items-center text-sm sm:justify-center lg:justify-start sm:text-lg lg:text-lg font-bold">
            Software Engineer
            </RollAnimation>
            <HiAnimation className="flex text-2xl sm:text-4xl sm:justify-center lg:justify-start lg:text-5xl font-bold">
            Hola,soy
            </HiAnimation>
        
            <NameAnimation words={["Benjamin", "Vidal"]} className="flex text-4xl sm:text-6xl lg:text-8xl font-black" />


          </section>

          <section className="justify-center  p-4 rounded-lg bg-border/12 shadow-md max-w-2xl mt-4 px-4 ">
            
            <p className="text-center">
              Ingeniero En Informatica. Pienso en profundidad,
              diseño con intención y pongo todo a prueba antes de dar nada por terminado. Creo en construir en
              equipo
            </p>
            
            <p className="mt-4">
              <span className=" flex text-xs text-center px-6 sm:text-lg lg:text-xl font-black">
                — las mejores soluciones nacen de distintos puntos de vista.
              </span>
            </p>
          </section>

        </div>

        {/* Columna derecha: foto*/}
        <section className="flex flex-col">

          <Image className="object-contain" src="/photos/foto pagina.png" loading="eager" alt="foto perfil" width={400} height={400}  />

          <p>
            <RollAnimationImage className= "flex text-xs justify-center items-center">
            
              Web Dev · Python · SQL · QA
            </RollAnimationImage>
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