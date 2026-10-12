
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
    {
        src: "/projects/ejp_project.webp",
        alt: "Vista del proyecto 1",
        title: "Proyecto de ejemplo 1",
        description:
            "Sistema diseñado para gestionar información y automatizar procesos mediante una interfaz intuitiva.",
        technologies: ["Python", "PostgreSQL", "Tailwind CSS"],
    },
    {
        src: "/projects/ejp_project2.webp",
        alt: "Vista del proyecto 2",
        title: "Proyecto de ejemplo 2",
        description:
            "Aplicación enfocada en organizar datos, mejorar la experiencia de usuario y facilitar las tareas habituales.",
        technologies: ["Next.js", "TypeScript", "React"],
    },
    {
        src: "/projects/ejp_projects1.jpg",
        alt: "Vista del proyecto 3",
        title: "Proyecto de ejemplo 3",
        description:
            "Herramienta para optimizar tareas repetitivas y presentar información de forma clara y estructurada.",
        technologies: ["Python", "SQL", "Testing QA"],
    },
];

export default function ProjectViewer() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const project = projects[activeIndex];

    function previousProject() {
        setActiveIndex((current) =>
            (current - 1 + projects.length) % projects.length
        );
    }

    function nextProject() {
        setActiveIndex((current) =>
            (current + 1) % projects.length
        );
    }

    useEffect(() => {
        if (paused) return;

        const timer = setInterval(() => {
            setActiveIndex((current) =>
                (current + 1) % projects.length
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [paused]);

    return (
        <section
            aria-label="Proyectos destacados"
            className="mx-auto w-full max-w-6xl px-4 py-8"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                    setPaused(false);
                }
            }}
        >
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">

                {/* Descripción a la izquierda */}
                <div className="flex flex-col items-start gap-5">
                    <p className="text-sm uppercase tracking-widest text-neutral-400">
                        Proyecto {activeIndex + 1} / {projects.length}
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        {project.title}
                    </h2>

                    <p className="max-w-lg leading-7 text-neutral-400">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-white/15 px-3 py-1 text-sm"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* Navegación */}
                    <div className="mt-3 flex  items-center gap-4">
                        <button
                            type="button"
                            onClick={previousProject}
                            aria-label="Proyecto anterior"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
                        >
                            <span aria-hidden="true">←</span>
                        </button>

                        <div className="flex items-center gap-2">
                            {projects.map((item, index) => (
                                <button
                                    key={item.src}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    aria-label={`Mostrar proyecto ${index + 1}`}
                                    aria-current={
                                        activeIndex === index ? "true" : undefined
                                    }
                                    className={`h-2.5 rounded-full transition-all ${
                                        activeIndex === index
                                            ? "w-8 bg-white"
                                            : "w-2.5 bg-white/30 hover:bg-white/60"
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            onClick={nextProject}
                            aria-label="Proyecto siguiente"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
                        >
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>

                {/* Imagen principal a la derecha */}
                <div className="relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                    <div className="relative aspect-[4/3] w-full">
                        <Image
                            key={project.src}
                            src={project.src}
                            alt={project.alt}
                            fill
                            priority={activeIndex === 0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain p-3"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
