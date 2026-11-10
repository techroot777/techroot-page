import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import PhoneMockup from "./PhoneMockup";

export default function AppCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <Link
      href={`/apps/${project.slug}`}
      style={{ ["--app" as string]: project.accent }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200/60 bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 ${
        large ? "md:col-span-2 md:flex-row md:items-center md:gap-8" : ""
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl transition group-hover:opacity-40"
        style={{ background: "var(--app)" }}
      />

      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-4">
          <Image
            src={`/apps/${project.slug}/icon.webp`}
            alt=""
            width={56}
            height={56}
            className="rounded-2xl shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold leading-tight">
              {project.name}
            </h3>
            <span className="text-xs text-muted-foreground">
              {project.category}
            </span>
          </div>
        </div>

        <p className="mt-5 text-lg font-medium leading-snug">
          {project.tagline}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.chips.map((chip) => (
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

        <span
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
          style={{ color: "var(--app)" }}
        >
          Ver detalhes <ArrowUpRight size={16} aria-hidden />
        </span>
      </div>

      <div
        className={`relative z-10 mt-8 flex justify-center gap-4 ${
          large ? "md:mt-0" : ""
        }`}
      >
        <PhoneMockup
          src={`/apps/${project.slug}/shot-1.webp`}
          alt={`Tela do ${project.name}`}
          ratio={project.shotRatio}
          width={large ? 170 : 150}
        />
        {large && project.shots > 1 && (
          <PhoneMockup
            src={`/apps/${project.slug}/shot-2.webp`}
            alt={`Outra tela do ${project.name}`}
            ratio={project.shotRatio}
            width={170}
            className="mt-10 hidden lg:block"
          />
        )}
      </div>
    </Link>
  );
}
