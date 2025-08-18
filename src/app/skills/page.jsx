import { FaCode, FaLightbulb, FaUsers } from "react-icons/fa";

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16  mt-8 ">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-9">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform ">
          <FaCode className="text-blue-800 w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
          <p className="text-gray-600 mb-4">
            Modern frontend technologies and frameworks for creating engaging
            user experiences.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100  px-3 py-1 rounded-full text-sm">
              HTML5
            </span>
            <span className="bg-green-100  px-3 py-1 rounded-full text-sm">
              CSS3
            </span>
            <span className="bg-yellow-100  px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform ">
          <FaLightbulb className="text-purple-800 w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Programming Languages</h3>
          <p className="text-gray-600 mb-4">
            Proficient in multiple programming languages for diverse project
            needs.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-100  px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
            <span className="bg-purple-200  px-3 py-1 rounded-full text-sm">
              Python
            </span>
            <span className="bg-blue-100 px-3 py-1 rounded-full text-sm">
              C++
            </span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform ">
          <FaUsers className="text-green-800 w-12 h-12 mb-6" />
          <h3 className="text-2xl font-bold mb-4">Modern Frameworks</h3>
          <p className="text-gray-600 mb-4">
            Cutting-edge frameworks and tools for rapid development.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
              Next.js
            </span>
            <span className="bg-cyan-100  px-3 py-1 rounded-full text-sm">
              Tailwind CSS
            </span>
            <span className="bg-gray-100  px-3 py-1 rounded-full text-sm">
              Flutter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
