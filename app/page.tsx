import Hero from "@/components/home/hero";
import ProcessSection from "@/components/home/process-section";
import ProjectsSection from "@/components/home/projects-section";
import StackSection from "@/components/home/stack-section";
import TerminalSection from "@/components/home/terminal-section";

export default function HomePage() {
  return (
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <ProjectsSection />
      <StackSection />
      <ProcessSection />
      <TerminalSection />
    </div>
  );
}
