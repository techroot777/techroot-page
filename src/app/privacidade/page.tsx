import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Privacidade | Tech Root 777",
  description: "Políticas de privacidade dos apps da Tech Root 777.",
};

export default function PrivacyPage() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Privacidade</h1>
        <p className="mt-4 text-muted-foreground">
          Cada app tem a sua política de privacidade. Em geral, os apps
          funcionam offline, não pedem cadastro e só usam o que é necessário
          para funcionar e exibir anúncios.
        </p>
        <ul className="mt-10 space-y-3">
          {projects.map((p) => (
            <li key={p.slug}>
              <a
                href={p.privacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-zinc-200/60 bg-card p-4 transition hover:shadow-md dark:border-zinc-800"
              >
                <Image
                  src={`/apps/${p.slug}/icon.webp`}
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-xl"
                />
                <span className="flex-1 font-medium">{p.name}</span>
                <ExternalLink size={16} className="text-muted-foreground" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-muted-foreground">
          Dúvidas sobre privacidade? O contato está no rodapé da página.
        </p>
      </div>
    </section>
  );
}
