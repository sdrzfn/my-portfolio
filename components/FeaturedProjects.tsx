"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons(); // set kondisi awal
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Featured Projects</h2>
          <a className="section-link" href="/projects">view all projects →</a>
        </div>

        {/* Carousel Navigation - dipindahkan ke sini */}
        <div className="carousel-nav">
          <button
            className="carousel-btn prev"
            onClick={scrollPrev}
            aria-label="Previous projects"
            disabled={!canPrev}
          >
            &lsaquo;
          </button>
          <button
            className="carousel-btn next"
            onClick={scrollNext}
            aria-label="Next projects"
            disabled={!canNext}
          >
            &rsaquo;
          </button>
        </div>

        <div className="projects-shell">
          <div className="projects-track" ref={emblaRef}>
            <div className="projects-container">
              {projects.map((project, index) => (
                <div className="project-slide" key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-card-link"
                    aria-label={`Lihat detail project ${project.title}`}
                    onMouseDown={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const ripple = document.createElement('span');
                      ripple.className = 'ripple';
                      ripple.style.left = `${e.clientX - rect.left}px`;
                      ripple.style.top = `${e.clientY - rect.top}px`;
                      e.currentTarget.appendChild(ripple);
                      setTimeout(() => ripple.remove(), 600);
                    }}
                  >
                    <article className="project-card">
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={`${project.title} — project by Sadrakh Zefanya Putra`}
                        />
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}