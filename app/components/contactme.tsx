"use client";

import { motion } from "motion/react";
import type { MouseEvent } from "react";

const EMAIL = "be.vidala@gmail.com";
const ASUNTO = "Contacto desde tu portafolio";

const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(ASUNTO)}`;
const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(ASUNTO)}`;

export default function ContactMe() {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    const esTactil = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    alert(esTactil); // temporal

    if (!esTactil) {
      e.preventDefault();
      window.open(gmail, "_blank", "noopener,noreferrer");
    }
  }

    return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-1 sm:gap-2 lg:gap-5">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg font-bold sm:text-2xl lg:text-3xl"
      >
        ¡Trabajemos Juntos!
      </motion.p>

      <p className="flex items-center justify-center text-xs sm:text-xl lg:text-2xl">
        Escríbeme siempre estoy atento a nuevas oportunidades.
      </p>

      <motion.a
        href={mailto}
        onClick={handleClick}
        initial={{ backgroundColor: "#6a6060" }}
        whileInView={{ backgroundColor: "#3f3939" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 rounded-full px-4 py-2 font-bold text-white sm:mt-6 sm:px-6 sm:py-4 lg:mt-8 lg:px-8"
      >
        Conversemos
      </motion.a>
    </div>
  );
}
