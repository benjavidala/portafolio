// components/FadeIn.tsx
"use client";

import { motion, type HTMLMotionProps, type Variants } from "motion/react";


const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

type NameProps = Omit<HTMLMotionProps<"h1">, "children"> & {
  words: string[];
};

export function RollAnimation({ children, ...props }: HTMLMotionProps<"span">) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1.2 }}
     
      
      {...props}
    >
      {children}
    </motion.span>
  );
}


export function HiAnimation({ children, ...props }: HTMLMotionProps<"span">) {
  return (
    <motion.span
    
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      
      {...props}
    >
      {children}
    </motion.span>
  );
}

export function NameAnimation({ words, ...props }: NameProps) {
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={item} className="inline-block mr-3">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export function RollAnimationImage({ children, ...props }: HTMLMotionProps<"span">) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 1.2 }}
     
      
      {...props}
    >
      {children}
    </motion.span>
  );
}

