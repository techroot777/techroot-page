import { Github, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contato" className="scroll-mt-20 px-6 py-20">
      <Reveal className="mx-auto max-w-3xl rounded-3xl border border-zinc-200/60 bg-card p-10 text-center dark:border-zinc-800">
        <h2 className="text-3xl font-bold tracking-tight">Vamos conversar?</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Sugestões, dúvidas ou problemas com algum app? Escreva para a gente.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:techroot777@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            <Mail size={16} aria-hidden /> techroot777@gmail.com
          </a>
          <a
            href="https://github.com/techroot777"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            <Github size={16} aria-hidden /> GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
