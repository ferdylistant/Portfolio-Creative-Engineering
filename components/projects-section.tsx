import { FolderOpen } from "lucide-react";
import ProjectCard from "./project-card";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-16">
      <div className="flex items-end justify-between border-b border-black/10 pb-4">
        <div>
          <h2 className="font-[var(--font-hanken)] text-4xl font-bold text-[var(--primary)] md:text-5xl">
            Selected Works
          </h2>

          <p className="mt-2 text-sm text-[var(--on-surface-variant)]">
            FOLDER: /root/projects_final_v2
          </p>
        </div>

        <FolderOpen className="hidden size-10 text-[var(--outline)] md:block" />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}