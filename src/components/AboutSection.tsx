"use client";

import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 p-2 bg-accent/10 rounded-full mb-6">
            <Code2 size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">Sobre nós</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Desenvolvimento Indie
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A <strong>Tech Root 777</strong> é uma organização de projetos pessoais
            dedicada ao desenvolvimento de apps e experiências digitais. Nosso foco é
            criar produtos com design limpo, código bem estruturado e atenção aos
            detalhes que fazem a diferença.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Acreditamos que bons projetos começam com ideias simples executadas com
            excelência. Cada app e site é uma oportunidade de aprender, experimentar
            e entregar algo que realmente agrega valor.
          </p>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            Feito com <Heart size={14} className="text-red-500/80" /> e código e código
          </div>
        </motion.div>
      </div>
    </section>
  );
}
