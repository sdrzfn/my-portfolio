"use client";

import { FormEvent, useState, useEffect } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSent(true);
      form.reset();

      setTimeout(() => {
        setSent(false);
      }, 7000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-paper">
          <div>
            <span className="pill-label-short">LET&apos;S MAKE SOMETHING</span>
            <a className="contact-cta">
              Have an idea?<br />
              <span className="yellow-mark">Let&apos;s make it real.</span>
            </a>
            <p>
              Open to creative collaborations, frontend work, product ideas and
              opportunities where technology meets a little bit of personality.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input required name="name" placeholder="your name" disabled={loading} />
            </label>
            <label>
              Email
              <input required type="email" name="email" placeholder="you@example.com" disabled={loading} />
            </label>
            <label>
              Message
              <textarea required name="message" rows={4} placeholder="tell me what you're building..." disabled={loading} />
            </label>
            
            {error && (
              <p className="form-error">{error}</p>
            )}
            
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : sent ? "Message noted ✓" : "Send a message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}