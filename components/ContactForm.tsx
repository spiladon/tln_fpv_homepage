"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send message.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" type="text" placeholder="Your name" required />
      </label>

      <label>
        Email
        <input name="email" type="email" placeholder="you@example.com" required />
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows={7}
          placeholder="Write your message..."
          required
        />
      </label>

      <button
        type="submit"
        className="button button-primary submit-button"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="form-success">Message sent successfully. Thank you!</p>
      )}

      {status === "error" && <p className="form-error">{error}</p>}
    </form>
  );
}