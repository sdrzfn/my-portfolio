"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section project-detail-section">
        <div className="container">
          <div className="project-not-found">
            <h2>Project not found</h2>
            <Link href="/projects" className="back-link">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-detail-section">
      <div className="container">
        {/* Back link */}
        <Link href="/projects" className="project-back-link">
          ← Back to Projects
        </Link>

        {/* Project header with title and tags */}
        <div className="project-detail-header">
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="project-detail-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* Cover image */}
        <div className="project-detail-cover">
          <div className="project-detail-photo-frame">
            <img
              src={project.image}
              alt={project.title}
              className="project-detail-image"
            />
            <div className="tape photo-tape" />
          </div>
        </div>

        {/* Main description */}
        <div className="project-detail-description">
          <p>{project.longDescription}</p>
        </div>

        {/* Role section */}
        <div className="project-detail-role">
          <h3>My Role</h3>
          <p className="role-text">{project.role}</p>
        </div>

        {/* Tech stack */}
        <div className="project-detail-tech">
          <h3>Tech Stack</h3>
          <div className="tech-stack-grid">
            {project.techStack.map((tech) => (
              <div className="tech-item" key={tech}>
                <img
                  src={`/tools/${tech}.svg`}
                  alt={tech}
                  className="tech-icon"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = document.createElement("span");
                    fallback.className = "tech-fallback";
                    fallback.textContent = tech;
                    target.parentNode?.appendChild(fallback);
                  }}
                />
                <span className="tech-name">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features list */}
        <div className="project-detail-features">
          <h3>Key Features</h3>
          <ul className="features-list">
            {project.features.map((feature, index) => (
              <li key={index} className="feature-item">
                <span className="feature-bullet">✎</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Links - GitHub and Live Demo side by side */}
        <div className="project-detail-links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link github-link"
          >
            <span className="link-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </span>
            View on GitHub
          </a>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-link demo-link"
          >
            <span className="link-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </span>
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}