import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck, Store } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import FeatureIcon from "@/components/FeatureIcon";
import PhoneMockup from "@/components/PhoneMockup";
import Reveal from "@/components/Reveal";

type Params = { slug: string };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.name} | Tech Root 777`;
  const image = project.hasFeature
    ? `/apps/${project.slug}/feature.webp`
    : `/apps/${project.slug}/icon.webp`;
  return {
    title,
    description: `${project.tagline} ${project.summary}`,
    openGraph: { title, description: project.tagline, images: [image] },
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const shots = Array.from({ length: project.shots }, (_, i) => i + 1);

  return (
    <div style={{ ["--app" as string]: project.accent }}>
      <section className="relative overflow-hidden px-6 pb-16 pt-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]"
          style={{
            background:
              "radial-gradient(45% 60% at 50% 0%, color-mix(in srgb, var(--app) 30%, transparent), transparent)",
          }}
        />
        <div className="mx-auto max-w-5xl">
          <Link
            href="/#apps"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} aria-hidden /> Todos os apps
          </Link>

          <Reveal className="mt-8 flex flex-col items-center text-center">
            <Image
              src={`/apps/${project.slug}/icon.webp`}
              alt={`Ícone do ${project.name}`}
              width={112}
              height={112}
              priority
              className="rounded-3xl shadow-xl"
            />
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              {project.tagline}
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-2">
              {[...project.chips, "Contém anúncios"].map((chip) => (
                <li
                  key={chip}
                  className="rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    color: "var(--app)",
                    background: "color-mix(in srgb, var(--app) 14%, transparent)",
                  }}
                >
                  {chip}
                </li>
              ))}
            </ul>
            <a
              href={project.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
              style={{ background: "var(--app)" }}
            >
              <Store size={18} aria-hidden /> Baixar no Google Play
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-6xl snap-x gap-5 overflow-x-auto pb-6 md:justify-center">
          {shots.map((n) => (
            <div key={n} className="snap-center">
              <PhoneMockup
                src={`/apps/${project.slug}/shot-${n}.webp`}
                alt={`Tela ${n} do ${project.name}`}
                ratio={project.shotRatio}
                width={project.shots > 3 ? 190 : 230}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            Recursos
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-zinc-200/60 bg-card p-6 dark:border-zinc-800">
                  <div
                    className="mb-4 inline-flex rounded-xl p-3"
                    style={{
                      color: "var(--app)",
                      background: "color-mix(in srgb, var(--app) 14%, transparent)",
                    }}
                  >
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight">
            Como funciona
          </h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {project.steps.map((s, i) => (
              <li key={s.title} className="text-center">
                <span
                  className="mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: "var(--app)" }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-muted/50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tight">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {project.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-zinc-200/60 bg-card p-5 dark:border-zinc-800"
              >
                <summary className="cursor-pointer list-none font-medium marker:hidden">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <a
          href={project.privacyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ShieldCheck size={16} aria-hidden /> Política de privacidade do{" "}
          {project.name}
        </a>
      </section>
    </div>
  );
}
