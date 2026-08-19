const posts = [
  ["/images/journal-01.svg", "Designing with Purpose", "May 12, 2026"],
  ["/images/journal-02.svg", "Lessons from Every Project", "Apr 28, 2026"],
  ["/images/journal-03.svg", "My Creative Process", "Apr 10, 2026"],
];

export default function Journal() {
  return (
    <section className="section journal-section" id="journal">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">From the Journal</h2>
          <a className="section-link" href="#journal">view all →</a>
        </div>

        <div className="journal-grid">
          {posts.map(([image, title, date]) => (
            <article className="journal-card" key={title}>
              <div className="journal-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <time>{date}</time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
