"use client";

import Link from "next/link";
import { ExternalLink, Smartphone, Globe } from "lucide-react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.type === "App" ? Smartphone : Globe;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-card border border-zinc-200/30 dark:border-zinc-800/20 rounded-2xl p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-accent/10 rounded-lg">
          <Icon size={24} className="text-accent" />
        </div>
        <span className="text-xs font-medium text-muted-foreground bg-zinc-800/50 dark:bg-zinc-800/50 px-3 py-1 rounded-full">
          {project.type}
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
        {project.name}
      </h3>

      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
        {project.description}
      </p>

      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all"
      >
        Ver projeto
        <ExternalLink size={16} className="text-muted-foreground" />
      </Link>
    </motion.div>
  );
}
