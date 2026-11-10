import { Gauge, Languages, Lock, WifiOff } from "lucide-react";
import Reveal from "./Reveal";

const principles = [
  {
    icon: Lock,
    title: "Privacidade primeiro",
    text: "Sem cadastro e sem coleta desnecessária. O que é seu fica no seu celular.",
  },
  {
    icon: WifiOff,
    title: "Funciona offline",
    text: "Sempre que possível, os apps não dependem de internet para fazer o trabalho.",
  },
  {
    icon: Gauge,
    title: "Leve e direto",
    text: "Uma tarefa por app, uma tela limpa e nada de poluição.",
  },
  {
    icon: Languages,
    title: "Para todo mundo",
    text: "Português, inglês e espanhol, seguindo o idioma do seu celular.",
  },
];

export default function Principles() {
  return (
    <section id="principios" className="scroll-mt-20 bg-muted/50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Princípios dos apps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Poucas regras, seguidas em todos os projetos.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-zinc-200/60 bg-card p-6 dark:border-zinc-800">
                <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
