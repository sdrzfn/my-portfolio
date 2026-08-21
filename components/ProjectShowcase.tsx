"use client";

import { projects } from "@/data/projects";

export default function ProjectsShowcase() {
  return (
    <section className="section projects-showcase" id="projects">
      <div className="container">
        {/* Header dengan nomor section seperti referensi */}
        <div className="projects-header">
          <span className="projects-number"><a href="/">← Back To Home</a></span>
          <h2 className="projects-title">All Projects</h2>
          <p className="projects-subtitle">
            A collection of work spanning web development, IoT, and creative technology.
          </p>
        </div>

        {/* Grid project cards gaya polaroid/scrapbook */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-paper" key={project.title}>
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
          ))}
        </div>
      </div>
    </section>
  );
}