"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

/**
 * Contact component — updated to the dark technical theme
 * - Dark, high-contrast layout consistent with the rest of the site
 * - Accessible form with aria-live status, client-side validation, honeypot anti-spam
 * - Loading / success / error states shown inline (no external alert lib required)
 * - Keeps your existing EmailJS setup (service/template/user IDs retained from original)
 *
 * Replace EmailJS values with env-based values if you prefer (not shown here).
 */

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState(""); // honeypot
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
    setBotField("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // basic client-side validation
    if (!name || !email || !title || !message) {
      setErrorMsg("Please complete all fields.");
      setStatus("error");
      return;
    }

    // honeypot check
    if (botField) {
      // silently ignore spam submissions
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        "service_vwlv43k", // keep existing values or replace with your own
        "template_u9y1qcf",
        { name, email, title, message },
        "bXglXsU_p2_2Y1Kqe"
      );

      setStatus("success");
      resetForm();
    } catch (err) {
      console.error("Email send error:", err);
      setErrorMsg("Failed to send message. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#0b1220] text-slate-200 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-mono font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          Contact Me
        </h2>

        <p className="mt-3 text-center text-sm text-slate-400 max-w-2xl mx-auto">
          Have a project or a question? Send a message — I reply to most emails
          within 48 hours.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact info */}
          <aside className="md:col-span-1 bg-[#0b1220] border border-slate-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-black">
                <span className="font-mono font-semibold text-sm">JA</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">
                  Get in touch
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  I'm available for freelance work and collaborations. Reach out
                  using the form or directly via email/phone.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <a
                href="mailto:ijawadahmadcs@gmail.com"
                className="flex items-center gap-3 text-slate-200 hover:text-white transition"
              >
                <FaEnvelope className="text-slate-400" />
                <span>ijawadahmadcs@gmail.com</span>
              </a>

              <a
                href="tel:+923105997585"
                className="flex items-center gap-3 text-slate-200 hover:text-white transition"
              >
                <FaPhone className="text-slate-400" />
                <span>+92 310 5997585</span>
              </a>

              <a
                href="https://www.google.com/maps/search/Islamabad+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-200 hover:text-white transition"
              >
                <FaMapMarkerAlt className="text-slate-400" />
                <span>Islamabad, Pakistan</span>
              </a>
            </div>

            <div className="mt-6">
              <a
                href="/jawad.pdf"
                download
                className="inline-block text-xs font-medium bg-cyan-400 text-black px-3 py-1.5 rounded-md hover:opacity-95 transition"
              >
                Download CV
              </a>
            </div>
          </aside>

          {/* Form */}
          <form
            onSubmit={sendEmail}
            className="md:col-span-2 bg-[#0b1220] border border-slate-800 rounded-2xl p-6 space-y-4"
            aria-labelledby="contact-form-heading"
          >
            <h3 id="contact-form-heading" className="sr-only">
              Contact form
            </h3>

            {/* status message */}
            <div role="status" aria-live="polite" className="min-h-[1.5rem]">
              {status === "success" && (
                <div className="rounded-md bg-emerald-600/10 border border-emerald-600 text-emerald-300 px-4 py-2 text-sm">
                  Message sent — thank you! I'll reply soon.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-md bg-red-600/10 border border-red-600 text-red-300 px-4 py-2 text-sm">
                  {errorMsg || "Failed to send message. Please try again."}
                </div>
              )}
            </div>

            {/* Honeypot field (hidden) */}
            <input
              type="text"
              name="bot-field"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs text-slate-300">Your name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  required
                  className="mt-1 w-full rounded-md bg-[#0b1220] border border-slate-700 px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </label>

              <label className="block">
                <span className="text-xs text-slate-300">Your email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  required
                  className="mt-1 w-full rounded-md bg-[#0b1220] border border-slate-700 px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-xs text-slate-300">Subject</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Message title"
                required
                className="mt-1 w-full rounded-md bg-[#0b1220] border border-slate-700 px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <label className="block">
              <span className="text-xs text-slate-300">Message</span>
              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                className="mt-1 w-full rounded-md bg-[#0b1220] border border-slate-700 px-3 py-2 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-cyan-400 text-black font-medium hover:opacity-95 disabled:opacity-60 disabled:cursor-not-allowed transition"
                aria-disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="text-sm px-3 py-2 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800/40 transition"
              >
                Reset
              </button>

              <div className="ml-auto text-xs text-slate-400">
                I reply within ~48 hours
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
