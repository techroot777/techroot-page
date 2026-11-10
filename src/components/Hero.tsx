import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { projects } from "@/data/projects";
import PhoneMockup from "./PhoneMockup";
import Reveal from "./Reveal";

export default function Hero() {
  const [a, b, c] = projects;
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-20 md:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px]"
        style={{
          background:
            "radial-gradient(40% 50% at 25% 10%, color-mix(in srgb, #2563EB 28%, transparent), transparent), radial-gradient(35% 45% at 75% 0%, color-mix(in srgb, #22D3EE 22%, transparent), transparent), radial-gradient(30% 40% at 55% 30%, color-mix(in srgb, #F97316 14%, transparent), transparent)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200/60 bg-card px-3 py-1 text-xs font-medium text-muted-foreground dark:border-zinc-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
            {projects.length} apps no Google Play
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Apps simples,{" "}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-orange-400 bg-clip-text text-transparent">
              privados e leves
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A Tech Root 777 reúne projetos pessoais, feitos por hobby: pequenas
            ferramentas para o dia a dia que funcionam offline, não pedem
            cadastro e respeitam a sua privacidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#apps"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Ver apps <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/#contato"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <Mail size={16} aria-hidden /> Contato
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative flex items-end justify-center gap-4">
          <PhoneMockup
            src={`/apps/${b.slug}/shot-2.webp`}
            alt={`Tela do ${b.name}`}
            ratio={b.shotRatio}
            width={150}
            className="mb-10 hidden sm:block"
          />
          <PhoneMockup
            src={`/apps/${a.slug}/shot-2.webp`}
            alt={`Tela do ${a.name}`}
            ratio={a.shotRatio}
            width={190}
            priority
          />
          <PhoneMockup
            src={`/apps/${c.slug}/shot-1.webp`}
            alt={`Tela do ${c.name}`}
            ratio={c.shotRatio}
            width={150}
            className="mb-16 hidden md:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
