"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";

export default function ProjectShowcase() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects" },
  ];

  return (
    <section className="section projects-showcase" id="projects">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Header dengan nomor section seperti referensi */}
        <div className="projects-header">
          <span className="projects-number">
            <Link href="/">← Back To Home</Link>
          </span>
          <h2 className="projects-title">All Projects</h2>
          <p className="projects-subtitle">
            A collection of work spanning web development, IoT, and creative technology.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="project-paper-link"
            >
              <article className="project-paper">
                <div className="project-photo-frame">
                  <img src={project.image} alt={project.title} />
                  <div className="tape photo-tape" />
                </div>
                <div className="project-details">
                  <span className="project-idx">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}