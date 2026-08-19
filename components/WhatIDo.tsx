"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  ["01", "Web Design", "Clean, aesthetic and user-friendly digital experiences."],
  ["02", "Development", "Responsive, accessible and functional web products."],
  ["03", "Visual Storytelling", "Turning ideas into visuals that communicate clearly."],
  ["04", "Creative Direction", "Pairing technology with concepts that feel human."],
];

export default function WhatIDo() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".whatido-paper", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%" },
      });
      gsap.from(".service-card", {
        y: 22,
        opacity: 0,
        stagger: .08,
        duration: .55,
        ease: "power2.out",
        scrollTrigger: { trigger: ".service-grid", start: "top 82%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section whatido-wrap" id="about" ref={root}>
      <div className="container">
        <div className="whatido-paper">
          <div className="whatido-content">
            <div className="whatido-copy">
              <h2>WHAT I DO</h2>
              <p>
                I sit right between creative design and technical innovation.
                Basically, I love taking experimental concepts, pairing them with
                the right tech, and turning them into functional products that
                actually work well for people.
              </p>
              <p className="quote">
                &quot;The best way to predict the future is to invent it.&quot; — Alan Kay
              </p>
            </div>

            <div className="service-grid">
              {services.map(([num, title, text]) => (
                <article className="service-card" key={num}>
                  <strong>{num} / {title}</strong>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
