"use client";
import { useState } from "react";

type Tool = {
  name: string;
  image: string;
  alt: string;
};

const tools: Tool[] = [
  { name: "React", image: "/tools/React.svg", alt: "React" },
  { name: "Next.JS", image: "/tools/Nextjs.svg", alt: "Next.JS" },
  { name: "TailwindCSS", image: "/tools/Tailwind.svg", alt: "TailwindCSS" },
  { name: "Node.js", image: "/tools/Nodejs.svg", alt: "Node.js" },
  { name: "MySQL", image: "/tools/MySQL.svg", alt: "MySQL" },
  { name: "Python", image: "/tools/Python.svg", alt: "Python" },
  { name: "Laravel", image: "/tools/Laravel.svg", alt: "Laravel" },
  { name: "GitHub", image: "/tools/GitHub.svg", alt: "GitHub" },
  { name: "Docker", image: "/tools/Docker.svg", alt: "Docker" },
];

const ITEMS_PER_PAGE = 9; // 3x3 grid
const totalPages = Math.ceil(tools.length / ITEMS_PER_PAGE);

const timelineEdu = [
  ["2022–2026", "UPN “Veteran” Jawa Timur", "Bachelor of Information System · Development"],
  ["2018–2021", "SMAN 2 Madiun", "Senior High School · Natural Science Program"],
];

const timelineExp = [
  ["FEB 2025-AUG 2026", "CV Flyhigh Sinergi Indonesia", "Chief Technological Officer"],
  ["FEB 2025-DEC 2025", "Peduli Pangan", "Chief Executive Officer"],
  ["MAR 2024-JAN 2025", "Peduli Pangan", "Chief Technological Officer"],
];

export default function Experience() {
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const visibleTools = tools.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section className="section experience-section" id="tools-education">
      <div className="container">
        <div className="experience-grid">
          <div>
            <div className="tools-header">
              <h2 className="section-title">TOOLS & EXPERTISE</h2>
              <div className="tools-nav">
                <button
                  type="button"
                  className="tools-arrow tools-prev"
                  onClick={goToPrev}
                  aria-label="Previous tools"
                >
                  ‹
                </button>
                <span className="tools-page-indicator">
                  {currentPage + 1}/{totalPages}
                </span>
                <button
                  type="button"
                  className="tools-arrow tools-next"
                  onClick={goToNext}
                  aria-label="Next tools"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="tools-grid-wrapper">
              <div className="tools-grid">
                {visibleTools.map((tool) => (
                  <div className="tool" key={tool.name}>
                    <img
                      src={tool.image}
                      alt={tool.alt}
                      className="tool-image"
                    />
                    <span className="tool-label">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="section-title">LATEST EDUCATION</h2>
            <div className="timeline">
              {timelineEdu.map(([year, title, detail]) => (
                <div className="timeline-item" key={year + title}>
                  <span className="timeline-year">{year}</span>
                  <div className="timeline-content">
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="contact-panel">
            <h2 className="section-title">GET IN TOUCH</h2>
            <p>Let&apos;s work together.<br />Below is my socials, just hit me up! :)</p>
            <div className="socials">
              <a className="social" href="https://github.com/sdrzfn" target="_blank" rel="noreferrer">GH</a>
              <a className="social" href="https://linkedin.com/in/sadrakh-zefanya-putra" target="_blank" rel="noreferrer">in</a>
              <a className="social" href="mailto:sadrakhxvid777@gmail.com">✉</a>
              <a className="social" href="">↗</a>
            </div>
          </div> */}

          <div className="section-experiences">
            <h2 className="section-title">LATEST EXPERIENCES</h2>
            <div className="timeline">
              {timelineExp.map(([year, title, detail]) => (
                <div className="timeline-item" key={year + title}>
                  <span className="timeline-year">{year}</span>
                  <div className="timeline-content">
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}