"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-paper">
          <div>
            <span className="pill-label">LET&apos;S MAKE SOMETHING</span>
            <h2>Have an idea?<br /><span className="yellow-mark">Let&apos;s make it real.</span></h2>
            <p>
              Open to creative collaborations, frontend work, product ideas and
              opportunities where technology meets a little bit of personality.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input required name="name" placeholder="your name" />
            </label>
            <label>
              Email
              <input required type="email" name="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea required name="message" rows={4} placeholder="tell me what you're building..." />
            </label>
            <button type="submit">{sent ? "Message noted ✓" : "Send a message →"}</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-section { padding-top: 35px; }
        .contact-paper {
          position: relative;
          display: grid;
          grid-template-columns: 1fr .9fr;
          gap: 70px;
          padding: 52px;
          background: var(--blue-paper);
          box-shadow: 7px 9px 0 rgba(40,31,18,.08);
          clip-path: polygon(1% 4%, 10% 6%, 18% 3%, 28% 5%, 39% 3%, 51% 6%, 62% 3%, 74% 5%, 87% 3%, 99% 6%, 98% 95%, 88% 93%, 78% 96%, 65% 93%, 54% 97%, 41% 94%, 28% 96%, 15% 93%, 3% 96%);
        }
        .contact-paper h2 {
          margin: 22px 0 16px;
          font-family: var(--display);
          font-size: clamp(2rem, 4vw, 3.8rem);
          line-height: 1.05;
          letter-spacing: -.05em;
        }
        .contact-paper p { max-width: 520px; font-size: .78rem; }
        form { display: grid; gap: 14px; }
        label { display: grid; gap: 5px; font-size: .65rem; font-weight: 700; }
        input, textarea {
          width: 100%;
          border: 1px solid rgba(0,0,0,.35);
          background: rgba(248,244,231,.86);
          padding: 11px 13px;
          outline: none;
          resize: vertical;
        }
        input:focus, textarea:focus { box-shadow: 3px 3px 0 var(--yellow); }
        form button {
          justify-self: start;
          border: 1px solid var(--ink);
          background: var(--ink);
          color: white;
          padding: 11px 18px;
          cursor: pointer;
          font-family: var(--display);
          font-size: .68rem;
        }
        @media (max-width: 720px) {
          .contact-paper { grid-template-columns: 1fr; padding: 46px 30px 54px; gap: 30px; }
        }
      `}</style>
    </section>
  );
}
