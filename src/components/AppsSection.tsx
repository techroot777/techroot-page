import { projects } from "@/data/projects";
import AppCard from "./AppCard";
import Reveal from "./Reveal";

export default function AppsSection() {
  return (
    <section id="apps" className="scroll-mt-20 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Nossos apps
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Todos disponíveis no Google Play, gratuitos e mantidos por anúncios.
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className={i === 0 ? "md:col-span-2" : "h-full"}>
              <AppCard project={project} large={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
