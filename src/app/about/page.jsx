import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <>
  
      <div className="max-w-6xl mx-auto px-6 py-20 bg-white/50">
   
        <h2 className="mt-8 text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <Image
                src="/images/jawad.jpg"
                alt="Jawad Ahmad"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>


          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">Who I Am</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate web developer creating websites and applications
              that not only look great but also solve real problems for clients.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in web development began in college, and since then
              I've worked with startups and established businesses alike.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, I enjoy hiking, reading, and exploring new
              technologies. I believe in continuous learning and staying
              updated with trends.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
             <p className='bg-blue-200 px-4 py-2 rounded-full text-sm font-medium'>Problem Solver</p>
             <p className='bg-green-200 px-4 py-2 rounded-full text-sm font-medium'>Creative Thinker</p>
             <p className='bg-purple-200 px-4 py-2 rounded-full text-sm font-medium'>Team Player</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
