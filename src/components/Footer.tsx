import Link from "next/link";
import { Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 px-6 py-12 dark:border-zinc-800">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-semibold">Tech Root 777</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Projetos pessoais de hobby. Feedback e suporte por e-mail; as
            respostas podem levar um tempo.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Apps</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link href={`/apps/${p.slug}`} className="hover:text-foreground">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Links e contato</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/privacidade" className="hover:text-foreground">
                Políticas de privacidade
              </Link>
            </li>
            <li>
              <a href="mailto:techroot777@gmail.com" className="hover:text-foreground">
                techroot777@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/techroot777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Github size={16} aria-hidden /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">
        © {currentYear} Tech Root 777. Todos os direitos reservados.
      </p>
    </footer>
  );
}
