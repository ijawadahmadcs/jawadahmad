import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-400 to-blue-500  text-white py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <div className="space-y-4 mb-6">
          <p className="flex items-center justify-center gap-2">
            <FaEnvelope /> ijawadahmadcs@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaPhone /> +92 310 5997585
          </p>
          <p className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> Islamabad, Pakistan
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="https://github.com/ijawadahmadcs"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition transform hover:scale-110"
          >
            <FaGithub className="text-xl" />
          </Link>
          <Link
            href="http://www.linkedin.com/in/ijawadahmadcs"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition transform hover:scale-110"
          >
            <FaLinkedin className="text-xl" />
          </Link>
          <Link
            href="https://x.com/sheikhjawadx?t=pC1wu171p5rKoh7kd58eWg&s=09"
            target="_blank"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition transform hover:scale-110"
          >
            <BsTwitterX className="text-xl" />
          </Link>
          <Link
            href="https://www.instagram.com/ijawadahmad_?igsh=MWk0NTN2eTJwZmo5aA=="
            target="_blank"
            className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition transform hover:scale-110"
          >
            <FaInstagram className="text-xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
