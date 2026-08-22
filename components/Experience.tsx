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

const timeline = [
  ["2022–2026", "UPN “Veteran” Jawa Timur", "Bachelor of Information System · Development"],
  ["2018–2021", "SMAN 2 Madiun", "Senior High School · Natural Science Program"],
];

export default function Experience() {
  return (
    <section className="section experience-section" id="tools-education">
      <div className="container">
        <div className="experience-grid">
          <div>
            <h2 className="section-title">TOOLS & EXPERTISE</h2>
            <div className="tools-grid">
              {tools.map((tool) => (
                <div className="tool" key={tool.name}>
                  <img
                    src={tool.image}
                    alt={tool.alt}
                    className="tool-image"
                  />
                  {/* Tooltip label - muncul saat hover */}
                  <span className="tool-label">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title">LATEST EDUCATION</h2>
            <div className="timeline">
              {timeline.map(([year, title, detail]) => (
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

          <div className="contact-panel">
            <h2 className="section-title">GET IN TOUCH</h2>
            <p>Let&apos;s work together.<br />Below is my socials, just hit me up! :)</p>
            <div className="socials">
              <a className="social" href="https://github.com/" target="_blank" rel="noreferrer">GH</a>
              <a className="social" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in</a>
              <a className="social" href="mailto:sadrakhzp.dev@gmail.com">✉</a>
              <a className="social" href="">↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}