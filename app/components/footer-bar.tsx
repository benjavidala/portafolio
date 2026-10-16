"use client"


import Link from "next/link";
import Image from "next/image";
import {motion} from "motion/react"

const footerItem = [
    {
        href: "https://drive.google.com/file/d/1RHU1OCzJePOCpgIsMqjjTRIitFOLrrXP/view?usp=drive_link",
        src: "/icons/cv.png",
        alt: "cv",
    },
    {
        href: "https://www.linkedin.com/in/benjaminvidala/",
        src: "/icons/linkedin.png",
        alt: "linkedin",
    },
    {
        href: "https://github.com/benjavidala",
        src: "/icons/github.png",
        alt: "github",
    }
];

type FooterItemProps = {
  href: string;
  src: string;
  alt: string;
};

export function FooterItem({ href, src, alt }: FooterItemProps) {
    return (
        <motion.li className="rounded-full bg-border/12 p-2 shadow-sm"
        whileTap={{scale:0.95}}
        whileHover={{scale:1.25}}
        >
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <Image src={src} alt={alt} width={32} height={32} />
            </Link>
        </motion.li>
    );
}

export default function FooterBar() {

    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center bg-background/90 py-4 backdrop-blur-sm">
            <ul className="flex justify-center gap-20">
                {footerItem.map(({ href, src, alt }) => (
                    <FooterItem key={src} href={href} src={src} alt={alt} />
                ))}     
            </ul>
        </footer>
                
    );  
}
