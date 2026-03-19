"use client";

import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-zinc-200 dark:border-zinc-800 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-semibold">Tech Root 777</span>
            <span className="text-muted-foreground">
              © {currentYear} Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/techroot777"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} className="text-muted-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
