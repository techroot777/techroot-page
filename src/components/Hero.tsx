"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Construindo apps e{" "}
            <span className="text-accent">experiências digitais</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Somos uma organização focada em desenvolvimento indie, criando apps e
            projetos web com atenção aos detalhes e experiência do usuário.
          </p>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Ver projetos
            <ArrowRight size={18} className="text-accent-foreground" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
