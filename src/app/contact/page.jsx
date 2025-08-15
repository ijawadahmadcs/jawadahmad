// app/contact/page.jsx
"use client";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-8">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-1 gap-12">
    
          <div className="space-y-4 text-gray-700">
            <p>
              Feel free to reach out if you have any questions, want to
              collaborate, or just want to say hello. I’ll try to get back to
              you as soon as possible.
            </p>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>ijawadahmadcs@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-600" />
              <span>+92 310 5997585</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>

          <form className="space-y-4 bg-white p-6 rounded-xl shadow">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full shadow-xl p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full shadow-xl p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full shadow-xl p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
