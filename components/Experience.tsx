const tools = ["Ps", "Ai", "Pr", "Fi", "Bl", "GH", "VSc", "NJS", "SQL"];

const timeline = [
  ["2022–2026", "UPN “Veteran” Jawa Timur", "Bachelor of Information System · Development"],
  ["2018–2021", "SMAN 2 Madiun", "Senior High School · Natural Science Program"],
  ["2025", "Prisma Tradeshow Exhibit", "Advertising Committee Member · Visual assets and marketing materials"],
];

export default function Experience() {
  return (
    <section className="section experience-section" id="tools-education">
      <div className="container">
        <div className="experience-grid">
          <div>
            <h2 className="tools-title">TOOLS & SOFTWARE</h2>
            <div className="tools-grid">
              {tools.map((tool) => <div className="tool" key={tool}>{tool}</div>)}
            </div>
          </div>

          <div>
            <h2 className="experience-title">LATEST EDUCATION</h2>
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
            <h2 className="contact-title">GET IN TOUCH</h2>
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
