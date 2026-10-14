import Image from "next/image";


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
    <li className="rounded-full bg-border/12 p-2 font-bold shadow-sm">
      <a href={href}>{label}</a>
    </li>
  );
}
      
export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-40 flex flex-col items-center gap-4 bg-background/90 px-4 backdrop-blur-sm sm:px-8 lg:flex-row lg:gap-0 lg:pt-8">
      <div className="mt-1 flex justify-center lg:flex-1 lg:justify-start">
        <a href="#Inicio">
            <Image
              src="/icons/logo_home.svg"
              alt="logo_home"
              width={180}
              height={200}
              className="h-auto w-[140px] sm:w-[180px]"
              style={{ height: "auto" }}
            />
        </a>
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
    

 

