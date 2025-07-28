"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="grid gap-6">
      <div>
        <label htmlFor="name" className="sr-only">
          Enter name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          required
          className="w-full min-w-0 rounded-2xl border border-gray-800 p-4 placeholder:text-gray-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Enter email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
          className="w-full min-w-0 rounded-2xl border border-gray-800 p-4 placeholder:text-gray-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Enter Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          placeholder="Enter your message here..."
          required
          className="w-full min-w-0 rounded-2xl border border-gray-800 p-4 placeholder:text-gray-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="rounded-full bg-fuchsia-400 px-4 py-3 text-sm font-medium text-fuchsia-950 transition-colors hover:bg-fuchsia-500"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400">Something went wrong. Try again later.</p>
      )}
    </form>
  );
}
