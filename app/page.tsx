import Image from "next/image";
import TechIcon , { backendIcons, backendIcons2, frontendIcons, frontendIcons2, herramientasIcons, herramientasIcons2 } from "./components/tech-icon";


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
            <p className="font-bold">
              Backend Developer. Pienso en profundidad,
              diseño con intención y pongo todo a prueba antes de dar nada por terminado. Creo en construir en
              equipo
            </p>
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

        <section id="Proyectos" className="min-h-screen">


        </section>

        <section id="Contacto" className="min-h-screen">

          <div>
            <p>Escribeme</p>
          </div>

          <div>
            <form action="">loremipsum@gmail.com</form>
          </div>

          <div>
            <button>Escribeme por gmail</button>
          </div>

          


        </section>
    </>
  );
}