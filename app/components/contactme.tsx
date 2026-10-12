


export default function ContactMe() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-1 sm:gap-2 lg:gap-5">   
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold">¡Trabajemos Juntos!</p>
            <p className="flex justify-center item-center text-xs sm:text-xl lg:text-2xl ">Escríbeme siempre estoy atento a nuevas oportunidades.</p>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=be.vidala@gmail.com"
               target="_blank"
               rel="noopener noreferrer"
            className="bg-animation hover:bg-extra text-white font-bold py-2 sm:py-4 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-full transition duration-300 gap-2 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8">
                Conversemos
            </a>
        </div>
    );
 }
