"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [errorMsg, setErrorMsg] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
    setBotField("");
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !title || !message) {
      setErrorMsg("Please complete all fields.");
      setStatus("error");
      return;
    }

    // Honeypot spam protection
    if (botField) return;

    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name,
          email,
          title,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus("success");
      resetForm();
    } catch (err) {
      console.error(err);

      setErrorMsg("Failed to send message.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative z-20 py-24 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-14 border-b border-primary/20 pb-5">
          <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
            <span className="material-symbols-outlined text-primary text-3xl">
              alternate_email
            </span>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-on-surface-variant mt-1">
              Let&apos;s Build Something Amazing
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <div className="glass-panel border border-primary/15 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-primary uppercase mb-4">
                Contact Info
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <FaEnvelope className="text-primary text-lg" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-outline">
                      Email
                    </p>

                    <p className="text-on-surface-variant">
                      jawadahmadcs@example.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                    <FaPhone className="text-secondary text-lg" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-outline">
                      Phone
                    </p>

                    <p className="text-on-surface-variant">+92 310 5997585</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center">
                    <FaMapMarkerAlt className="text-tertiary text-lg" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-outline">
                      Location
                    </p>

                    <p className="text-on-surface-variant">
                      Wah Cantt, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="glass-panel border border-secondary/15 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-secondary uppercase mb-4">
                Social Links
              </h3>

              <div className="flex gap-4">
                <a
                  href="https://github.com/ijawadahmadcs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-14 h-14 rounded-2xl
                    border border-primary/20
                    bg-primary/5
                    flex items-center justify-center
                    hover:bg-primary hover:text-black
                    transition-all duration-300
                  "
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-14 h-14 rounded-2xl
                    border border-secondary/20
                    bg-secondary/5
                    flex items-center justify-center
                    hover:bg-secondary hover:text-white
                    transition-all duration-300
                  "
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://instagram.com/ijawadahmad_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-14 h-14 rounded-2xl
                    border border-secondary/20
                    bg-secondary/5
                    flex items-center justify-center
                    hover:bg-secondary hover:text-white
                    transition-all duration-300
                  "
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="glass-panel border border-primary/15 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold text-primary uppercase mb-6">
              Send Message
            </h3>

            <form onSubmit={sendEmail} className="space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <input
                placeholder="Your Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full rounded-xl border border-white/10
                    bg-black/20 px-4 py-3
                    outline-none
                    focus:border-primary/40
                    transition-all
                  "
                />
              </div>

              {/* Email */}
              <div>
                <input
                  placeholder="Your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full rounded-xl border border-white/10
                    bg-black/20 px-4 py-3
                    outline-none
                    focus:border-primary/40
                    transition-all
                  "
                />
              </div>

              {/* Subject */}
              <div>
               
                <input
                placeholder="Subject"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="
                    w-full rounded-xl border border-white/10
                    bg-black/20 px-4 py-3
                    outline-none
                    focus:border-primary/40
                    transition-all
                  "
                />
              </div>

              {/* Message */}
              <div>
               

                <textarea
                placeholder="Your Message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="
                    w-full rounded-xl border border-white/10
                    bg-black/20 px-4 py-3
                    outline-none resize-none
                    focus:border-primary/40
                    transition-all
                  "
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Message sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  w-full py-4 rounded-xl
                  bg-primary text-black font-bold uppercase tracking-[0.2em]
                  hover:opacity-90
                  transition-all duration-300
                  disabled:opacity-50
                "
              >
                {status === "sending" ? "Sending..." : "Transmit Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
