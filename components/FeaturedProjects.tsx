"use client";

import useEmblaCarousel from "embla-carousel-react";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Featured Projects</h2>
          <a className="section-link" href="#contact">view all projects →</a>
        </div>

        <div className="projects-shell">
          <button className="carousel-btn prev" onClick={scrollPrev} aria-label="Previous projects">‹</button>
          <div className="projects-track" ref={emblaRef}>
            <div className="projects-container">
              {projects.map((project, index) => (
                <div className="project-slide" key={project.title}>
                  <article className="project-card">
                    <div className="project-image">
                      <img src={project.image} alt="" />
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={scrollNext} aria-label="Next projects">›</button>
        </div>
      </div>
    </section>
  );
}
