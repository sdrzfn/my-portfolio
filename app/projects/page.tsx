import type { Metadata } from "next";
import ProjectsShowcase from "@/components/ProjectShowcase";

export const metadata: Metadata = {
  title: "Projects — Sadrakh Z.P.",
  description: "A collection of projects I've worked on, spanning web development, IoT, and creative technology.",
};

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <ProjectsShowcase />
    </main>
  );
}