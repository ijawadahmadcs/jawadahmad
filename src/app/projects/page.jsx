import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white/50 dark:bg-white dark:text-black"
    >
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-8">
          My Projects
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="bg-white shadow-xl rounded-2xl  hover:shadow-2xl">
            <div className="relative">
              <Link href={"https://picksyy.vercel.app/"} target="_blank">
                <img
                  src="images/prog1.png"
                  alt="E-commerce Website"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-commerce Website</h3>
              <p className="text-gray-600 mb-4">
                This project is a modern responsive e-commerce website built
                with Next.js and Tailwind CSS, featuring product browsing,
                category pages, cart management, and theme switching, product
                listings, shopping cart, and secure payment integration.. It
                provides a clean UI with authentication and a fully functional
                shopping experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 px-2 py-1 rounded text-sm">
                  Next.js
                </span>
                <span className="bg-green-100 px-2 py-1 rounded text-sm">
                  Tailwind
                </span>
                <span className="bg-yellow-100 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
              </div>
              <a
                href="https://github.com/ijawadahmadcs/e-commerence.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <FaGithub className="mr-1" /> Code
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl ">
            <div className="relative">
              <Link href="https://clustrapp.vercel.app" target="_blank">
                <img
                  src="images/prog5.jpg"
                  alt="Amazon Clone"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform"
                />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Social Media App (Clustr)
              </h3>
              <p className="text-gray-600 mb-4">
                Clustr is a Twitter-like social platform built with Next.js,
                Firebase, and Redux. It allows users to sign up with
                Email/Google, create posts, like/unlike, comment, and explore
                content. Guests can only read posts, while authenticated users
                get full access. The app features a responsive, minimal UI and
                secure authentication.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100  px-2 py-1 rounded text-sm">
                  Nextjs
                </span>
                <span className="bg-gray-100  px-2 py-1 rounded text-sm">
                  Tailwind CSS
                </span>
                <span className="bg-yellow-100  px-2 py-1 rounded text-sm">
                  Firebase
                </span>
                <span className="bg-red-200  px-2 py-1 rounded text-sm">
                  Redux
                </span>
              </div>
              <a
                href="https://github.com/ijawadahmadcs/clustr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-800"
              >
                <FaGithub className="mr-1" /> Code
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl ">
            <div className="relative">
              <img
                src="images/prog3.png"
                alt="Amazon Clone"
                className="w-full h-48 object-cover hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Amazon Clone</h3>
              <p className="text-gray-600 mb-4">
                A Front-end clone of Amazon's homepage, created with plain HTML
                and image assets. It mainly focuses on replicating the layout,
                design, and structure of Amazon's interface as a practice
                project, without any back-end or dynamic e-commerce
                functionality
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100  px-2 py-1 rounded text-sm">
                  HTML5
                </span>
                <span className="bg-gray-100  px-2 py-1 rounded text-sm">
                  Tailwind CSS
                </span>
              </div>
              <a
                href="https://github.com/ijawadahmadcs/Amazon.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-gray-800"
              >
                <FaGithub className="mr-1" /> Code
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl ">
            <div className="relative">
              <img
                src="images/prog2.jpg"
                alt="Travel And Tour Management System"
                className="w-full h-48 object-cover hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Travel And Tour Management System
              </h3>
              <p className="text-gray-600 mb-4">
                Travel Management System with login authentication, offering
                features like customer, package, and booking management. It
                allows adding, viewing, searching, and deleting customer
                records, package records, booking records, displaying details in
                a structured table format.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-black text-white px-2 py-1 rounded text-sm">
                  C++
                </span>
              </div>
              <a
                href="https://github.com/ijawadahmadcs/travel-and-tour-management.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <FaGithub className="mr-1" /> Code
              </a>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl ">
            <div className="relative">
              <img
                src="images/prog4.jpg"
                alt="Travel And Tour Management System"
                className="w-full h-48 object-cover hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Snake Water Gun</h3>
              <p className="text-gray-600 mb-4">
                This Python project is a simple Snake-Water-Gun game where
                players choose between snake (0), water (1), or gun (2) to
                compete against the computer's random selection. The game tracks
                rounds, declares winners based on the rules (e.g., gun beats
                snake, water beats gun), and handles invalid inputs
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-gradient-to-r from-blue-400 to bg-yellow-300  px-2 py-1 rounded text-sm">
                  Python
                </span>
              </div>
              <a
                href="https://github.com/ijawadahmadcs/snake-water-gun-game"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <FaGithub className="mr-1" /> Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
