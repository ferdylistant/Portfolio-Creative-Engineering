import { ArrowRight, FolderOpen } from "lucide-react";
import Link from "next/link";
import ProjectCard from "@/components/projects/project-card";
import SectionHeading from "@/components/ui/section-heading";
import { featuredProjects, projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-32 space-y-16">
      <SectionHeading title="Selected Works" meta="FOLDER: /root/projects_final_v2" icon={FolderOpen} />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link
          href="/projects"
          className="group inline-flex rotate-1 items-center gap-3 border border-dashed border-black/25 bg-paper-light/70 px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] text-ink transition-all hover:rotate-0 hover:border-accent hover:text-accent"
        >
          Open the full archive ({projects.length} files)
          <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
