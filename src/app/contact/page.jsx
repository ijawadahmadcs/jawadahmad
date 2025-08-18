"use client";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vwlv43k", // from EmailJS
        "template_u9y1qcf", // from EmailJS
        { name, email, title, message },
        "bXglXsU_p2_2Y1Kqe" // from EmailJS
      )
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thanks for reaching out.",
            icon: "success",
            confirmButtonColor: "#4f46e5",
          });
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
        },
        (error) => {
          Swal.fire({
            title: "Failed!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#dc2626",
          });
          console.error(error);
        }
      );
  };

  return (
    <section className="py-20 bg-white/50 dark:bg-white dark:text-black">
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

          <form
            className="space-y-4 bg-white p-6 rounded-xl shadow dark:bg-white dark:text-black"
            onSubmit={sendEmail}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              className="w-full shadow-xl p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Message Title"
              className="w-full shadow-xl p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="w-full shadow-xl p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              placeholder="Your Message"
              className="w-full shadow-xl p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
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