"use client";

import { useState, useEffect } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Tools & Education", "#tools-education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sectionIds = links.map(([, href]) => href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);

        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.intersectionRatio > b.intersectionRatio ? a : b
          );
          setActive(top.target.id);
        } else {
          setActive("home");
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-paper container">
        <a className="nav-brand" href="#home" onClick={() => setOpen(false)}>
          Sadrakh Z.P.
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => {
            const id = href.slice(1);
            return (
              <a
                key={href}
                href={href}
                className={active === id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}