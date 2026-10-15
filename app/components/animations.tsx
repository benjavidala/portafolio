// components/FadeIn.tsx
"use client";

import { motion, type HTMLMotionProps } from "motion/react";

export function FadeIn({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{once: true}}
      {...props}
    >
      {children}
    </motion.div>
  );
}

