import Footer from "@/components/footer";
import GrainOverlay from "@/components/grain-overlay";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProjectsSection from "@/components/projects-section";
import StackSection from "@/components/stack-section";
import TerminalSection from "@/components/terminal-section";

export default function HomePage() {
  return (
    <>
      <GrainOverlay />

      <Navbar />

      <main className="mx-auto max-w-[1440px] space-y-24 px-5 py-12 md:px-16">
        <Hero />

        <ProjectsSection />

        <StackSection />

        <TerminalSection />
      </main>

      <Footer />
    </>
  );
}