"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const progressBar = progressRef.current;
    if (!container || !text || !progressBar) return;
    const duration = 2200; // ms
    const startTime = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(eased);

      if (rawProgress < 1) {
        requestAnimationFrame(updateProgress);
      } else {
        finishLoading();
      }
    };

    const finishLoading = () => {
      gsap.to(container, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setHidden(true);
        },
      });
    };

    // GSAP entrance animation
    const ctx = gsap.context(() => {
      gsap.from(".loading-clip", {
        y: -60,
        opacity: 0,
        rotation: -15,
        duration: 0.8,
        ease: "back.out(1.4)",
      });

      // Paper card slide in
      gsap.from(".loading-paper", {
        y: 40,
        opacity: 0,
        rotation: 2,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.15,
      });

      // Tape animation
      gsap.from(".loading-tape", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.5,
        ease: "back.out(1.5)",
        delay: 0.4,
      });

      // Text typewriter effect
      gsap.from(text, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.5,
      });

      // Progress bar
      gsap.from(progressBar, {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.6,
        ease: "power2.out",
        delay: 0.6,
      });
    }, container);

    // Start progress simulation
    requestAnimationFrame(updateProgress);

    return () => ctx.revert();
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={containerRef}
      className="loading-screen"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="loading-bg" />

      {/* Main loading card */}
      <div className="loading-paper">
        <div className="loading-clip">
          <svg
            width="60"
            height="80"
            viewBox="0 0 92 130"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M57 15c-4-12-22-12-26 0l-12 65c-2 14 19 21 25 7l10-51"
              stroke="#4b3b1c"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Tape decoration */}
        <div className="loading-tape" />

        {/* Content */}
        <div className="loading-content">
          <div className="loading-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
          </div>

          {/* Loading text with typewriter effect */}
          <div ref={textRef} className="loading-text">
            Loading<span className="loading-dots">...</span>
          </div>

          {/* Progress bar - stabilo style */}
          <div className="loading-progress">
            <div
              ref={progressRef}
              className="loading-progress-fill"
              style={{ transform: `scaleX(${progress})` }}
            />
          </div>

          {/* Percentage */}
          <div className="loading-percent">{Math.round(progress * 100)}%</div>
        </div>
      </div>
    </div>
  );
}