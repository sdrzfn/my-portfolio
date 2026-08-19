"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power2.out",
      });
      gsap.from(".photo-frame", {
        y: 24,
        opacity: 0,
        rotation: -4,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });
      gsap.from(".hero-tape", {
        scaleX: 0,
        transformOrigin: "center",
        duration: .55,
        delay: .55,
        ease: "back.out(1.5)",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section hero" ref={root} id="home">
      <div className="container">
        <div className="paper hero-paper">
          <div className="hero-copy">
            <span className="pill-label hero-reveal">
              PROGRAMMER, CREATIVE THINKER & MORE
            </span>

            <h1 className="hero-reveal">
              Hello, I&apos;m <span className="yellow-mark">Sadrakh.</span>
            </h1>

            <p className="hero-reveal">
              My full name is <strong>Sadrakh Zefanya Putra</strong> and I am
              a fresh graduate that just got my degree ;).
            </p>
            <p className="hero-reveal">
              I&apos;m a <span className="yellow-mark">Computer Science fresh grad</span>{" "}
              who looks at web development through a creative lens. I don&apos;t
              just build websites but I also craft digital spaces driven by a
              yearning for innovation and a desire to make people&apos;s lives easier.
            </p>
            {/* <p className="hero-reveal">
              Let&apos;s join my journey to build something that matters.
            </p> */}
            <p className="welcome hero-reveal">
              Welcome to my <strong> website</strong>!!!
            </p>

            <div className="hero-meta hero-reveal">
              <span>
                <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <a href="mailto:sadrakhxvid777@gmail.com">sadrakhxvid777@gmail.com</a>
              </span>
              <span>
                <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                <a href="https://linkedin.com/in/sadrakh-zefanya-putra" target="_blank">linkedin.com/in/sadrakh-zefanya-putra</a>
              </span>
              <span>
                <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                Surabaya, Indonesia
              </span>
              <span>
                <svg xmlns="http://w3.org" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                <a href="https://github.com/sdrzfn" target="_blank">github.com/sdrzfn</a>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame" aria-label="Profile photo placeholder">
              <img src="/images/profile-placeholder.svg" alt="" />
              <div className="tape photo-tape hero-tape" />
              <div className="note photo-caption">
                be served<br />to serve
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
