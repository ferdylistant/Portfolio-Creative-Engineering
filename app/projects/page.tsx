import type { Metadata } from "next";
import ProjectArchive from "@/components/projects/project-archive";
import PageHeader from "@/components/ui/page-header";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "The filing cabinet — every project, case file and side experiment.",
};

export default function ProjectsPage() {
  const years = projects.map((p) => p.year);

  return (
    <>
      <PageHeader
        eyebrow={`Archive · ${Math.min(...years)} — ${Math.max(...years)}`}
        title={
          <>
            The Filing <span className="font-hand font-normal text-accent">Cabinet</span>
          </>
        }
        description="Every project gets a folder. Pull one out to read the full case file: the brief, the mess, the approach and what shipped."
      />

      <ProjectArchive projects={projects} />
    </>
  );
}
