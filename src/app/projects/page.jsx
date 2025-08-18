import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 mt-8">
          My Projects
        </h2>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="bg-white shadow-xl rounded-2xl  hover:shadow-2xl">
            <div className="relative">
              <img
                src="images/prog1.png"
                alt="E-commerce Website"
                className="w-full h-48 object-cover hover:scale-110 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">E-commerce Website</h3>
              <p className="text-gray-600 mb-4">
                A fully responsive e-commerce platform with product listings,
                shopping cart, and secure payment integration.
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
                Clone webpage of Amazon using HTML and modern Tailwind CSS.
                Fully responsive design.
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
                src="images/prog2.png"
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
                A complete travel and tour management system with booking,
                cancelling, and updating features.
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
        </div>
      </div>
    </section>
  );
}
